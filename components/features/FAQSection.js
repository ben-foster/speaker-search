'use client';

import { useState, useMemo } from 'react';
import { getFAQCategories, searchFAQs, getFAQsByCategory } from '@/services/faqService';

export default function FAQSection() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [expandedFAQ, setExpandedFAQ] = useState(null);

	const categories = getFAQCategories();

	// Get filtered FAQs based on search and category
	const filteredFAQs = useMemo(() => {
		if (searchQuery.trim()) {
			return searchFAQs(searchQuery, selectedCategory);
		}
		return getFAQsByCategory(selectedCategory);
	}, [searchQuery, selectedCategory]);

	const toggleFAQ = (faqId) => {
		setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
	};

	const handleCategoryChange = (categoryId) => {
		setSelectedCategory(categoryId);
		setSearchQuery('');
		setExpandedFAQ(null);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		setExpandedFAQ(null);
	};

	return (
		<section>
			<div className="text-center mb-12">
				<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
					Search Questions & Answers
				</h2>
				<p className="mx-auto max-w-2xl text-xl text-gray-300">
					Use the search bar or browse by category to find exactly what you're looking for.
				</p>
			</div>

			{/* Search Bar */}
			<div className="mb-8">
				<div className="relative max-w-2xl mx-auto">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Search frequently asked questions..."
						className="w-full pl-10 pr-4 py-4 bg-dark-bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
					/>
				</div>
			</div>

			{/* Category Filters */}
			<div className="mb-12">
				<div className="flex flex-wrap justify-center gap-3">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => handleCategoryChange(category.id)}
							className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								selectedCategory === category.id
									? 'bg-purple-primary text-white'
									: 'bg-dark-bg-secondary text-gray-300 hover:bg-gray-700 border border-gray-700'
							}`}
						>
							<span className="mr-2">{category.icon}</span>
							{category.name}
							{selectedCategory === category.id && (
								<span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
									{filteredFAQs.length}
								</span>
							)}
						</button>
					))}
				</div>
			</div>

			{/* Search Results Info */}
			{searchQuery && (
				<div className="mb-6 text-center">
					<p className="text-gray-400">
						Found <span className="text-purple-primary font-semibold">{filteredFAQs.length}</span> result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
						{selectedCategory !== 'all' && (
							<span> in <span className="text-purple-primary">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
						)}
					</p>
				</div>
			)}

			{/* FAQ List */}
			<div className="space-y-4">
				{filteredFAQs.length === 0 ? (
					<div className="text-center py-12">
						<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
							<svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-white mb-2">No Questions Found</h3>
						<p className="text-gray-400 mb-6">
							{searchQuery 
								? `No questions match "${searchQuery}" in the selected category.`
								: 'No questions available in this category.'
							}
						</p>
						<button
							onClick={() => {
								setSearchQuery('');
								setSelectedCategory('all');
							}}
							className="btn-secondary"
						>
							Clear Filters
						</button>
					</div>
				) : (
					filteredFAQs.map((faq) => {
						const isExpanded = expandedFAQ === faq.id;
						const categoryInfo = categories.find(cat => cat.id === faq.category);
						
						return (
							<div key={faq.id} className="card">
								<button
									onClick={() => toggleFAQ(faq.id)}
									className="w-full p-6 text-left hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-inset rounded-lg"
								>
									<div className="flex items-start justify-between">
										<div className="flex-1 pr-4">
											<div className="flex items-center mb-2">
												{categoryInfo && (
													<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-primary/20 text-purple-primary mr-3">
														{categoryInfo.icon} {categoryInfo.name}
													</span>
												)}
												{faq.popular && (
													<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
														⭐ Popular
													</span>
												)}
											</div>
											<h3 className="text-lg font-semibold text-white mb-2">
												{faq.question}
											</h3>
											{faq.tags && faq.tags.length > 0 && (
												<div className="flex flex-wrap gap-2">
													{faq.tags.map((tag) => (
														<span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
															{tag}
														</span>
													))}
												</div>
											)}
										</div>
										<div className="flex-shrink-0">
											<svg 
												className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
												fill="none" 
												stroke="currentColor" 
												viewBox="0 0 24 24"
											>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
											</svg>
										</div>
									</div>
								</button>
								
								{isExpanded && (
									<div className="px-6 pb-6">
										<div className="border-t border-gray-700 pt-4">
											<div className="prose prose-invert max-w-none">
												<p className="text-gray-300 leading-relaxed whitespace-pre-line">
													{faq.answer}
												</p>
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})
				)}
			</div>

			{/* Load More / Pagination could go here if needed */}
			{filteredFAQs.length > 10 && (
				<div className="text-center mt-8">
					<p className="text-gray-400 text-sm">
						Showing {Math.min(10, filteredFAQs.length)} of {filteredFAQs.length} questions
					</p>
				</div>
			)}
		</section>
	);
}