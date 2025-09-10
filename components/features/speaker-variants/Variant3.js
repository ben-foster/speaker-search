'use client';

import { useState, useEffect } from 'react';

export default function Variant3({ speaker }) {
	const [showRequestForm, setShowRequestForm] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<main className="min-h-screen bg-black text-white overflow-hidden">
			{/* Hero Section with Parallax */}
			<section className="relative h-screen flex items-center justify-center">
				{/* Animated Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-600 opacity-90">
					<div className="absolute inset-0 bg-black/30" />
				</div>
				
				{/* Geometric Shapes */}
				<div className="absolute inset-0 overflow-hidden">
					<div
						className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
						style={{ transform: `translateY(${scrollY * 0.5}px)` }}
					/>
					<div
						className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"
						style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
					/>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rotate-45">
						<div className="w-full h-full border-8 border-white/10 animate-spin-slow" />
					</div>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 container mx-auto px-6 text-center">
					<div className="mb-8">
						{speaker.image ? (
							<div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white/20 shadow-2xl animate-float">
								<img
									src={speaker.image}
									alt={speaker.name}
									className="w-full h-full object-cover"
								/>
							</div>
						) : (
							<div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-8 border-white/20 shadow-2xl animate-float">
								<svg className="w-24 h-24 text-white/80" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
								</svg>
							</div>
						)}
					</div>
					<h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent animate-gradient">
						{speaker.name}
					</h1>
					<p className="text-2xl md:text-3xl mb-8 text-white/90 font-light">
						{speaker.topic}
					</p>
					<div className="flex flex-wrap gap-6 justify-center mb-12">
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<span className="font-bold">{speaker.rating}</span>
							</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
							<span className="font-bold">{speaker.eventCount}+</span> Events
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
							<span className="font-bold">${speaker.fee.toLocaleString()}</span>
						</div>
					</div>
					<button
						onClick={() => setShowRequestForm(true)}
						className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-2xl animate-pulse-subtle"
					>
						Book This Speaker
					</button>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</section>

			{/* About Section with Diagonal Layout */}
			<section className="relative py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black transform -skew-y-6" />
				<div className="relative container mx-auto px-6">
					<h2 className="text-5xl md:text-7xl font-black mb-12 text-center">
						<span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
							Meet Your Speaker
						</span>
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<div className="space-y-6">
							{speaker.bio.split('\n\n').map((paragraph, index) => (
								<p
									key={index}
									className="text-lg text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
								>
									{paragraph}
								</p>
							))}
						</div>
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl blur-3xl opacity-30" />
							<div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
								<h3 className="text-2xl font-bold mb-6">Core Expertise</h3>
								<div className="space-y-3">
									{speaker.expertise.map((skill) => (
										<div
											key={skill}
											className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl px-4 py-3 border border-purple-400/30 hover:border-purple-400 transition-colors"
										>
											<span className="text-white font-medium">{skill}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Video Section with Creative Frame */}
			{speaker.videoUrl && (
				<section className="relative py-32 bg-gradient-to-b from-black via-purple-900/20 to-black">
					<div className="container mx-auto px-6">
						<h2 className="text-5xl md:text-7xl font-black mb-12 text-center">
							<span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
								Watch in Action
							</span>
						</h2>
						<div className="max-w-5xl mx-auto relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl blur-2xl opacity-30" />
							<div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
								<iframe
									src={speaker.videoUrl}
									title="Speaker Demo"
									className="w-full h-full"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Testimonials with Card Stack */}
			<section className="relative py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-purple-900/20" />
				<div className="relative container mx-auto px-6">
					<h2 className="text-5xl md:text-7xl font-black mb-12 text-center">
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Rave Reviews
						</span>
					</h2>
					<div className="max-w-4xl mx-auto space-y-8">
						{speaker.testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="relative group"
								style={{
									transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
								}}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
								<div className="relative bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-transform">
									<div className="flex mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<blockquote className="text-xl text-gray-200 mb-6 italic">
										&quot;{testimonial.quote}&quot;
									</blockquote>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
										<div>
											<div className="font-bold text-white">{testimonial.author}</div>
											<div className="text-gray-400">{testimonial.title}</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Recent Events with Timeline */}
			<section className="relative py-32 bg-gradient-to-b from-black to-purple-900/30">
				<div className="container mx-auto px-6">
					<h2 className="text-5xl md:text-7xl font-black mb-12 text-center">
						<span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
							Recent Appearances
						</span>
					</h2>
					<div className="max-w-4xl mx-auto relative">
						<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500" />
						{speaker.recentEvents.map((event, index) => (
							<div
								key={index}
								className={`relative flex items-center mb-12 ${
									index % 2 === 0 ? 'justify-start' : 'justify-end'
								}`}
							>
								<div
									className={`w-5/12 ${
										index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
									}`}
								>
									<div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-colors">
										<h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
										<p className="text-gray-400 mb-1">{event.location}</p>
										<p className="text-sm text-purple-400">{event.type}</p>
										<p className="text-sm text-gray-500 mt-2">
											{new Date(event.date).toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</p>
									</div>
								</div>
								<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-500" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600">
					<div className="absolute inset-0 bg-black/40" />
				</div>
				<div className="relative container mx-auto px-6 text-center">
					<h2 className="text-5xl md:text-7xl font-black mb-8">
						Ready to Inspire Your Audience?
					</h2>
					<p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
						Book {speaker.name} for your next event and create an unforgettable experience
					</p>
					<button
						onClick={() => setShowRequestForm(true)}
						className="bg-white text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-transform duration-300 shadow-2xl"
					>
						Check Availability Now
					</button>
				</div>
			</section>

			{/* Request Form Modal */}
			{showRequestForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
					<div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
						<div className="p-8">
							<h2 className="text-3xl font-bold mb-6 text-white">Request Speaker</h2>
							<form className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<input
										type="text"
										placeholder="First Name"
										className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-pink-400 focus:outline-none"
									/>
									<input
										type="text"
										placeholder="Last Name"
										className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-pink-400 focus:outline-none"
									/>
								</div>
								<input
									type="email"
									placeholder="Email"
									className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-pink-400 focus:outline-none"
								/>
								<textarea
									rows={4}
									placeholder="Tell us about your event..."
									className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-pink-400 focus:outline-none"
								/>
								<div className="flex gap-4">
									<button
										type="button"
										onClick={() => setShowRequestForm(false)}
										className="flex-1 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold hover:from-pink-600 hover:to-purple-600"
									>
										Send Request
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}

			<style jsx>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-20px); }
				}
				@keyframes gradient {
					0%, 100% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
				}
				@keyframes spin-slow {
					from { transform: rotate(0deg); }
					to { transform: rotate(360deg); }
				}
				@keyframes pulse-subtle {
					0%, 100% { transform: scale(1); }
					50% { transform: scale(1.05); }
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
				.animate-gradient {
					background-size: 200% 200%;
					animation: gradient 3s ease infinite;
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
				.animate-pulse-subtle {
					animation: pulse-subtle 2s ease-in-out infinite;
				}
			`}</style>
		</main>
	);
}