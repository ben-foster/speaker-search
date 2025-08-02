'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
	getBlogCategories, 
	searchBlogPosts, 
	getBlogPostsByCategory,
	formatBlogPost
} from '@/services/blogService';

export default function BlogSection() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [sortBy, setSortBy] = useState('recent'); // recent, popular, views

	const categories = getBlogCategories();

	// Get filtered and sorted blog posts
	const filteredPosts = useMemo(() => {
		let posts;
		
		if (searchQuery.trim()) {
			posts = searchBlogPosts(searchQuery, selectedCategory);
		} else {
			posts = getBlogPostsByCategory(selectedCategory);
		}

		// Sort posts based on selected criteria
		switch (sortBy) {
			case 'popular':
				return posts.sort((a, b) => b.likes - a.likes);
			case 'views':
				return posts.sort((a, b) => b.views - a.views);
			case 'recent':
			default:
				return posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
		}
	}, [searchQuery, selectedCategory, sortBy]);

	const handleCategoryChange = (categoryId) => {
		setSelectedCategory(categoryId);
		setSearchQuery('');
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<section>
			<div className="text-center mb-12">
				<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
					Browse All Articles
				</h2>
				<p className="mx-auto max-w-2xl text-xl text-gray-300">
					Search our complete library of articles or filter by category and preferences.
				</p>
			</div>

			{/* Search and Filters */}
			<div className="card p-6 mb-12">
				{/* Search Bar */}
				<div className="mb-6">
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
							placeholder="Search articles by title, content, or tags..."
							className="w-full pl-10 pr-4 py-3 bg-dark-bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
						/>
					</div>
				</div>

				{/* Filters Row */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{/* Category Filter */}
					<div>
						<label className="block text-sm font-medium text-gray-200 mb-2">
							Category
						</label>
						<div className="flex flex-wrap gap-2">
							{categories.slice(0, 4).map((category) => (
								<button
									key={category.id}
									onClick={() => handleCategoryChange(category.id)}
									className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors ${
										selectedCategory === category.id
											? 'bg-purple-primary text-white'
											: 'bg-dark-bg-secondary text-gray-300 hover:bg-gray-700 border border-gray-700'
									}`}
								>
									<span className="mr-2">{category.icon}</span>
									{category.name}
								</button>
							))}
						</div>
					</div>

					{/* Sort Filter */}
					<div>
						<label className="block text-sm font-medium text-gray-200 mb-2">
							Sort By
						</label>
						<select
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
							className="w-full px-3 py-2 bg-dark-bg-secondary border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
						>
							<option value="recent">Most Recent</option>
							<option value="popular">Most Liked</option>
							<option value="views">Most Viewed</option>
						</select>
					</div>
				</div>
			</div>

			{/* Results Info */}
			<div className="mb-8 flex items-center justify-between">
				<p className="text-gray-400">
					{searchQuery ? (
						<>
							Found <span className="text-purple-primary font-semibold">{filteredPosts.length}</span> result{filteredPosts.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
							{selectedCategory !== 'all' && (
								<span> in <span className="text-purple-primary">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
							)}
						</>
					) : (
						<>
							Showing <span className="text-purple-primary font-semibold">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
							{selectedCategory !== 'all' && (
								<span> in <span className="text-purple-primary">{categories.find(c => c.id === selectedCategory)?.name}</span></span>
							)}
						</>
					)}
				</p>

				{(searchQuery || selectedCategory !== 'all') && (
					<button
						onClick={() => {
							setSearchQuery('');
							setSelectedCategory('all');
						}}
						className="text-sm text-purple-primary hover:underline"
					>
						Clear Filters
					</button>
				)}
			</div>

			{/* Articles Grid */}
			{filteredPosts.length === 0 ? (
				<div className="text-center py-16">
					<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
						<svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
						</svg>
					</div>
					<h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
					<p className="text-gray-400 mb-6">
						{searchQuery 
							? `No articles match "${searchQuery}" in the selected category.`
							: 'No articles available in this category.'
						}
					</p>
					<button
						onClick={() => {
							setSearchQuery('');
							setSelectedCategory('all');
						}}
						className="btn-secondary"
					>
						View All Articles
					</button>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{filteredPosts.map((post) => {
						const formattedPost = formatBlogPost(post);
						
						return (
							<article key={post.id} className="card group hover:scale-105 transition-all duration-300">
								<div className="p-6 h-full flex flex-col">
									{/* Category and Meta */}
									<div className="flex items-center justify-between mb-4">
										<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-primary/20 text-purple-primary">
											{formattedPost.categoryInfo?.icon} {formattedPost.categoryInfo?.name}
										</span>
										<div className="flex items-center space-x-2 text-xs text-gray-500">
											<span>{post.readTime} min</span>
											{post.featured && (
												<span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">
													Featured
												</span>
											)}
										</div>
									</div>

									{/* Title */}
									<h3 className="font-poppins text-xl font-bold mb-3 group-hover:text-purple-primary transition-colors">
										<Link href={`/blog/${post.slug}`}>
											{post.title}
										</Link>
									</h3>

									{/* Excerpt */}
									<p className="text-gray-300 leading-relaxed mb-6 flex-grow">
										{post.excerpt}
									</p>

									{/* Tags */}
									{post.tags && post.tags.length > 0 && (
										<div className="flex flex-wrap gap-2 mb-4">
											{post.tags.slice(0, 3).map((tag) => (
												<span key={tag} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
													#{tag}
												</span>
											))}
											{post.tags.length > 3 && (
												<span className="text-xs text-gray-500">
													+{post.tags.length - 3} more
												</span>
											)}
										</div>
									)}

									{/* Footer */}
									<div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
										<div className="flex items-center space-x-4">
											<span className="flex items-center">
												<svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
												</svg>
												{post.views}
											</span>
											<span className="flex items-center">
												<svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
												</svg>
												{post.likes}
											</span>
										</div>
										<span>{formattedPost.publishedDate}</span>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			)}

			{/* Load More / Pagination */}
			{filteredPosts.length > 9 && (
				<div className="text-center mt-12">
					<p className="text-gray-400 text-sm mb-4">
						Showing first 9 of {filteredPosts.length} articles
					</p>
					<button className="btn-secondary">
						Load More Articles
					</button>
				</div>
			)}
		</section>
	);
}