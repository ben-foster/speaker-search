'use client';

import { useState } from 'react';

export default function Variant4({ speaker }) {
	const [showRequestForm, setShowRequestForm] = useState(false);
	const [selectedMetric, setSelectedMetric] = useState('overview');

	// Mock data for charts and metrics
	const performanceData = {
		monthlyEvents: [8, 12, 10, 14, 16, 11, 13, 15, 18, 14, 16, 20],
		topicDistribution: [
			{ topic: 'Leadership', value: 35, color: 'from-cyan-400 to-cyan-600' },
			{ topic: 'Innovation', value: 25, color: 'from-blue-400 to-blue-600' },
			{ topic: 'Technology', value: 20, color: 'from-purple-400 to-purple-600' },
			{ topic: 'Strategy', value: 15, color: 'from-indigo-400 to-indigo-600' },
			{ topic: 'Other', value: 5, color: 'from-gray-400 to-gray-600' },
		],
		audienceReach: '250K+',
		repeatBookings: '78%',
		satisfactionScore: '9.8/10',
		responseTime: '< 2 hours',
	};

	const timelineData = [
		{ year: '2020', milestone: 'Published bestselling book', impact: '+40% bookings' },
		{ year: '2021', milestone: 'TEDx Talk went viral', impact: '2M+ views' },
		{ year: '2022', milestone: 'Fortune 500 keynote series', impact: '50 events' },
		{ year: '2023', milestone: 'Industry Award Winner', impact: 'Top Speaker' },
		{ year: '2024', milestone: 'Global Conference Tour', impact: '15 countries' },
	];

	return (
		<main className="min-h-screen bg-gray-900 text-white">
			{/* Header with Key Metrics */}
			<div className="bg-gradient-to-br from-gray-800 to-gray-900 border-b border-cyan-500/20">
				<div className="container mx-auto px-6 pt-32 pb-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
						{/* Speaker Info */}
						<div className="lg:col-span-3">
							<div className="flex items-center gap-4 mb-6">
								<div className="relative">
									<div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/50">
										{speaker.image ? (
											<img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
										) : (
											<div className="w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
												<svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
												</svg>
											</div>
										)}
									</div>
									<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
										<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
									</div>
								</div>
								<div>
									<h1 className="text-2xl font-bold">{speaker.name}</h1>
									<p className="text-cyan-400">{speaker.topic}</p>
									<div className="flex items-center gap-1 mt-1">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`w-4 h-4 ${i < Math.floor(speaker.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
										<span className="text-sm text-gray-400 ml-1">{speaker.rating}</span>
									</div>
								</div>
							</div>
							<button
								onClick={() => setShowRequestForm(true)}
								className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
							>
								Request Availability
							</button>
						</div>

						{/* Live KPI Dashboard */}
						<div className="lg:col-span-9">
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
								<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
									<div className="text-xs text-gray-400 mb-1">Total Events</div>
									<div className="text-3xl font-bold text-cyan-400">{speaker.eventCount}+</div>
									<div className="text-xs text-green-400 mt-1">↑ 23% YoY</div>
								</div>
								<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
									<div className="text-xs text-gray-400 mb-1">Audience Reach</div>
									<div className="text-3xl font-bold text-blue-400">{performanceData.audienceReach}</div>
									<div className="text-xs text-green-400 mt-1">↑ 45% YoY</div>
								</div>
								<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
									<div className="text-xs text-gray-400 mb-1">Satisfaction</div>
									<div className="text-3xl font-bold text-purple-400">{performanceData.satisfactionScore}</div>
									<div className="text-xs text-gray-400 mt-1">Industry Leading</div>
								</div>
								<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
									<div className="text-xs text-gray-400 mb-1">Repeat Rate</div>
									<div className="text-3xl font-bold text-green-400">{performanceData.repeatBookings}</div>
									<div className="text-xs text-gray-400 mt-1">Client Retention</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Dashboard Content */}
			<div className="container mx-auto px-6 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Left Sidebar - Navigation */}
					<div className="lg:col-span-2">
						<div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 sticky top-24">
							<h3 className="text-sm font-semibold text-gray-400 mb-4">Analytics</h3>
							<nav className="space-y-2">
								{['overview', 'performance', 'expertise', 'timeline', 'testimonials'].map((item) => (
									<button
										key={item}
										onClick={() => setSelectedMetric(item)}
										className={`w-full text-left px-3 py-2 rounded-lg text-sm capitalize transition-colors ${
											selectedMetric === item
												? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
												: 'text-gray-400 hover:bg-gray-700 hover:text-white'
										}`}
									>
										{item}
									</button>
								))}
							</nav>
						</div>
					</div>

					{/* Main Content Area */}
					<div className="lg:col-span-10">
						{/* Overview Section */}
						{selectedMetric === 'overview' && (
							<div className="space-y-6">
								{/* Bio with Stats */}
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h2 className="text-xl font-bold mb-4 text-cyan-400">Executive Summary</h2>
									<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
										<div className="lg:col-span-2">
											<p className="text-gray-300 leading-relaxed mb-4">
												{speaker.bio.split('\n\n')[0]}
											</p>
											<div className="flex flex-wrap gap-2">
												{speaker.expertise.slice(0, 4).map((skill) => (
													<span
														key={skill}
														className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
													>
														{skill}
													</span>
												))}
											</div>
										</div>
										<div className="space-y-3">
											<div className="flex justify-between items-center py-2 border-b border-gray-700">
												<span className="text-gray-400 text-sm">Speaking Fee</span>
												<span className="font-bold text-cyan-400">${speaker.fee.toLocaleString()}</span>
											</div>
											<div className="flex justify-between items-center py-2 border-b border-gray-700">
												<span className="text-gray-400 text-sm">Response Time</span>
												<span className="font-bold text-green-400">{performanceData.responseTime}</span>
											</div>
											<div className="flex justify-between items-center py-2">
												<span className="text-gray-400 text-sm">Location</span>
												<span className="font-bold">{speaker.location}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Monthly Events Chart */}
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h3 className="text-lg font-bold mb-4 text-blue-400">Event Frequency (Last 12 Months)</h3>
									<div className="flex items-end justify-between h-40 gap-2">
										{performanceData.monthlyEvents.map((count, index) => (
											<div key={index} className="flex-1 flex flex-col items-center">
												<div
													className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all hover:from-cyan-400 hover:to-blue-400"
													style={{ height: `${(count / 20) * 100}%` }}
												/>
												<span className="text-xs text-gray-500 mt-2">
													{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Performance Metrics */}
						{selectedMetric === 'performance' && (
							<div className="space-y-6">
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h2 className="text-xl font-bold mb-6 text-cyan-400">Performance Analytics</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* Topic Distribution */}
										<div>
											<h3 className="text-sm font-semibold text-gray-400 mb-4">Topic Distribution</h3>
											<div className="space-y-3">
												{performanceData.topicDistribution.map((item) => (
													<div key={item.topic}>
														<div className="flex justify-between text-sm mb-1">
															<span className="text-gray-300">{item.topic}</span>
															<span className="text-gray-400">{item.value}%</span>
														</div>
														<div className="w-full bg-gray-700 rounded-full h-2">
															<div
																className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
																style={{ width: `${item.value}%` }}
															/>
														</div>
													</div>
												))}
											</div>
										</div>

										{/* Event Types */}
										<div>
											<h3 className="text-sm font-semibold text-gray-400 mb-4">Event Types</h3>
											<div className="grid grid-cols-2 gap-4">
												{[
													{ type: 'Keynote', count: 85, icon: '🎤' },
													{ type: 'Workshop', count: 42, icon: '👥' },
													{ type: 'Panel', count: 38, icon: '💬' },
													{ type: 'Virtual', count: 56, icon: '💻' },
												].map((event) => (
													<div key={event.type} className="bg-gray-700/50 rounded-lg p-3">
														<div className="text-2xl mb-1">{event.icon}</div>
														<div className="text-2xl font-bold text-cyan-400">{event.count}</div>
														<div className="text-xs text-gray-400">{event.type}</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Geographic Reach */}
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h3 className="text-lg font-bold mb-4 text-blue-400">Geographic Reach</h3>
									<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
										{['USA', 'UK', 'Canada', 'Germany', 'Australia', 'Japan'].map((country) => (
											<div key={country} className="text-center">
												<div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
													<span className="text-2xl">🌍</span>
												</div>
												<span className="text-sm text-gray-400">{country}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Expertise Deep Dive */}
						{selectedMetric === 'expertise' && (
							<div className="space-y-6">
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h2 className="text-xl font-bold mb-6 text-cyan-400">Expertise Matrix</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
										{speaker.expertise.map((skill, index) => (
											<div key={skill} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
												<div className="flex items-center justify-between mb-3">
													<span className="font-medium">{skill}</span>
													<span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
														Expert
													</span>
												</div>
												<div className="w-full bg-gray-700 rounded-full h-2">
													<div
														className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600"
														style={{ width: `${85 + index * 3}%` }}
													/>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Certifications & Achievements */}
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h3 className="text-lg font-bold mb-4 text-blue-400">Certifications & Recognition</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{[
											'Certified Speaking Professional (CSP)',
											'Global Speaker Federation Member',
											'TED Speaker Alumni',
											'Author of 3 Bestselling Books',
										].map((cert) => (
											<div key={cert} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
												<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
												</svg>
												<span className="text-sm text-gray-300">{cert}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Career Timeline */}
						{selectedMetric === 'timeline' && (
							<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
								<h2 className="text-xl font-bold mb-6 text-cyan-400">Career Milestones</h2>
								<div className="relative">
									<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />
									{timelineData.map((item, index) => (
										<div key={index} className="relative flex items-center mb-8">
											<div className="absolute left-8 w-4 h-4 bg-cyan-500 rounded-full -translate-x-1/2">
												<div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping" />
											</div>
											<div className="ml-16 flex-1 bg-gray-700/30 rounded-lg p-4 border border-gray-600">
												<div className="flex items-center justify-between mb-2">
													<span className="font-bold text-cyan-400">{item.year}</span>
													<span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
														{item.impact}
													</span>
												</div>
												<p className="text-gray-300">{item.milestone}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Testimonials Data */}
						{selectedMetric === 'testimonials' && (
							<div className="space-y-6">
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<h2 className="text-xl font-bold mb-6 text-cyan-400">Client Feedback Analysis</h2>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
										<div className="text-center">
											<div className="text-4xl font-bold text-yellow-400">{speaker.rating}</div>
											<div className="flex justify-center my-2">
												{[...Array(5)].map((_, i) => (
													<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												))}
											</div>
											<span className="text-sm text-gray-400">Average Rating</span>
										</div>
										<div className="text-center">
											<div className="text-4xl font-bold text-green-400">98%</div>
											<div className="text-sm text-gray-400 mt-2">Would Recommend</div>
										</div>
										<div className="text-center">
											<div className="text-4xl font-bold text-blue-400">150+</div>
											<div className="text-sm text-gray-400 mt-2">Verified Reviews</div>
										</div>
									</div>
								</div>

								{/* Individual Testimonials */}
								{speaker.testimonials.map((testimonial, index) => (
									<div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
												{testimonial.author.charAt(0)}
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-2">
													{[...Array(testimonial.rating)].map((_, i) => (
														<svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg>
													))}
												</div>
												<p className="text-gray-300 mb-3 italic">&quot;{testimonial.quote}&quot;</p>
												<div>
													<div className="font-semibold text-cyan-400">{testimonial.author}</div>
													<div className="text-sm text-gray-500">{testimonial.title}</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Request Form Modal */}
			{showRequestForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
					<div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20">
						<div className="p-8">
							<h2 className="text-2xl font-bold mb-6 text-cyan-400">Request Speaker Analytics</h2>
							<form className="space-y-4">
								<div className="grid grid-cols-2 gap-4">
									<input type="text" placeholder="First Name" className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
									<input type="text" placeholder="Last Name" className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
								</div>
								<input type="email" placeholder="Email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
								<textarea rows={4} placeholder="Event Details" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" />
								<div className="flex gap-4">
									<button type="button" onClick={() => setShowRequestForm(false)} className="flex-1 py-2 border border-gray-600 rounded-lg hover:bg-gray-700">
										Cancel
									</button>
									<button type="submit" className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold">
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