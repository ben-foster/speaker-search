import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import BlogSection from '@/components/features/BlogSection';
import { 
	getBlogCategories, 
	getFeaturedBlogPosts, 
	getRecentBlogPosts
} from '@/services/blogService';

export default function BlogPage() {
	const categories = getBlogCategories();
	const featuredPosts = getFeaturedBlogPosts(3);
	const recentPosts = getRecentBlogPosts(4);

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Speaker Search Blog
						</h1>
						<p className="mx-auto max-w-4xl text-xl text-gray-300 md:text-2xl">
							Insights, tips, and industry trends to help you succeed in the world 
							of professional speaking and event planning.
						</p>
					</div>


					{/* Featured Posts */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Featured Articles
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Our most popular and impactful content, handpicked for you.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
							{featuredPosts.map((post, index) => (
								<article key={post.id} className={`card group hover:scale-105 transition-all duration-300 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
									<div className="p-6 md:p-8 h-full flex flex-col">
										{/* Category and Read Time */}
										<div className="flex items-center justify-between mb-4">
											<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-primary/20 text-purple-primary">
												{categories.find(cat => cat.id === post.category)?.icon} {categories.find(cat => cat.id === post.category)?.name}
											</span>
											<span className="text-xs text-gray-500">
												{post.readTime} min read
											</span>
										</div>

										{/* Title */}
										<h3 className={`font-poppins font-bold mb-4 group-hover:text-purple-primary transition-colors ${
											index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
										}`}>
											<Link href={`/blog/${post.slug}`}>
												{post.title}
											</Link>
										</h3>

										{/* Excerpt */}
										<p className={`text-gray-300 leading-relaxed mb-6 flex-grow ${
											index === 0 ? 'text-lg' : ''
										}`}>
											{post.excerpt}
										</p>

										{/* Author and Date */}
										<div className="flex items-center justify-between text-sm text-gray-400">
											<span>By {post.authorInfo ? post.authorInfo.name : 'Unknown Author'}</span>
											<span>{new Date(post.publishedAt).toLocaleDateString()}</span>
										</div>

										{/* Engagement Stats */}
										<div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-700">
											<span className="flex items-center text-xs text-gray-500">
												<svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
												</svg>
												{post.views}
											</span>
											<span className="flex items-center text-xs text-gray-500">
												<svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
												</svg>
												{post.likes}
											</span>
										</div>
									</div>
								</article>
							))}
						</div>
					</section>

					{/* Blog Categories */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Explore Topics
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Dive deep into specific areas of interest with our categorized content.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
							{categories.slice(1).map((category) => (
								<div key={category.id} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
									<div className="text-3xl mb-3">{category.icon}</div>
									<h3 className="font-medium text-white mb-2 group-hover:text-purple-primary transition-colors">
										{category.name}
									</h3>
									<p className="text-xs text-gray-400 mb-3">
										Multiple articles
									</p>
									<div className="text-purple-primary text-xs font-medium">
										Explore →
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Recent Posts Preview */}
					<section className="mb-20">
						<div className="flex items-center justify-between mb-8">
							<h2 className="font-poppins text-3xl font-bold md:text-4xl">
								Latest Articles
							</h2>
							<Link 
								href="/blog/all"
								className="text-purple-primary hover:underline font-medium"
							>
								View All Articles →
							</Link>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							{recentPosts.map((post) => (
								<article key={post.id} className="card p-6 group hover:scale-105 transition-all duration-300">
									{/* Category and Date */}
									<div className="flex items-center justify-between mb-4">
										<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-primary/20 text-purple-primary">
											{categories.find(cat => cat.id === post.category)?.icon} {categories.find(cat => cat.id === post.category)?.name}
										</span>
										<span className="text-xs text-gray-500">
											{new Date(post.publishedAt).toLocaleDateString()}
										</span>
									</div>

									{/* Title */}
									<h3 className="font-poppins text-xl font-bold mb-3 group-hover:text-purple-primary transition-colors">
										<Link href={`/blog/${post.slug}`}>
											{post.title}
										</Link>
									</h3>

									{/* Excerpt */}
									<p className="text-gray-300 leading-relaxed mb-4">
										{post.excerpt}
									</p>

									{/* Meta Info */}
									<div className="flex items-center justify-between text-sm text-gray-400">
										<span className="flex items-center">
											<span className="mr-3">{post.readTime} min read</span>
											<span className="flex items-center">
												<svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
												</svg>
												{post.views}
											</span>
										</span>
									</div>
								</article>
							))}
						</div>
					</section>

					{/* Interactive Blog Section */}
					<BlogSection />

					{/* Newsletter Signup */}
					<section className="mt-20">
						<div className="card p-8 md:p-12 text-center">
							<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
								Stay Updated
							</h2>
							<p className="mb-8 text-gray-300 max-w-2xl mx-auto">
								Get the latest articles, industry insights, and platform updates 
								delivered directly to your inbox.
							</p>
							
							<div className="max-w-md mx-auto">
								<div className="flex flex-col sm:flex-row gap-4">
									<input
										type="email"
										placeholder="Enter your email address"
										className="flex-1 px-4 py-3 bg-dark-bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent"
									/>
									<button className="btn-primary whitespace-nowrap">
										Subscribe
									</button>
								</div>
								<p className="text-xs text-gray-500 mt-3">
									Unsubscribe at any time. No spam, ever.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}