'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { mockSpeakers } from '@/services/searchService';

// Mock additional speaker data that would come from API
const getExtendedSpeakerData = (id) => {
	const speaker = mockSpeakers.find((s) => s.id === parseInt(id));
	if (!speaker) return null;

	return {
		...speaker,
		expertise: [
			'Strategic Planning',
			'Digital Innovation',
			'Team Leadership',
			'Change Management',
			'Market Analysis',
			'Future Trends',
		],
		recentEvents: [
			{
				name: 'Global Tech Summit 2024',
				date: '2024-03-15',
				location: 'San Francisco, CA',
				type: 'Keynote',
			},
			{
				name: 'Innovation Conference',
				date: '2024-02-20',
				location: 'New York, NY',
				type: 'Panel Discussion',
			},
			{
				name: 'Leadership Forum',
				date: '2024-01-18',
				location: 'Austin, TX',
				type: 'Workshop',
			},
		],
		testimonials: [
			{
				quote: 'An absolutely phenomenal speaker who brought incredible energy and insights to our event. Our attendees are still talking about the presentation!',
				author: 'Sarah Johnson',
				title: 'Event Director, TechCorp',
				rating: 5,
			},
			{
				quote: 'Professional, engaging, and delivered exactly what we needed. The content was perfectly tailored to our audience.',
				author: 'Michael Chen',
				title: 'CEO, StartupX',
				rating: 5,
			},
		],
		socialMedia: {
			linkedin: 'https://linkedin.com/in/speaker',
			twitter: 'https://twitter.com/speaker',
			website: 'https://speakerwebsite.com',
		},
		videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
	};
};

export default function SpeakerProfilePage() {
	const params = useParams();
	const router = useRouter();
	const [speaker, setSpeaker] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showRequestForm, setShowRequestForm] = useState(false);
	const [isFavorited, setIsFavorited] = useState(false);

	useEffect(() => {
		// Simulate API call
		const fetchSpeaker = async () => {
			setLoading(true);
			// Simulate delay
			await new Promise((resolve) => setTimeout(resolve, 500));

			const speakerData = getExtendedSpeakerData(params.id);
			if (!speakerData) {
				router.push('/404');
				return;
			}

			setSpeaker(speakerData);
			setLoading(false);
		};

		fetchSpeaker();
	}, [params.id, router]);

	const handleFavoriteClick = () => {
		setIsFavorited(!isFavorited);
	};

	const handleRequestAvailability = () => {
		setShowRequestForm(true);
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
							<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
								<div className="lg:col-span-1">
									<div className="h-96 w-full rounded-2xl bg-gray-700" />
								</div>
								<div className="lg:col-span-2">
									<div className="space-y-4">
										<div className="h-12 w-3/4 rounded bg-gray-700" />
										<div className="h-6 w-1/2 rounded bg-gray-700" />
										<div className="h-32 w-full rounded bg-gray-700" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	if (!speaker) {
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
						<Link
							href="/search"
							className="hover:text-purple-primary"
						>
							Speakers
						</Link>
						<span>/</span>
						<span className="text-white">{speaker.name}</span>
					</nav>

					<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
						{/* Left column - Speaker image and basic info */}
						<div className="lg:col-span-1">
							<div className="card sticky top-8 p-8">
								{/* Speaker image */}
								<div className="relative mb-6">
									{speaker.image ? (
										// eslint-disable-next-line @next/next/no-img-element
										<img
											src={speaker.image}
											alt={speaker.name}
											className="h-80 w-full rounded-2xl object-cover"
										/>
									) : (
										<div className="flex h-80 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-purple-primary/20 to-purple-primary/10">
											<svg
												className="h-32 w-32 text-purple-primary/50"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
											</svg>
										</div>
									)}
								</div>

								{/* Speaker stats */}
								<div className="mb-6 flex items-center justify-between">
									<div className="flex items-center space-x-4">
										<div className="flex items-center">
											<svg
												className="mr-1 h-5 w-5 text-yellow-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<span className="font-semibold">
												{speaker.rating}
											</span>
										</div>
										<span className="text-gray-400">•</span>
										<span className="text-gray-400">
											{speaker.eventCount}+ events
										</span>
									</div>
									<button
										onClick={handleFavoriteClick}
										className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700"
										aria-label={
											isFavorited
												? 'Remove from favorites'
												: 'Add to favorites'
										}
									>
										<svg
											className={`h-5 w-5 transition-colors ${
												isFavorited
													? 'fill-red-500 text-red-500'
													: 'fill-none text-gray-400 hover:text-red-500'
											}`}
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
									</button>
								</div>

								{/* Fee and availability */}
								<div className="mb-6 space-y-3">
									<div className="flex items-center justify-between">
										<span className="text-gray-400">
											Speaking Fee
										</span>
										<span className="font-poppins text-lg font-semibold text-purple-primary">
											${speaker.fee.toLocaleString()}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-400">
											Availability
										</span>
										<span
											className={`rounded-full px-3 py-1 text-sm font-medium ${
												speaker.availability ===
												'Available'
													? 'bg-green-500/20 text-green-400'
													: 'bg-yellow-500/20 text-yellow-400'
											}`}
										>
											{speaker.availability}
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-400">
											Location
										</span>
										<span>{speaker.location}</span>
									</div>
								</div>

								{/* CTA Button */}
								<button
									onClick={handleRequestAvailability}
									className="w-full rounded-xl bg-purple-primary px-6 py-3 font-poppins font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-purple-600"
								>
									Request Availability
								</button>

								{/* Social media links */}
								{speaker.socialMedia && (
									<div className="mt-6 flex justify-center space-x-4">
										{speaker.socialMedia.linkedin && (
											<a
												href={
													speaker.socialMedia.linkedin
												}
												target="_blank"
												rel="noopener noreferrer"
												className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-purple-primary hover:text-white"
											>
												<svg
													className="h-5 w-5"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
												</svg>
											</a>
										)}
										{speaker.socialMedia.twitter && (
											<a
												href={
													speaker.socialMedia.twitter
												}
												target="_blank"
												rel="noopener noreferrer"
												className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-purple-primary hover:text-white"
											>
												<svg
													className="h-5 w-5"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
												</svg>
											</a>
										)}
										{speaker.socialMedia.website && (
											<a
												href={
													speaker.socialMedia.website
												}
												target="_blank"
												rel="noopener noreferrer"
												className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-purple-primary hover:text-white"
											>
												<svg
													className="h-5 w-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-9-9-9s4-9 9-9 9 9 9 9z"
													/>
												</svg>
											</a>
										)}
									</div>
								)}
							</div>
						</div>

						{/* Right column - Detailed information */}
						<div className="lg:col-span-2">
							<div className="space-y-8">
								{/* Header */}
								<div>
									<h1 className="mb-2 font-poppins text-4xl font-bold md:text-5xl">
										{speaker.name}
									</h1>
									<p className="mb-4 text-xl text-purple-primary">
										{speaker.topic}
									</p>
								</div>

								{/* About section with 3-paragraph bio */}
								<div className="card p-8">
									<h2 className="mb-4 font-poppins text-2xl font-semibold">
										About
									</h2>
									<div className="space-y-4 leading-relaxed text-gray-300">
										{speaker.bio
											.split('\n\n')
											.map((paragraph, index) => (
												<p key={index}>{paragraph}</p>
											))}
									</div>
								</div>

								{/* Expertise */}
								<div className="card p-8">
									<h2 className="mb-4 font-poppins text-2xl font-semibold">
										Areas of Expertise
									</h2>
									<div className="flex flex-wrap gap-3">
										{speaker.expertise.map((skill) => (
											<span
												key={skill}
												className="rounded-full border border-purple-primary/30 bg-purple-primary/10 px-4 py-2 text-sm text-purple-primary"
											>
												{skill}
											</span>
										))}
									</div>
								</div>

								{/* Demo video */}
								{speaker.videoUrl && (
									<div className="card p-8">
										<h2 className="mb-4 font-poppins text-2xl font-semibold">
											Speaking Demo
										</h2>
										<div className="aspect-video w-full overflow-hidden rounded-lg">
											<iframe
												src={speaker.videoUrl}
												title="Speaker Demo Video"
												className="h-full w-full"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											></iframe>
										</div>
									</div>
								)}

								{/* Recent events */}
								<div className="card p-8">
									<h2 className="mb-4 font-poppins text-2xl font-semibold">
										Recent Speaking Engagements
									</h2>
									<div className="space-y-4">
										{speaker.recentEvents.map(
											(event, index) => (
												<div
													key={index}
													className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-b-0"
												>
													<div>
														<h3 className="font-semibold">
															{event.name}
														</h3>
														<p className="text-sm text-gray-400">
															{event.location} •{' '}
															{event.type}
														</p>
													</div>
													<div className="text-sm text-gray-400">
														{new Date(
															event.date
														).toLocaleDateString(
															'en-US',
															{
																year: 'numeric',
																month: 'short',
																day: 'numeric',
															}
														)}
													</div>
												</div>
											)
										)}
									</div>
								</div>

								{/* Testimonials */}
								<div className="card p-8">
									<h2 className="mb-6 font-poppins text-2xl font-semibold">
										Client Testimonials
									</h2>
									<div className="space-y-6">
										{speaker.testimonials.map(
											(testimonial, index) => (
												<div
													key={index}
													className="border-l-4 border-purple-primary pl-6"
												>
													<div className="mb-3 flex items-center">
														{[
															...Array(
																testimonial.rating
															),
														].map((_, i) => (
															<svg
																key={i}
																className="h-5 w-5 text-yellow-400"
																fill="currentColor"
																viewBox="0 0 20 20"
															>
																<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
															</svg>
														))}
													</div>
													<blockquote className="mb-3 text-gray-300">
														&quot;
														{testimonial.quote}
														&quot;
													</blockquote>
													<div className="text-sm">
														<div className="font-semibold">
															{testimonial.author}
														</div>
														<div className="text-gray-400">
															{testimonial.title}
														</div>
													</div>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Request form modal */}
				{showRequestForm && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
						<div className="card max-h-[90vh] w-full max-w-2xl overflow-y-auto p-8">
							<div className="mb-6 flex items-center justify-between">
								<h2 className="font-poppins text-2xl font-semibold">
									Request Availability
								</h2>
								<button
									onClick={() => setShowRequestForm(false)}
									className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
								>
									<svg
										className="h-5 w-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							<form className="space-y-6">
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label className="mb-2 block text-sm font-medium">
											First Name
										</label>
										<input
											type="text"
											className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
											required
										/>
									</div>
									<div>
										<label className="mb-2 block text-sm font-medium">
											Last Name
										</label>
										<input
											type="text"
											className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
											required
										/>
									</div>
								</div>

								<div>
									<label className="mb-2 block text-sm font-medium">
										Email Address
									</label>
									<input
										type="email"
										className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
										required
									/>
								</div>

								<div>
									<label className="mb-2 block text-sm font-medium">
										Company/Organization
									</label>
									<input
										type="text"
										className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
										required
									/>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label className="mb-2 block text-sm font-medium">
											Event Date
										</label>
										<input
											type="date"
											className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
											required
										/>
									</div>
									<div>
										<label className="mb-2 block text-sm font-medium">
											Event Location
										</label>
										<input
											type="text"
											placeholder="City, State/Country"
											className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
											required
										/>
									</div>
								</div>

								<div>
									<label className="mb-2 block text-sm font-medium">
										Event Details & Message
									</label>
									<textarea
										rows={4}
										placeholder="Tell us about your event, audience size, and any specific requirements..."
										className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
										required
									></textarea>
								</div>

								<div className="flex gap-4">
									<button
										type="button"
										onClick={() =>
											setShowRequestForm(false)
										}
										className="flex-1 rounded-lg border border-gray-700 px-6 py-3 font-medium transition-colors hover:bg-gray-800"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="flex-1 rounded-lg bg-purple-primary px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
									>
										Send Request
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</main>
			<Footer />
		</>
	);
}
