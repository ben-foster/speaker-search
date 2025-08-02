import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import FAQSection from '@/components/features/FAQSection';
import { getFAQCategories, getPopularFAQs, getFAQStatistics } from '@/services/faqService';

export default function FAQPage() {
	const categories = getFAQCategories();
	const popularFAQs = getPopularFAQs();
	const stats = getFAQStatistics();

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Frequently Asked Questions
						</h1>
						<p className="mx-auto max-w-4xl text-xl text-gray-300 md:text-2xl">
							Find answers to common questions about our platform, booking process, 
							and how to get the most out of Speaker Search.
						</p>
					</div>

					{/* Stats */}
					<div className="mb-16">
						<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
							<div className="card p-6 text-center">
								<div className="text-3xl font-bold text-purple-primary mb-2">
									{stats.totalFAQs}
								</div>
								<div className="text-sm text-gray-400">
									Total Questions
								</div>
							</div>
							<div className="card p-6 text-center">
								<div className="text-3xl font-bold text-purple-primary mb-2">
									{stats.totalCategories}
								</div>
								<div className="text-sm text-gray-400">
									Categories
								</div>
							</div>
							<div className="card p-6 text-center">
								<div className="text-3xl font-bold text-purple-primary mb-2">
									{stats.popularFAQs}
								</div>
								<div className="text-sm text-gray-400">
									Popular FAQs
								</div>
							</div>
							<div className="card p-6 text-center">
								<div className="text-3xl font-bold text-purple-primary mb-2">
									24/7
								</div>
								<div className="text-sm text-gray-400">
									Available
								</div>
							</div>
						</div>
					</div>

					{/* Popular Questions Preview */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Most Popular Questions
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Quick answers to the questions we hear most often.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							{popularFAQs.slice(0, 4).map((faq) => (
								<div key={faq.id} className="card p-6 group hover:scale-105 transition-all duration-300">
									<div className="flex items-start space-x-4">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-primary/20 text-purple-primary flex-shrink-0 mt-1">
											<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-white mb-3 group-hover:text-purple-primary transition-colors">
												{faq.question}
											</h3>
											<p className="text-gray-300 text-sm leading-relaxed">
												{faq.answer.slice(0, 150)}...
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Interactive FAQ Section */}
					<FAQSection />

					{/* Category Overview */}
					<section className="mt-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Browse by Category
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Find specific information based on your role and needs.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{categories.slice(1).map((category) => (
								<div key={category.id} className="card p-8 text-center group hover:scale-105 transition-all duration-300">
									<div className="text-4xl mb-4">{category.icon}</div>
									<h3 className="font-poppins text-xl font-semibold mb-3 group-hover:text-purple-primary transition-colors">
										{category.name}
									</h3>
									<p className="text-sm text-gray-400 mb-4">
										{stats.categoryBreakdown[category.id]} questions
									</p>
									<div className="text-purple-primary text-sm font-medium">
										View Questions →
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Help Section */}
					<section className="mt-20">
						<div className="card p-8 md:p-12 text-center">
							<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
								Still Need Help?
							</h2>
							<p className="mb-8 text-gray-300 max-w-2xl mx-auto">
								Can't find the answer you're looking for? Our support team is here 
								to help you with any questions or issues you might have.
							</p>
							
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-primary/20 text-purple-primary mb-4">
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<h3 className="font-semibold text-white mb-2">Contact Support</h3>
									<p className="text-sm text-gray-400 text-center mb-4">
										Send us a message and we'll get back to you within 24 hours
									</p>
									<a
										href="/contact"
										className="text-purple-primary hover:underline text-sm font-medium"
									>
										Send Message
									</a>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<h3 className="font-semibold text-white mb-2">Call Us</h3>
									<p className="text-sm text-gray-400 text-center mb-4">
										Speak directly with our support team during business hours
									</p>
									<a
										href="tel:+1-555-123-4567"
										className="text-green-400 hover:underline text-sm font-medium"
									>
										+1 (555) 123-4567
									</a>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
										</svg>
									</div>
									<h3 className="font-semibold text-white mb-2">Browse Resources</h3>
									<p className="text-sm text-gray-400 text-center mb-4">
										Explore guides, tutorials, and best practices
									</p>
									<a
										href="/resources"
										className="text-blue-400 hover:underline text-sm font-medium"
									>
										View Resources
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}