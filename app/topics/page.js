'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import {
	getAllTopics,
	categories,
	searchTopics,
} from '@/services/topicService';
import {
	mockSpeakers,
	getSpeakerCountForTopic,
} from '@/services/searchService';

export default function TopicsPage() {
	const [topics, setTopics] = useState([]);
	const [filteredTopics, setFilteredTopics] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	useEffect(() => {
		// Load topics and calculate statistics
		const allTopics = getAllTopics();

		// Add speaker counts to topics
		const topicsWithCounts = allTopics.map((topic) => ({
			...topic,
			speakerCount: getSpeakerCountForTopic(topic.name, mockSpeakers),
		}));

		setTopics(topicsWithCounts);
		setFilteredTopics(topicsWithCounts);
	}, []);

	// Handle category filter
	useEffect(() => {
		let filtered = topics;

		// Filter by category
		if (selectedCategory !== 'all') {
			filtered = filtered.filter(
				(topic) =>
					topic.category.toLowerCase() ===
					selectedCategory.toLowerCase()
			);
		}

		// Filter by search query
		if (searchQuery.trim()) {
			const searchResults = searchTopics(searchQuery);
			filtered = filtered.filter((topic) =>
				searchResults.some((result) => result.slug === topic.slug)
			);
		}

		setFilteredTopics(filtered);
	}, [selectedCategory, searchQuery, topics]);

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
							Browse Speaking Topics
						</h1>
						<p className="mx-auto max-w-3xl text-xl text-gray-300">
							Discover expert speakers across a wide range of
							topics. From cutting-edge technology to leadership
							insights, find the perfect speaker for your next
							event.
						</p>
						<div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
							<div className="flex items-center">
								<span className="mr-2 text-2xl font-bold text-purple-primary">
									{topics.length}
								</span>
								<span>Topics Available</span>
							</div>
							<div className="flex items-center">
								<span className="mr-2 text-2xl font-bold text-purple-primary">
									{mockSpeakers.length}
								</span>
								<span>Expert Speakers</span>
							</div>
							<div className="flex items-center">
								<span className="mr-2 text-2xl font-bold text-purple-primary">
									{categories.length}
								</span>
								<span>Categories</span>
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
									placeholder="Search topics..."
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
							<button
								onClick={() => handleCategoryChange('all')}
								className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
									selectedCategory === 'all'
										? 'bg-purple-primary text-white'
										: 'border border-gray-700 text-gray-300 hover:border-purple-primary hover:text-purple-primary'
								}`}
							>
								All Topics ({topics.length})
							</button>
							{categories.map((category) => {
								const categoryCount = topics.filter(
									(topic) =>
										topic.category.toLowerCase() ===
										category.id.toLowerCase()
								).length;

								return (
									<button
										key={category.id}
										onClick={() =>
											handleCategoryChange(category.id)
										}
										className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
											selectedCategory === category.id
												? 'bg-purple-primary text-white'
												: 'border border-gray-700 text-gray-300 hover:border-purple-primary hover:text-purple-primary'
										}`}
									>
										{category.name} ({categoryCount})
									</button>
								);
							})}
						</div>
					</div>

					{/* Topics Grid */}
					<div className="mb-16">
						{filteredTopics.length > 0 ? (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{filteredTopics.map((topic) => (
									<Link
										key={topic.slug}
										href={`/topics/${topic.slug}`}
										className="group block"
									>
										<div className="card relative overflow-hidden p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
											{/* Gradient Background */}
											<div
												className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
											/>

											{/* Content */}
											<div className="relative z-10">
												{/* Icon and Category */}
												<div className="mb-4 flex items-center justify-between">
													<div className="flex items-center space-x-3">
														<span className="text-3xl">
															{topic.icon}
														</span>
														<span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300">
															{topic.category}
														</span>
													</div>
													{topic.speakerCount > 0 && (
														<div className="rounded-full bg-purple-primary/20 px-3 py-1 text-xs font-medium text-purple-primary">
															{topic.speakerCount}{' '}
															speakers
														</div>
													)}
												</div>

												{/* Topic Name */}
												<h3 className="mb-3 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
													{topic.name}
												</h3>

												{/* Description Preview */}
												<p className="mb-4 line-clamp-3 text-sm text-gray-400">
													{topic.description
														.split('\n\n')[0]
														.substring(0, 120)}
													...
												</p>

												{/* Keywords */}
												<div className="flex flex-wrap gap-2">
													{topic.popularKeywords
														.slice(0, 3)
														.map((keyword) => (
															<span
																key={keyword}
																className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-300"
															>
																{keyword}
															</span>
														))}
													{topic.popularKeywords
														.length > 3 && (
														<span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400">
															+
															{topic
																.popularKeywords
																.length -
																3}{' '}
															more
														</span>
													)}
												</div>

												{/* Hover Arrow */}
												<div className="mt-4 flex items-center text-purple-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
													<span className="mr-2 text-sm font-medium">
														Explore speakers
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
									No topics found
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
							Can&apos;t find the right topic?
						</h2>
						<p className="mb-6 text-gray-300">
							Our team can help you find the perfect speaker for
							your specific needs and audience.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Link
								href="/search"
								className="rounded-lg bg-purple-primary px-8 py-3 font-medium text-white transition-colors hover:bg-purple-600"
							>
								Browse All Speakers
							</Link>
							<Link
								href="/contact"
								className="rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
							>
								Contact Our Team
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
