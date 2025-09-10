'use client';

import { useState } from 'react';

export default function Variant5({ speaker }) {
	const [showRequestForm, setShowRequestForm] = useState(false);

	return (
		<main className="min-h-screen bg-white">
			{/* Magazine Header */}
			<div className="bg-black text-white">
				<div className="container mx-auto px-6 pt-32 pb-1">
					<div className="text-center mb-4">
						<span className="text-xs tracking-widest text-gray-400 uppercase">Speaker Profile</span>
					</div>
				</div>
			</div>

			{/* Hero Section - Magazine Cover Style */}
			<section className="relative bg-black">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
						{/* Left - Large Image */}
						<div className="lg:col-span-7 relative h-[600px]">
							{speaker.image ? (
								<img
									src={speaker.image}
									alt={speaker.name}
									className="w-full h-full object-cover"
								/>
							) : (
								<div className="w-full h-full bg-gray-800 flex items-center justify-center">
									<svg className="w-32 h-32 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
									</svg>
								</div>
							)}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						</div>

						{/* Right - Title Block */}
						<div className="lg:col-span-5 bg-white text-black p-12 flex flex-col justify-center">
							<div className="space-y-6">
								<div>
									<h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-4">
										{speaker.name}
									</h1>
									<div className="w-20 h-1 bg-black mb-6" />
									<p className="text-xl text-gray-700 italic font-serif">
										{speaker.topic}
									</p>
								</div>
								<div className="flex items-center gap-6 text-sm">
									<div>
										<span className="text-gray-500">Rating</span>
										<div className="font-bold">{speaker.rating}/5.0</div>
									</div>
									<div className="w-px h-8 bg-gray-300" />
									<div>
										<span className="text-gray-500">Events</span>
										<div className="font-bold">{speaker.eventCount}+</div>
									</div>
									<div className="w-px h-8 bg-gray-300" />
									<div>
										<span className="text-gray-500">Fee</span>
										<div className="font-bold">${speaker.fee.toLocaleString()}</div>
									</div>
								</div>
								<button
									onClick={() => setShowRequestForm(true)}
									className="bg-black text-white px-8 py-4 font-sans uppercase tracking-wider text-sm hover:bg-gray-900 transition-colors"
								>
									Book Speaker
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className="container mx-auto px-6 py-16 max-w-6xl">
				{/* Lead Paragraph */}
				<div className="mb-16">
					<p className="text-2xl lg:text-3xl font-serif leading-relaxed text-gray-800 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
						{speaker.bio.split('\n\n')[0]}
					</p>
				</div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
					<div className="lg:col-span-8">
						{/* Main Article */}
						<div className="prose prose-lg max-w-none">
							<h2 className="text-3xl font-serif mb-6">The Journey</h2>
							<p className="text-gray-700 leading-relaxed mb-6">
								{speaker.bio.split('\n\n')[1]}
							</p>
							<p className="text-gray-700 leading-relaxed mb-8">
								{speaker.bio.split('\n\n')[2]}
							</p>

							{/* Pull Quote */}
							<blockquote className="border-l-4 border-black pl-8 py-4 my-12">
								<p className="text-2xl font-serif italic text-gray-800">
									&quot;Excellence is not a destination but a continuous journey that never ends.&quot;
								</p>
								<cite className="text-sm text-gray-600 mt-4 block not-italic">
									— {speaker.name}
								</cite>
							</blockquote>

							{/* Expertise Section */}
							<h2 className="text-3xl font-serif mb-6 mt-12">Areas of Expertise</h2>
							<div className="grid grid-cols-2 gap-4 mb-8">
								{speaker.expertise.map((skill) => (
									<div key={skill} className="border-l-2 border-gray-300 pl-4 py-2">
										<span className="text-gray-800 font-medium">{skill}</span>
									</div>
								))}
							</div>
						</div>

						{/* Video Section */}
						{speaker.videoUrl && (
							<div className="my-12">
								<h3 className="text-2xl font-serif mb-4">Watch the Speaker in Action</h3>
								<div className="aspect-video bg-gray-100">
									<iframe
										src={speaker.videoUrl}
										title="Speaker Demo"
										className="w-full h-full"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
								<p className="text-sm text-gray-600 mt-2 italic">
									Featured keynote at the Global Leadership Summit 2024
								</p>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<aside className="lg:col-span-4">
						{/* Quick Facts Box */}
						<div className="bg-gray-50 p-8 mb-8">
							<h3 className="font-sans uppercase tracking-wider text-sm font-bold mb-6">Quick Facts</h3>
							<dl className="space-y-4">
								<div className="border-b border-gray-200 pb-3">
									<dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</dt>
									<dd className="font-serif text-lg">{speaker.location}</dd>
								</div>
								<div className="border-b border-gray-200 pb-3">
									<dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Languages</dt>
									<dd className="font-serif text-lg">{speaker.languages?.join(', ') || 'English'}</dd>
								</div>
								<div className="border-b border-gray-200 pb-3">
									<dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Availability</dt>
									<dd className="font-serif text-lg text-green-600">{speaker.availability}</dd>
								</div>
								<div className="border-b border-gray-200 pb-3">
									<dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">Travel</dt>
									<dd className="font-serif text-lg">{speaker.travelPreference || 'Worldwide'}</dd>
								</div>
							</dl>
						</div>

						{/* Achievements */}
						<div className="mb-8">
							<h3 className="font-sans uppercase tracking-wider text-sm font-bold mb-6">Notable Achievements</h3>
							<ul className="space-y-3">
								{(speaker.achievements || [
									'TEDx Speaker',
									'Bestselling Author',
									'Industry Award Winner',
									'Forbes Contributor'
								]).map((achievement, index) => (
									<li key={index} className="flex items-start gap-3">
										<span className="text-gray-400 mt-1">•</span>
										<span className="text-gray-700 font-serif">{achievement}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Call to Action Card */}
						<div className="bg-black text-white p-8">
							<h3 className="text-2xl font-serif mb-4">Ready to Book?</h3>
							<p className="text-gray-300 mb-6">
								Secure this speaker for your next event and inspire your audience.
							</p>
							<button
								onClick={() => setShowRequestForm(true)}
								className="w-full bg-white text-black py-3 font-sans uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors"
							>
								Check Availability
							</button>
						</div>
					</aside>
				</div>

				{/* Testimonials Section */}
				<section className="border-t border-gray-300 pt-16">
					<h2 className="text-4xl font-serif text-center mb-12">What People Are Saying</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{speaker.testimonials.map((testimonial, index) => (
							<div key={index} className="border-l-2 border-gray-300 pl-8">
								<div className="flex mb-3">
									{[...Array(testimonial.rating)].map((_, i) => (
										<svg key={i} className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<blockquote className="font-serif text-lg text-gray-700 mb-4 italic">
									&quot;{testimonial.quote}&quot;
								</blockquote>
								<div>
									<div className="font-sans font-bold text-sm">{testimonial.author}</div>
									<div className="text-sm text-gray-600">{testimonial.title}</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Recent Engagements Timeline */}
				<section className="mt-16 border-t border-gray-300 pt-16">
					<h2 className="text-4xl font-serif text-center mb-12">Recent Engagements</h2>
					<div className="space-y-6">
						{speaker.recentEvents.map((event, index) => (
							<div key={index} className="grid grid-cols-12 gap-4 items-center">
								<div className="col-span-3 text-right">
									<time className="text-sm text-gray-600">
										{new Date(event.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</time>
								</div>
								<div className="col-span-1 flex justify-center">
									<div className="w-3 h-3 bg-gray-400 rounded-full" />
								</div>
								<div className="col-span-8">
									<h3 className="font-serif text-xl">{event.name}</h3>
									<p className="text-gray-600">
										{event.location} • {event.type}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</article>

			{/* Footer CTA */}
			<section className="bg-gray-100 py-16">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-serif mb-6">
						Transform Your Next Event
					</h2>
					<p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
						Book {speaker.name} today and deliver an unforgettable experience to your audience.
					</p>
					<div className="flex gap-4 justify-center">
						<button
							onClick={() => setShowRequestForm(true)}
							className="bg-black text-white px-8 py-4 font-sans uppercase tracking-wider text-sm hover:bg-gray-900 transition-colors"
						>
							Request Booking
						</button>
						<button className="border-2 border-black text-black px-8 py-4 font-sans uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors">
							Download Media Kit
						</button>
					</div>
				</div>
			</section>

			{/* Request Form Modal */}
			{showRequestForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
					<div className="bg-white rounded-none max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
						<div className="p-8">
							<h2 className="text-3xl font-serif mb-8">Request Speaker Availability</h2>
							<form className="space-y-6">
								<div className="grid grid-cols-2 gap-4">
									<input
										type="text"
										placeholder="First Name"
										className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
									/>
									<input
										type="text"
										placeholder="Last Name"
										className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
									/>
								</div>
								<input
									type="email"
									placeholder="Email Address"
									className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
								/>
								<input
									type="text"
									placeholder="Organization"
									className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
								/>
								<div className="grid grid-cols-2 gap-4">
									<input
										type="date"
										className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
									/>
									<input
										type="text"
										placeholder="Event Location"
										className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
									/>
								</div>
								<textarea
									rows={4}
									placeholder="Tell us about your event and audience..."
									className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
								/>
								<div className="flex gap-4">
									<button
										type="button"
										onClick={() => setShowRequestForm(false)}
										className="flex-1 py-3 border border-gray-300 hover:bg-gray-100 transition-colors"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="flex-1 py-3 bg-black text-white hover:bg-gray-900 transition-colors"
									>
										Submit Request
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}