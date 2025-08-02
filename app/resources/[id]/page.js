'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import {
	getResourceById,
	getRelatedResources,
	calculateROI
} from '@/services/resourceService';

export default function ResourcePage() {
	const params = useParams();
	const router = useRouter();
	const [resource, setResource] = useState(null);
	const [relatedResources, setRelatedResources] = useState([]);
	const [loading, setLoading] = useState(true);
	
	// ROI Calculator state
	const [calculatorInputs, setCalculatorInputs] = useState({});
	const [calculatorResults, setCalculatorResults] = useState(null);
	const [showCalculator, setShowCalculator] = useState(false);

	useEffect(() => {
		const fetchResourceData = async () => {
			setLoading(true);

			// Simulate API delay
			await new Promise(resolve => setTimeout(resolve, 300));

			const resourceData = getResourceById(params.id);

			if (!resourceData) {
				router.push('/404');
				return;
			}

			const related = getRelatedResources(params.id, 2);

			setResource(resourceData);
			setRelatedResources(related);
			setShowCalculator(resourceData.id === 'roi-calculator');
			setLoading(false);
		};

		fetchResourceData();
	}, [params.id, router]);

	const handleCalculatorInputChange = (fieldName, value) => {
		const numericValue = fieldName.includes('Rate') || fieldName.includes('Percentage') 
			? parseFloat(value) || 0
			: parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
		
		const updatedInputs = {
			...calculatorInputs,
			[fieldName]: numericValue
		};
		
		setCalculatorInputs(updatedInputs);
		
		// Auto-calculate when we have some inputs
		const hasInputs = Object.values(updatedInputs).some(val => val > 0);
		if (hasInputs) {
			const results = calculateROI(updatedInputs);
			setCalculatorResults(results);
		}
	};

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(amount);
	};

	const formatPercentage = (percentage) => {
		return new Intl.NumberFormat('en-US', {
			style: 'percent',
			minimumFractionDigits: 1,
			maximumFractionDigits: 1
		}).format(percentage / 100);
	};

	if (loading) {
		return (
			<>
				<Header />
				<main className="min-h-screen bg-dark-bg-primary text-white">
					<div className="container mx-auto px-6 pt-28 pb-16">
						{/* Loading skeleton */}
						<div className="animate-pulse">
							<div className="mb-6 h-6 w-64 rounded bg-gray-700" />
							<div className="mb-8 h-16 w-3/4 rounded bg-gray-700" />
							<div className="mb-12 space-y-4">
								<div className="h-4 w-full rounded bg-gray-700" />
								<div className="h-4 w-5/6 rounded bg-gray-700" />
								<div className="h-4 w-4/5 rounded bg-gray-700" />
							</div>
							<div className="h-96 w-full rounded bg-gray-700" />
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	if (!resource) {
		return null;
	}

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Breadcrumb */}
					<nav className="mb-8 flex items-center space-x-2 text-sm text-gray-400">
						<Link href="/" className="hover:text-purple-primary">
							Home
						</Link>
						<span>/</span>
						<Link href="/resources" className="hover:text-purple-primary">
							Resources
						</Link>
						<span>/</span>
						<span className="text-white">{resource.title}</span>
					</nav>

					{/* Resource Header */}
					<div className="mb-12">
						<div className="flex items-start justify-between">
							<div className="flex-1">
								<div className="mb-4 flex items-center space-x-4">
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
									<div>
										<span className="rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300">
											{resource.categoryLabel}
										</span>
										{resource.featured && (
											<span className="ml-2 rounded-full bg-purple-primary/20 px-3 py-1 text-sm font-medium text-purple-primary">
												Featured
											</span>
										)}
									</div>
								</div>
								
								<h1 className="mb-4 font-poppins text-4xl font-bold md:text-5xl">
									{resource.title}
								</h1>
								
								<p className="mb-6 text-xl text-gray-300">
									{resource.description}
								</p>
								
								<div className="flex items-center space-x-6 text-sm text-gray-400">
									<span>By {resource.author}</span>
									<span>•</span>
									<span>{resource.readTime}</span>
									<span>•</span>
									<span>Published {new Date(resource.publishDate).toLocaleDateString()}</span>
								</div>
							</div>
							
							{resource.downloadable && (
								<div className="ml-8">
									<button className="flex items-center rounded-lg bg-purple-primary px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600">
										<svg
											className="mr-2 h-5 w-5"
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
										Download PDF
									</button>
								</div>
							)}
						</div>
						
						{/* Tags */}
						<div className="mt-6 flex flex-wrap gap-2">
							{resource.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Content */}
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
						{/* Main Content */}
						<div className="lg:col-span-3">
							{/* Introduction */}
							<div className="card mb-8 p-8">
								<p className="text-lg leading-relaxed text-gray-300">
									{resource.content.introduction}
								</p>
							</div>

							{/* ROI Calculator - Special case */}
							{showCalculator && resource.content.calculatorFields && (
								<div className="card mb-8 p-8">
									<h2 className="mb-6 font-poppins text-2xl font-bold">
										ROI Calculator
									</h2>
									
									<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
										{/* Calculator Inputs */}
										<div className="space-y-6">
											{resource.content.calculatorFields.map((category) => (
												<div key={category.category}>
													<h3 className="mb-4 font-semibold text-purple-primary">
														{category.category}
													</h3>
													<div className="space-y-3">
														{category.fields.map((field) => (
															<div key={field.name}>
																<label className="mb-1 block text-sm text-gray-400">
																	{field.label}
																</label>
																<input
																	type={field.type === 'currency' ? 'text' : field.type}
																	placeholder={field.type === 'currency' ? '$0' : field.type === 'percentage' ? '0%' : '0'}
																	value={calculatorInputs[field.name] || ''}
																	onChange={(e) => handleCalculatorInputChange(field.name, e.target.value)}
																	className="w-full rounded-lg border border-gray-700 bg-dark-bg-secondary px-4 py-2 text-white placeholder-gray-500 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
																/>
															</div>
														))}
													</div>
												</div>
											))}
										</div>
										
										{/* Calculator Results */}
										<div className="rounded-lg bg-dark-bg-secondary p-6">
											<h3 className="mb-4 font-semibold text-purple-primary">
												ROI Analysis
											</h3>
											
											{calculatorResults ? (
												<div className="space-y-4">
													<div className="border-b border-gray-700 pb-4">
														<div className="text-3xl font-bold text-green-400">
															{formatPercentage(calculatorResults.roi)}
														</div>
														<div className="text-sm text-gray-400">Return on Investment</div>
														<div className="mt-1 text-sm text-purple-primary">
															{calculatorResults.benchmark}
														</div>
													</div>
													
													<div className="space-y-2 text-sm">
														<div className="flex justify-between">
															<span className="text-gray-400">Total Revenue:</span>
															<span className="text-green-400">{formatCurrency(calculatorResults.totalRevenue)}</span>
														</div>
														<div className="flex justify-between">
															<span className="text-gray-400">Total Costs:</span>
															<span className="text-red-400">{formatCurrency(calculatorResults.totalCosts)}</span>
														</div>
														<div className="flex justify-between border-t border-gray-700 pt-2 font-semibold">
															<span>Net Profit:</span>
															<span className={calculatorResults.netProfit >= 0 ? 'text-green-400' : 'text-red-400'}>
																{formatCurrency(calculatorResults.netProfit)}
															</span>
														</div>
													</div>
												</div>
											) : (
												<div className="text-center text-gray-400">
													<p>Enter your event data to see ROI analysis</p>
												</div>
											)}
										</div>
									</div>
								</div>
							)}

							{/* Content Sections */}
							{resource.content.sections.map((section) => (
								<div key={section.id} className="card mb-8 p-8">
									<h2 className="mb-4 font-poppins text-2xl font-bold">
										{section.title}
									</h2>
									<p className="mb-6 leading-relaxed text-gray-300">
										{section.content}
									</p>
									
									{section.subsections && section.subsections.map((subsection, index) => (
										<div key={index} className="mb-6">
											<h3 className="mb-3 font-semibold text-purple-primary">
												{subsection.title}
											</h3>
											<ul className="space-y-2">
												{subsection.items.map((item, itemIndex) => (
													<li key={itemIndex} className="flex items-start text-gray-300">
														<span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-primary" />
														{item}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							))}

							{/* Action Items */}
							{resource.content.actionItems && (
								<div className="card mb-8 p-8">
									<h2 className="mb-4 font-poppins text-2xl font-bold">
										Next Steps
									</h2>
									<ul className="space-y-3">
										{resource.content.actionItems.map((item, index) => (
											<li key={index} className="flex items-start text-gray-300">
												<span className="mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-primary text-sm font-semibold text-white">
													{index + 1}
												</span>
												{item}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>

						{/* Sidebar */}
						<div className="lg:col-span-1">
							{/* Quick Stats for Reports */}
							{resource.content.statistics && (
								<div className="card mb-8 p-6">
									<h3 className="mb-4 font-semibold text-purple-primary">
										Key Statistics
									</h3>
									<div className="space-y-3">
										{Object.entries(resource.content.statistics).map(([key, value]) => (
											<div key={key} className="text-center">
												<div className="text-2xl font-bold text-white">{value}</div>
												<div className="text-xs text-gray-400">
													{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
												</div>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Resource Actions */}
							<div className="card mb-8 p-6">
								<h3 className="mb-4 font-semibold">Actions</h3>
								<div className="space-y-3">
									{resource.downloadable && (
										<button className="w-full rounded-lg bg-purple-primary px-4 py-2 font-medium text-white transition-colors hover:bg-purple-600">
											Download PDF
										</button>
									)}
									<button className="w-full rounded-lg border border-gray-700 px-4 py-2 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary">
										Share Resource
									</button>
									<button className="w-full rounded-lg border border-gray-700 px-4 py-2 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary">
										Bookmark
									</button>
								</div>
							</div>

							{/* Related Resources */}
							{relatedResources.length > 0 && (
								<div className="card p-6">
									<h3 className="mb-4 font-semibold">Related Resources</h3>
									<div className="space-y-4">
										{relatedResources.map((relatedResource) => (
											<Link
												key={relatedResource.id}
												href={`/resources/${relatedResource.id}`}
												className="group block"
											>
												<div className="rounded-lg border border-gray-700 p-4 transition-colors hover:border-purple-primary">
													<h4 className="font-medium text-white group-hover:text-purple-primary">
														{relatedResource.title}
													</h4>
													<p className="mt-1 text-sm text-gray-400">
														{relatedResource.shortDescription}
													</p>
													<div className="mt-2 text-xs text-gray-500">
														{relatedResource.readTime}
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Call to Action */}
					<div className="card mt-16 p-8 text-center md:p-12">
						<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
							Ready to find your perfect speaker?
						</h2>
						<p className="mb-6 text-gray-300">
							Put these insights into action and start your speaker search today.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Link
								href="/search"
								className="rounded-lg bg-purple-primary px-8 py-3 font-medium text-white transition-colors hover:bg-purple-600"
							>
								Search Speakers
							</Link>
							<Link
								href="/contact"
								className="rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
							>
								Get Expert Help
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}