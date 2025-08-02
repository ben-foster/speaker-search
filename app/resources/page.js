'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import {
	getAllResources,
	getResourcesByCategory,
	resourceCategories,
	searchResources,
	getResourceStatistics
} from '@/services/resourceService';

export default function ResourcesPage() {
	const [resources, setResources] = useState([]);
	const [filteredResources, setFilteredResources] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [stats, setStats] = useState({});

	useEffect(() => {
		const allResources = getAllResources();
		const resourceStats = getResourceStatistics();
		
		setResources(allResources);
		setFilteredResources(allResources);
		setStats(resourceStats);
	}, []);

	// Handle category filter
	useEffect(() => {
		let filtered = resources;

		// Filter by category
		if (selectedCategory !== 'all') {
			filtered = getResourcesByCategory(selectedCategory);
		}

		// Filter by search query
		if (searchQuery.trim()) {
			filtered = searchResources(searchQuery);
			// If we have both category and search, intersect the results
			if (selectedCategory !== 'all') {
				const categoryResources = getResourcesByCategory(selectedCategory);
				filtered = filtered.filter(resource =>
					categoryResources.some(cr => cr.id === resource.id)
				);
			}
		}

		setFilteredResources(filtered);
	}, [selectedCategory, searchQuery, resources]);

	const handleCategoryChange = (categoryId) => {
		setSelectedCategory(categoryId);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-16 text-center">
						<h1 className="mb-4 font-poppins text-4xl font-bold md:text-5xl">
							Speaker Booking Resources
						</h1>
						<p className="mx-auto max-w-3xl text-xl text-gray-300">
							Everything you need to book speakers with confidence. 
							Free guides, reports, and tools to help you make 
							informed decisions and maximize your event ROI.
						</p>
						
						{/* Stats */}
						<div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
							<div className="flex items-center">
								<span className="mr-2 text-2xl font-bold text-purple-primary">
									{stats.totalResources}
								</span>
								<span>Free Resources</span>
							</div>
							<div className="flex items-center">
								<span className="mr-2 text-2xl font-bold text-purple-primary">
									{stats.totalDownloads}
								</span>
								<span>Downloadable Guides</span>
							</div>
							<div className="flex items-center">
								<span className="mr-2 text-2xl font-bold text-purple-primary">
									{stats.averageReadTime}
								</span>
								<span>Avg. Read Time (min)</span>
							</div>
						</div>
					</div>

					{/* Search and Filters */}
					<div className="mb-12">
						{/* Search Bar */}
						<div className="mx-auto mb-8 max-w-2xl">
							<div className="relative">
								<input
									type="text"
									placeholder="Search resources..."
									value={searchQuery}
									onChange={handleSearchChange}
									className="w-full rounded-2xl border border-gray-700 bg-dark-bg-secondary px-6 py-4 pl-14 text-lg placeholder-gray-400 transition-all duration-200 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
								/>
								<svg
									className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>

						{/* Category Filter */}
						<div className="flex flex-wrap justify-center gap-4">
							{resourceCategories.map((category) => (
								<button
									key={category.id}
									onClick={() => handleCategoryChange(category.id)}
									className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
										selectedCategory === category.id
											? 'bg-purple-primary text-white'
											: 'border border-gray-700 text-gray-300 hover:border-purple-primary hover:text-purple-primary'
									}`}
								>
									{category.name} ({category.count})
								</button>
							))}
						</div>
					</div>

					{/* Resources Grid */}
					<div className="mb-16">
						{filteredResources.length > 0 ? (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{filteredResources.map((resource) => (
									<Link
										key={resource.id}
										href={`/resources/${resource.id}`}
										className="group block"
									>
										<div className="card relative overflow-hidden p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
											{/* Gradient Background */}
											<div
												className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
											/>

											{/* Content */}
											<div className="relative z-10">
												{/* Icon and Category */}
												<div className="mb-4 flex items-center justify-between">
													<div
														className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
															resource.color === 'purple'
																? 'bg-purple-primary/20 text-purple-primary'
																: resource.color === 'blue'
																	? 'bg-blue-500/20 text-blue-400'
																	: 'bg-green-500/20 text-green-400'
														}`}
													>
														{resource.icon}
													</div>
													<div className="text-right">
														<span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
															{resource.categoryLabel}
														</span>
														{resource.featured && (
															<div className="mt-1">
																<span className="rounded-full bg-purple-primary/20 px-2 py-1 text-xs font-medium text-purple-primary">
																	Featured
																</span>
															</div>
														)}
													</div>
												</div>

												{/* Title */}
												<h3 className="mb-3 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
													{resource.title}
												</h3>

												{/* Description */}
												<p className="mb-4 line-clamp-3 text-sm text-gray-400">
													{resource.shortDescription}
												</p>

												{/* Meta Info */}
												<div className="mb-4 flex items-center justify-between text-xs text-gray-500">
													<span>{resource.readTime}</span>
													<span>{resource.author}</span>
												</div>

												{/* Tags */}
												<div className="mb-4 flex flex-wrap gap-2">
													{resource.tags.slice(0, 3).map((tag) => (
														<span
															key={tag}
															className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300"
														>
															{tag}
														</span>
													))}
													{resource.tags.length > 3 && (
														<span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400">
															+{resource.tags.length - 3} more
														</span>
													)}
												</div>

												{/* Action */}
												<div className="flex items-center justify-between">
													<div className="flex items-center text-purple-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
														<span className="mr-2 text-sm font-medium">
															{resource.interactive ? 'Use Tool' : resource.downloadable ? 'Download' : 'Read More'}
														</span>
														<svg
															className="h-4 w-4"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M9 5l7 7-7 7"
															/>
														</svg>
													</div>
													{resource.downloadable && (
														<svg
															className="h-5 w-5 text-gray-500"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
															/>
														</svg>
													)}
													{resource.interactive && (
														<svg
															className="h-5 w-5 text-gray-500"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
															/>
														</svg>
													)}
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						) : (
							/* No Results */
							<div className="py-20 text-center">
								<div className="mx-auto mb-4 w-fit rounded-full bg-gray-800 p-6">
									<svg
										className="h-12 w-12 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</div>
								<h3 className="mb-2 font-poppins text-xl font-semibold">
									No resources found
								</h3>
								<p className="text-gray-400">
									Try adjusting your search or filter criteria
								</p>
								<button
									onClick={() => {
										setSearchQuery('');
										setSelectedCategory('all');
									}}
									className="mt-4 rounded-lg bg-purple-primary px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
								>
									Clear Filters
								</button>
							</div>
						)}
					</div>

					{/* Call to Action */}
					<div className="card p-8 text-center md:p-12">
						<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
							Need personalized help?
						</h2>
						<p className="mb-6 text-gray-300">
							Our team of speaker booking experts is here to help you 
							find the perfect speaker for your specific event needs.
						</p>
						<Link
							href="/contact"
							className="inline-block rounded-lg bg-purple-primary px-8 py-3 font-medium text-white transition-colors hover:bg-purple-600"
						>
							Get Expert Help
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}