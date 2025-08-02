import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function HowItWorksPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							How Speaker Search Works
						</h1>
						<p className="mx-auto max-w-4xl text-xl text-gray-300 md:text-2xl">
							Discover how our platform simplifies speaker booking for event planners 
							and creates new opportunities for professional speakers.
						</p>
					</div>

					{/* For Event Planners */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								For Event Planners
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Find, evaluate, and book the perfect speakers for your events 
								with our comprehensive platform.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 lg:gap-16 mb-16">
							{[
								{
									step: '01',
									title: 'Search & Discover',
									description: 'Use our natural language search to describe your event needs, or browse by topic, industry, budget, and location. Our AI-powered matching system suggests speakers who are perfect fits for your audience and objectives.',
									features: [
										'Natural language search ("AI expert for financial services")',
										'Advanced filters (budget, location, experience level)',
										'Topic-based browsing with expert categorization',
										'AI-powered speaker recommendations',
										'Availability calendar integration'
									],
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
										</svg>
									)
								},
								{
									step: '02',
									title: 'Evaluate & Compare',
									description: 'Review comprehensive speaker profiles with verified credentials, sample videos, client testimonials, and transparent pricing. Save favorites and compare speakers side-by-side to make informed decisions.',
									features: [
										'Detailed speaker bios and expertise areas',
										'Client testimonials and event history',
										'Sample presentation videos and materials',
										'Transparent fee structures and travel requirements',
										'Professional photos and speaker one-sheets'
									],
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
										</svg>
									)
								},
								{
									step: '03',
									title: 'Connect & Book',
									description: 'Contact speakers directly through our secure platform. Negotiate terms, finalize contracts, and manage payments—all with our support and guidance throughout the process.',
									features: [
										'Direct messaging with speakers',
										'Contract templates and legal support',
										'Secure payment processing',
										'Event coordination tools',
										'Ongoing booking support and assistance'
									],
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									)
								}
							].map((step, index) => (
								<div key={index} className={`grid grid-cols-1 gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
									<div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
										<div className="flex items-center mb-6">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-primary/20 text-purple-primary mr-4">
												{step.icon}
											</div>
											<div className="text-4xl font-bold text-gray-600">
												{step.step}
											</div>
										</div>
										<h3 className="mb-4 font-poppins text-2xl font-bold">
											{step.title}
										</h3>
										<p className="text-lg leading-relaxed text-gray-300 mb-6">
											{step.description}
										</p>
										<ul className="space-y-2">
											{step.features.map((feature, featureIndex) => (
												<li key={featureIndex} className="flex items-start text-gray-300">
													<span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-primary" />
													{feature}
												</li>
											))}
										</ul>
									</div>
									<div className={`card p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
										<div className="text-center">
											<div className="text-6xl font-bold text-purple-primary mb-4">
												{step.step}
											</div>
											<div className="text-gray-400">
												Step {index + 1} of 3
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Event Planner Benefits */}
						<div className="card p-8 md:p-12">
							<h3 className="mb-6 text-center font-poppins text-2xl font-bold">
								Why Event Planners Choose Our Platform
							</h3>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
								{[
									{
										icon: '💰',
										title: 'Completely Free',
										description: 'No search fees, booking fees, or platform charges. Pay only the speaker\'s fee.'
									},
									{
										icon: '🔍',
										title: 'Comprehensive Database',
										description: 'Access to 2,500+ verified speakers across all industries and topics.'
									},
									{
										icon: '⚡',
										title: 'Fast & Efficient',
										description: 'Find and book speakers 75% faster than traditional methods.'
									},
									{
										icon: '🛡️',
										title: 'Secure & Reliable',
										description: 'Verified speakers, secure payments, and contract support.'
									},
									{
										icon: '🎯',
										title: 'Perfect Matches',
										description: 'AI-powered recommendations ensure the best fit for your event.'
									},
									{
										icon: '📞',
										title: 'Expert Support',
										description: 'Dedicated support team to help throughout the booking process.'
									}
								].map((benefit, index) => (
									<div key={index} className="text-center">
										<div className="text-3xl mb-3">{benefit.icon}</div>
										<h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
										<p className="text-sm text-gray-400">{benefit.description}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* For Speakers */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								For Speakers
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Build your speaking career with complete freedom and professional 
								support on our growing platform.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 lg:gap-16 mb-16">
							{[
								{
									step: '01',
									title: 'Apply & Get Approved',
									description: 'Submit a comprehensive application showcasing your expertise, experience, and speaking abilities. Our team reviews applications within 3-5 business days, maintaining high standards for platform quality.',
									features: [
										'Comprehensive application covering experience and expertise',
										'Portfolio review including speaking samples and testimonials',
										'Professional background and credential verification',
										'Fast 3-5 day review process',
										'High approval standards to ensure platform quality'
									],
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									)
								},
								{
									step: '02',
									title: 'Build Your Profile',
									description: 'Create a compelling speaker profile with our guidance. Showcase your expertise, set your fees, and provide all the information event planners need to make booking decisions.',
									features: [
										'Professional profile optimization guidance',
										'Complete control over your speaking fees',
										'Showcase expertise with videos and materials',
										'Client testimonial and reference management',
										'Availability calendar and booking preferences'
									],
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									)
								},
								{
									step: '03',
									title: 'Get Booked & Grow',
									description: 'Receive quality inquiries from serious event planners. Negotiate directly, maintain all your existing relationships, and grow your speaking career without exclusivity constraints.',
									features: [
										'Quality inquiries from verified event planners',
										'Direct communication and negotiation',
										'No exclusivity requirements or restrictions',
										'Contract support and payment processing',
										'Ongoing career development and marketing support'
									],
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
										</svg>
									)
								}
							].map((step, index) => (
								<div key={index} className={`grid grid-cols-1 gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? '' : 'lg:flex-row-reverse'}`}>
									<div className={`${index % 2 === 1 ? '' : 'lg:order-2'}`}>
										<div className="flex items-center mb-6">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-4">
												{step.icon}
											</div>
											<div className="text-4xl font-bold text-gray-600">
												{step.step}
											</div>
										</div>
										<h3 className="mb-4 font-poppins text-2xl font-bold">
											{step.title}
										</h3>
										<p className="text-lg leading-relaxed text-gray-300 mb-6">
											{step.description}
										</p>
										<ul className="space-y-2">
											{step.features.map((feature, featureIndex) => (
												<li key={featureIndex} className="flex items-start text-gray-300">
													<span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
													{feature}
												</li>
											))}
										</ul>
									</div>
									<div className={`card p-8 ${index % 2 === 1 ? '' : 'lg:order-1'}`}>
										<div className="text-center">
											<div className="text-6xl font-bold text-green-400 mb-4">
												{step.step}
											</div>
											<div className="text-gray-400">
												Step {index + 1} of 3
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Speaker Benefits */}
						<div className="card p-8 md:p-12">
							<h3 className="mb-6 text-center font-poppins text-2xl font-bold">
								Why Speakers Choose Our Platform
							</h3>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
								{[
									{
										icon: '🆓',
										title: 'No Exclusivity',
										description: 'Keep all your existing representation and work with multiple platforms.'
									},
									{
										icon: '💵',
										title: 'You Set Your Fees',
										description: 'Complete control over your speaking fees and terms.'
									},
									{
										icon: '📈',
										title: 'Quality Opportunities',
										description: 'Receive better-matched inquiries from serious event planners.'
									},
									{
										icon: '🤝',
										title: 'Direct Communication',
										description: 'Connect directly with event planners without intermediaries.'
									},
									{
										icon: '🛠️',
										title: 'Professional Support',
										description: 'Contract assistance, marketing support, and career guidance.'
									},
									{
										icon: '🌍',
										title: 'Global Reach',
										description: 'Access to events worldwide, from local to international conferences.'
									}
								].map((benefit, index) => (
									<div key={index} className="text-center">
										<div className="text-3xl mb-3">{benefit.icon}</div>
										<h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
										<p className="text-sm text-gray-400">{benefit.description}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Platform Features */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Platform Features
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Advanced technology and thoughtful design make speaker booking 
								simple, secure, and successful.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									),
									title: 'AI-Powered Matching',
									description: 'Our advanced AI analyzes event requirements and speaker profiles to suggest perfect matches, saving time and improving booking success rates.',
									color: 'purple'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
									),
									title: 'Verified Profiles',
									description: 'All speaker profiles are verified for accuracy and authenticity. We check credentials, references, and speaking experience to ensure quality.',
									color: 'green'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
										</svg>
									),
									title: 'Secure Payments',
									description: 'Industry-standard security for all transactions. Secure payment processing, contract management, and financial protection for all parties.',
									color: 'blue'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									),
									title: 'Direct Communication',
									description: 'Built-in messaging system enables direct communication between speakers and event planners while maintaining privacy and security.',
									color: 'yellow'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
										</svg>
									),
									title: 'Analytics & Insights',
									description: 'Comprehensive analytics help speakers optimize their profiles and help event planners track the success of their speaker selections.',
									color: 'indigo'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
									),
									title: '24/7 Support',
									description: 'Our dedicated support team is available around the clock to assist with bookings, technical issues, and any questions you may have.',
									color: 'pink'
								}
							].map((feature, index) => (
								<div key={index} className="card p-8 text-center group hover:scale-105 transition-all duration-300">
									<div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
										feature.color === 'purple' ? 'bg-purple-primary/20 text-purple-primary group-hover:bg-purple-primary group-hover:text-white' :
										feature.color === 'green' ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white' :
										feature.color === 'blue' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' :
										feature.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white' :
										feature.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' :
										'bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white'
									}`}>
										{feature.icon}
									</div>
									<h3 className="mb-4 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
										{feature.title}
									</h3>
									<p className="text-gray-400 leading-relaxed">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Pricing */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Simple, Transparent Pricing
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								No hidden fees, no exclusivity requirements. Our success is tied to yours.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div className="card p-8 text-center">
								<h3 className="mb-4 font-poppins text-2xl font-bold text-purple-primary">
									For Event Planners
								</h3>
								<div className="text-5xl font-bold text-white mb-4">
									FREE
								</div>
								<p className="text-gray-300 mb-6">
									Use our entire platform at no cost. Pay only the speaker&apos;s fee directly.
								</p>
								<ul className="space-y-3 text-left">
									{[
										'Unlimited speaker searches',
										'Direct communication with speakers',
										'Contract templates and support',
										'Secure booking management',
										'Dedicated customer success support'
									].map((feature, index) => (
										<li key={index} className="flex items-start text-gray-300">
											<span className="mr-3 mt-1 h-4 w-4 text-green-400">✓</span>
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className="card p-8 text-center">
								<h3 className="mb-4 font-poppins text-2xl font-bold text-green-400">
									For Speakers
								</h3>
								<div className="text-5xl font-bold text-white mb-4">
									10-15%
								</div>
								<p className="text-gray-300 mb-6">
									Small commission only on successful bookings. No monthly fees or setup costs.
								</p>
								<ul className="space-y-3 text-left">
									{[
										'Free profile creation and maintenance',
										'Unlimited opportunity applications',
										'Direct client communication',
										'Payment processing and protection',
										'Marketing and career development support'
									].map((feature, index) => (
										<li key={index} className="flex items-start text-gray-300">
											<span className="mr-3 mt-1 h-4 w-4 text-green-400">✓</span>
											{feature}
										</li>
									))}
								</ul>
							</div>
						</div>
					</section>

					{/* Call to Action */}
					<div className="card p-8 text-center md:p-12">
						<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
							Ready to Get Started?
						</h2>
						<p className="mb-6 text-gray-300">
							Join thousands of event planners and speakers who trust our platform 
							for their professional speaking needs.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Link
								href="/search"
								className="btn-primary inline-flex items-center"
							>
								Find Speakers
								<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
							<Link
								href="/speakers"
								className="inline-flex items-center rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
							>
								Apply as Speaker
								<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}