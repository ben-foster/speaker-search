import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import ContactForm from '@/components/features/ContactForm';
import { contactInfo, getAllDepartments, getContactFAQ } from '@/services/contactService';

export default function ContactPage() {
	const departments = getAllDepartments();
	const faq = getContactFAQ();

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Contact Us
						</h1>
						<p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl">
							Have a question or need assistance? We&apos;re here to help you find 
							the perfect speakers for your events or support your speaking career.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<div className="card p-8 md:p-12">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									Send us a Message
								</h2>
								<ContactForm />
							</div>
						</div>

						{/* Contact Information */}
						<div>
							{/* General Contact Info */}
							<div className="card mb-8 p-8">
								<h3 className="mb-6 font-poppins text-xl font-semibold">
									Get in Touch
								</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-primary/20 text-purple-primary">
											<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div>
											<p className="font-medium text-white">Email</p>
											<a 
												href={`mailto:${contactInfo.general.email}`}
												className="text-gray-300 hover:text-purple-primary transition-colors"
											>
												{contactInfo.general.email}
											</a>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-primary/20 text-purple-primary">
											<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div>
											<p className="font-medium text-white">Phone</p>
											<a 
												href={`tel:${contactInfo.general.phone}`}
												className="text-gray-300 hover:text-purple-primary transition-colors"
											>
												{contactInfo.general.phone}
											</a>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-primary/20 text-purple-primary">
											<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div>
											<p className="font-medium text-white">Address</p>
											<p className="text-gray-300">
												{contactInfo.general.address.street}<br />
												{contactInfo.general.address.city}, {contactInfo.general.address.state} {contactInfo.general.address.zip}<br />
												{contactInfo.general.address.country}
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Business Hours */}
							<div className="card mb-8 p-6">
								<h4 className="mb-4 font-semibold text-white">Business Hours</h4>
								<div className="space-y-2 text-sm text-gray-300">
									<p>{contactInfo.hours.weekdays}</p>
									<p>{contactInfo.hours.weekends}</p>
									<p className="text-purple-primary">{contactInfo.hours.emergency}</p>
								</div>
							</div>

							{/* Response Times */}
							<div className="card p-6">
								<h4 className="mb-4 font-semibold text-white">Expected Response Times</h4>
								<div className="grid grid-cols-1 gap-3 text-sm">
									{Object.entries(contactInfo.response).map(([type, time]) => (
										<div key={type} className="flex justify-between">
											<span className="text-gray-400 capitalize">
												{type.replace(/([A-Z])/g, ' $1').trim()}:
											</span>
											<span className="text-gray-300">{time}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Department Contact Cards */}
					<section className="mt-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Department Directory
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Connect directly with the right team for faster, more specialized assistance.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{departments.map((dept) => (
								<div key={dept.id} className="card p-6 group hover:scale-105 transition-all duration-300">
									<div className="mb-4">
										<h3 className="font-poppins text-lg font-semibold mb-2 group-hover:text-purple-primary transition-colors">
											{dept.name}
										</h3>
										<p className="text-sm text-gray-400 mb-4">
											{dept.description}
										</p>
									</div>
									<div className="space-y-2">
										<a 
											href={`mailto:${dept.email}`}
											className="flex items-center text-sm text-gray-300 hover:text-purple-primary transition-colors"
										>
											<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
											{dept.email}
										</a>
										<a 
											href={`tel:${dept.phone}`}
											className="flex items-center text-sm text-gray-300 hover:text-purple-primary transition-colors"
										>
											<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
											{dept.phone}
										</a>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* FAQ Section */}
					<section className="mt-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Frequently Asked Questions
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Quick answers to common questions about contacting us.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							{faq.map((item, index) => (
								<div key={index} className="card p-6">
									<h3 className="font-semibold text-white mb-3">
										{item.question}
									</h3>
									<p className="text-gray-300 leading-relaxed">
										{item.answer}
									</p>
								</div>
							))}
						</div>

						<div className="text-center mt-8">
							<p className="text-gray-400 mb-4">
								Still have questions?
							</p>
							<Link 
								href="/faq"
								className="inline-flex items-center rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
							>
								View All FAQs
								<svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</section>

					{/* Alternative Contact Methods */}
					<section className="mt-20">
						<div className="card p-8 md:p-12 text-center">
							<h2 className="mb-6 font-poppins text-2xl font-bold md:text-3xl">
								Prefer a Different Way to Connect?
							</h2>
							<p className="mb-8 text-gray-300 max-w-2xl mx-auto">
								We offer multiple ways to get in touch and are committed to providing 
								the support you need in the way that works best for you.
							</p>
							
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-primary/20 text-purple-primary mb-4">
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</div>
									<h3 className="font-semibold text-white mb-2">Live Chat</h3>
									<p className="text-sm text-gray-400 text-center">
										Coming soon - real-time chat support during business hours
									</p>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v6h6V1M4 8h16l-1 13H5L4 8zM6 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
										</svg>
									</div>
									<h3 className="font-semibold text-white mb-2">Schedule a Call</h3>
									<p className="text-sm text-gray-400 text-center">
										Book a consultation or demo session with our team
									</p>
								</div>

								<div className="flex flex-col items-center">
									<div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
										</svg>
									</div>
									<h3 className="font-semibold text-white mb-2">Knowledge Base</h3>
									<p className="text-sm text-gray-400 text-center">
										Browse our comprehensive guides and documentation
									</p>
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