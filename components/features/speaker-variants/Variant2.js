'use client';

import { useState } from 'react';
import { getSimilarSpeakerImage } from '@/services/placeholderService';

export default function Variant2({ speaker }) {
	const [showBioFull, setShowBioFull] = useState(false);
	const [showPricePopup, setShowPricePopup] = useState(false);
	const [activeReview, setActiveReview] = useState(0);
	const [activeTopic, setActiveTopic] = useState(0);
	const [activeSimilarSpeaker, setActiveSimilarSpeaker] = useState(0);
	const [expandedFAQ, setExpandedFAQ] = useState(null);
	const [favoriteStates, setFavoriteStates] = useState({});

	// Mock similar speakers with realistic images - 30 speakers total for 3 pages
	const allSimilarSpeakers = [
		// Page 1 (rows 1-6, 30 speakers)
		{
			name: 'Billy Misters',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Billy Misters', 0),
		},
		{
			name: 'Sherri Berry',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Sherri Berry', 1),
		},
		{
			name: 'Johnny Tsunami',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Johnny Tsunami', 2),
		},
		{
			name: 'Kayley Williams',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Kayley Williams', 3),
		},
		{
			name: 'David Bonesworth',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('David Bonesworth', 4),
		},
		{
			name: 'Billy Misters',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Billy Misters', 5),
		},
		{
			name: 'Sherri Berry',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Sherri Berry', 6),
		},
		{
			name: 'Johnny Tsunami',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Johnny Tsunami', 7),
		},
		{
			name: 'Kayley Williams',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Kayley Williams', 8),
		},
		{
			name: 'David Bonesworth',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('David Bonesworth', 9),
		},
		{
			name: 'Billy Misters',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Billy Misters', 10),
		},
		{
			name: 'Sherri Berry',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Sherri Berry', 11),
		},
		{
			name: 'Johnny Tsunami',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Johnny Tsunami', 12),
		},
		{
			name: 'Kayley Williams',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Kayley Williams', 13),
		},
		{
			name: 'David Bonesworth',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('David Bonesworth', 14),
		},
		{
			name: 'Billy Misters',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Billy Misters', 15),
		},
		{
			name: 'Sherri Berry',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Sherri Berry', 16),
		},
		{
			name: 'Johnny Tsunami',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Johnny Tsunami', 17),
		},
		{
			name: 'Kayley Williams',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Kayley Williams', 18),
		},
		{
			name: 'David Bonesworth',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('David Bonesworth', 19),
		},
		{
			name: 'Billy Misters',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Billy Misters', 20),
		},
		{
			name: 'Sherri Berry',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Sherri Berry', 21),
		},
		{
			name: 'Johnny Tsunami',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Johnny Tsunami', 22),
		},
		{
			name: 'Kayley Williams',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Kayley Williams', 23),
		},
		{
			name: 'David Bonesworth',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('David Bonesworth', 24),
		},
		{
			name: 'Billy Misters',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Billy Misters', 25),
		},
		{
			name: 'Sherri Berry',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Sherri Berry', 26),
		},
		{
			name: 'Johnny Tsunami',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Johnny Tsunami', 27),
		},
		{
			name: 'Kayley Williams',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('Kayley Williams', 28),
		},
		{
			name: 'David Bonesworth',
			fee: '$50,000 - $100,000',
			topic: 'Sports Motivation',
			image: getSimilarSpeakerImage('David Bonesworth', 29),
		},
	];

	// Pagination for similar speakers (30 per page, 3 pages total)
	const speakersPerPage = 30;
	const totalPages = 3;
	const currentPage = Math.floor(activeSimilarSpeaker / speakersPerPage) + 1;
	const currentPageSpeakers = allSimilarSpeakers.slice(
		activeSimilarSpeaker,
		activeSimilarSpeaker + speakersPerPage
	);

	const toggleFavorite = (speakerName) => {
		setFavoriteStates((prev) => ({
			...prev,
			[speakerName]: !prev[speakerName],
		}));
	};

	const toggleFAQ = (index) => {
		setExpandedFAQ(expandedFAQ === index ? null : index);
	};

	return (
		<div className="min-h-screen" style={{ backgroundColor: '#1a0b2e' }}>
			{/* Main Content Area */}
			<div className="pb-8 pt-28">
				<div className="container mx-auto max-w-7xl px-6">
					{/* Two Column Layout */}
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
						{/* Left Column - Main Speaker Content */}
						<div className="lg:col-span-8">
							{/* Speaker Header with Image and Name/Title */}
							<div className="mb-8 flex items-center gap-6">
								{/* Speaker Image - Square, Full Height */}
								<div
									className="aspect-square min-h-0 flex-shrink-0 self-stretch overflow-hidden rounded-xl"
									style={{
										width: 'auto',
										aspectRatio: '1/1',
									}}
								>
									<img
										src={speaker.image}
										alt={speaker.name}
										className="h-full w-full object-cover"
									/>
								</div>

								{/* Speaker Name and Title */}
								<div className="flex-1">
									<h1 className="mb-3 text-4xl font-bold text-white">
										{speaker.name}
									</h1>
									<p className="mb-6 text-2xl text-purple-200">
										{speaker.title}
									</p>

									{/* Profile Update Info */}
									<div className="mb-4 flex items-center gap-2 text-base text-purple-500">
										<svg
											className="h-5 w-5 text-purple-300"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										Profile updated {speaker.lastUpdated} by{' '}
										{speaker.updatedBy}
									</div>

									{/* Representation */}
									{speaker.representation && (
										<div className="mb-4 text-base text-purple-300">
											<span className="font-medium">
												Representation:
											</span>{' '}
											{speaker.representation}
										</div>
									)}

									{/* Badges */}
									<div className="mb-6 flex flex-wrap gap-3">
										<div className="flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1">
											<svg
												className="h-4 w-4 text-yellow-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<span className="text-sm font-medium text-yellow-200">
												highly-reviewed
											</span>
										</div>
										<div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/20 px-3 py-1">
											<svg
												className="h-4 w-4 text-red-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="text-sm font-medium text-red-200">
												trending
											</span>
										</div>
										<div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1">
											<svg
												className="h-4 w-4 text-blue-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4z" />
												<path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
											</svg>
											<span className="text-sm font-medium text-blue-200">
												available
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* About Section */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<div className="mb-6 flex items-center justify-between">
									<h2 className="text-3xl font-semibold text-white">
										About {speaker.name}
									</h2>
									<div className="flex gap-2">
										<button
											onClick={() =>
												setShowBioFull(false)
											}
											className={`w-24 rounded-full py-2 text-sm font-medium transition-colors ${
												!showBioFull
													? 'bg-purple-600 text-white'
													: 'bg-purple-800 text-purple-300 hover:bg-purple-700 hover:text-white'
											}`}
										>
											highlights
										</button>
										<button
											onClick={() => setShowBioFull(true)}
											className={`w-24 rounded-full py-2 text-sm font-medium transition-colors ${
												showBioFull
													? 'bg-purple-600 text-white'
													: 'bg-purple-800 text-purple-300 hover:bg-purple-700 hover:text-white'
											}`}
										>
											full bio
										</button>
									</div>
								</div>

								{showBioFull ? (
									<div className="space-y-4 text-purple-100">
										{speaker.bioFull
											?.split('\n\n')
											.map((paragraph, idx) => (
												<p
													key={idx}
													className="text-lg leading-relaxed"
												>
													{paragraph}
												</p>
											))}
									</div>
								) : (
									<div className="space-y-4 text-purple-100">
										{speaker.bioHighlights?.map(
											(highlight, idx) => (
												<div
													key={idx}
													className="flex items-start gap-3 text-lg"
												>
													<span className="text-2xl">
														{highlight.icon}
													</span>
													<span className="leading-relaxed">
														{highlight.text}
													</span>
												</div>
											)
										)}
									</div>
								)}
							</div>

							{/* Featured Testimonials */}
							<div className="mb-6 rounded-xl border border-yellow-400 bg-purple-900/50 p-8">
								<div className="mb-4 flex justify-end">
									<div className="flex gap-3">
										<button
											onClick={() =>
												setActiveReview(
													Math.max(
														0,
														activeReview - 1
													)
												)
											}
											disabled={activeReview === 0}
											className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600 disabled:opacity-50"
										>
											‹
										</button>
										<span className="self-center text-base font-medium text-purple-300">
											{activeReview + 1}/
											{speaker.testimonials?.length || 1}
										</span>
										<button
											onClick={() =>
												setActiveReview(
													Math.min(
														(speaker.testimonials
															?.length || 1) - 1,
														activeReview + 1
													)
												)
											}
											disabled={
												activeReview ===
												(speaker.testimonials?.length ||
													1) -
													1
											}
											className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600 disabled:opacity-50"
										>
											›
										</button>
									</div>
								</div>

								<div className="text-center text-purple-100">
									{/* Stars First */}
									<div className="mb-4 flex justify-center text-yellow-400">
										{[
											...Array(
												speaker.testimonials?.[
													activeReview
												]?.rating || 5
											),
										].map((_, i) => (
											<svg
												key={i}
												className="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>

									{/* Review Text Second */}
									<p className="mb-4 text-xl italic leading-relaxed">
										&ldquo;
										{
											speaker.testimonials?.[activeReview]
												?.quote
										}
										&rdquo;
									</p>

									{/* Author Info Third */}
									<div className="text-lg font-medium text-purple-200">
										–{' '}
										{
											speaker.testimonials?.[activeReview]
												?.author
										}
										,{' '}
										{
											speaker.testimonials?.[activeReview]
												?.company
										}
									</div>
								</div>
							</div>

							{/* Speech Topics */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<div className="mb-4 flex items-center justify-between">
									<h3 className="text-3xl font-semibold text-white">
										Speech topics
									</h3>
									<div className="flex gap-3">
										<button
											onClick={() =>
												setActiveTopic(
													Math.max(0, activeTopic - 1)
												)
											}
											disabled={activeTopic === 0}
											className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600 disabled:opacity-50"
										>
											‹
										</button>
										<span className="self-center text-base font-medium text-purple-300">
											{activeTopic + 1}/
											{speaker.speechTopics?.length || 1}
										</span>
										<button
											onClick={() =>
												setActiveTopic(
													Math.min(
														(speaker.speechTopics
															?.length || 1) - 1,
														activeTopic + 1
													)
												)
											}
											disabled={
												activeTopic ===
												(speaker.speechTopics?.length ||
													1) -
													1
											}
											className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600 disabled:opacity-50"
										>
											›
										</button>
									</div>
								</div>

								<div className="text-purple-100">
									<h4 className="mb-4 text-xl font-semibold">
										&ldquo;
										{
											speaker.speechTopics?.[activeTopic]
												?.title
										}
										&rdquo;
									</h4>
									<div className="text-lg">
										<p className="mb-3 text-purple-200">
											Key Takeaways:
										</p>
										<div className="space-y-2">
											{speaker.speechTopics?.[
												activeTopic
											]?.takeaways?.map(
												(takeaway, idx) => (
													<div
														key={idx}
														className="leading-relaxed"
													>
														{takeaway}
													</div>
												)
											)}
										</div>
									</div>
								</div>
							</div>

							{/* Speaking Fees Section */}
							<div className="mb-6 px-8 py-8">
								<div className="flex items-center justify-between">
									<div className="flex-1">
										<h3 className="mb-8 text-3xl font-semibold text-white">
											Everything you need to know about
											speaking fees.
										</h3>
										<button className="rounded-full border-2 border-purple-500 bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-purple-500">
											Download free cheat sheet
										</button>
									</div>
									<div className="ml-8 flex-shrink-0">
										{/* Money bag icon */}
										<div className="flex h-24 w-24 items-center justify-center">
											<svg
												className="h-20 w-20 text-purple-400"
												fill="currentColor"
												viewBox="0 0 100 100"
											>
												{/* Money bag shape */}
												<path d="M30 25 Q30 15 40 15 L60 15 Q70 15 70 25 L70 30 Q70 35 65 35 Q72 40 75 50 Q78 60 78 70 Q78 85 65 85 L35 85 Q22 85 22 70 Q22 60 25 50 Q28 40 35 35 Q30 35 30 30 Z" />
												{/* Rope/tie at top */}
												<rect
													x="42"
													y="12"
													width="3"
													height="8"
													rx="1"
												/>
												<rect
													x="48"
													y="12"
													width="3"
													height="8"
													rx="1"
												/>
												<rect
													x="54"
													y="12"
													width="3"
													height="8"
													rx="1"
												/>
												{/* Dollar sign */}
												<path
													d="M50 45 Q45 45 45 50 Q45 55 50 55 Q55 55 55 50 Q55 45 50 45 Z"
													fill="white"
												/>
												<rect
													x="49"
													y="40"
													width="2"
													height="20"
													fill="white"
												/>
												<path
													d="M45 48 Q42 48 42 45 Q42 42 45 42 L55 42 Q58 42 58 45 Q58 48 55 48 M45 52 Q42 52 42 55 Q42 58 45 58 L55 58 Q58 58 58 55 Q58 52 55 52"
													fill="white"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>

							{/* Speaking Videos */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<div className="mb-6 flex items-center justify-between">
									<h3 className="text-3xl font-semibold text-white">
										Speaking videos
									</h3>
									<div className="flex gap-3">
										<button className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600">
											‹
										</button>
										<span className="self-center text-base font-medium text-purple-300">
											1/2
										</span>
										<button className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600">
											›
										</button>
									</div>
								</div>

								<div className="aspect-video overflow-hidden rounded-xl border-2 border-white">
									<iframe
										src={speaker.videoUrl}
										className="h-full w-full"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
							</div>

							{/* Media Coverage */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<h3 className="mb-6 text-3xl font-semibold text-white">
									Media coverage
								</h3>
								<div className="space-y-4">
									{speaker.mediaCoverage?.map(
										(coverage, idx) => (
											<div
												key={idx}
												className="flex items-start gap-4 rounded-lg bg-purple-800/30 p-4 transition-colors hover:bg-purple-800/50"
											>
												<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-purple-600 text-sm font-bold text-white">
													<img
														src={coverage.logo}
														alt={`${coverage.outlet} favicon`}
														className="h-6 w-6 object-contain"
														onError={(e) => {
															e.target.style.display =
																'none';
															const parent =
																e.target
																	.parentElement;
															if (parent) {
																parent.textContent =
																	coverage.outlet.charAt(
																		0
																	);
															}
														}}
													/>
												</div>
												<div className="flex-grow">
													<h4 className="text-lg font-medium text-white">
														{coverage.outlet}
													</h4>
													<p className="text-lg font-medium text-purple-100">
														{coverage.title}
													</p>
													<p className="text-base text-purple-300">
														{coverage.description}
													</p>
												</div>
											</div>
										)
									)}
								</div>
							</div>

							{/* Books */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<h3 className="mb-6 text-3xl font-semibold text-white">
									Books by {speaker.name}
								</h3>
								<div className="space-y-6">
									{speaker.books?.map((book, idx) => (
										<div
											key={idx}
											className="flex gap-6 rounded-lg bg-purple-800/30 p-6"
										>
											<img
												src={book.image}
												alt={book.title}
												className="h-40 w-28 rounded object-cover"
											/>
											<div className="flex-grow">
												<h4 className="mb-2 text-lg font-semibold text-white">
													&ldquo;{book.title}&rdquo; (
													{book.year})
												</h4>
												<p className="text-base leading-relaxed text-purple-200">
													{book.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* FAQs */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<h3 className="mb-6 text-3xl font-semibold text-white">
									FAQs on booking {speaker.name}
								</h3>
								<div className="space-y-4">
									{speaker.faqs?.map((faq, idx) => (
										<div
											key={idx}
											className="border-b border-purple-700 pb-4 last:border-b-0 last:pb-0"
										>
											<button
												onClick={() => toggleFAQ(idx)}
												className="flex w-full items-center justify-between text-left text-purple-100 transition-colors hover:text-white"
											>
												<span className="text-lg font-medium">
													{faq.question}
												</span>
												<svg
													className={`h-5 w-5 transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`}
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</button>
											{expandedFAQ === idx && (
												<div className="mt-3 text-base leading-relaxed text-purple-200">
													{faq.answer}
												</div>
											)}
										</div>
									))}
								</div>
							</div>

							{/* Featured Lists */}
							<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
								<h3 className="mb-6 text-3xl font-semibold text-white">
									{speaker.name} is featured on these lists
								</h3>
								<div className="space-y-3">
									{speaker.featuredLists?.map((list, idx) => (
										<div
											key={idx}
											className="flex items-center gap-3 text-lg text-purple-200"
										>
											<span className="h-2 w-2 rounded-full bg-purple-400"></span>
											{list}
										</div>
									))}
								</div>
							</div>

							{/* Tags */}
							<div className="mb-6">
								<h3 className="mb-6 text-3xl font-semibold text-white">
									Tags
								</h3>
								<div className="flex flex-wrap gap-3">
									{speaker.tags?.map((tag, idx) => (
										<span
											key={idx}
											className="rounded-full border border-purple-700 bg-purple-800/50 px-4 py-2 text-base text-purple-200 transition-colors hover:bg-purple-700"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Right Column - Sticky CTA */}
						<div className="lg:col-span-4">
							<div className="sticky top-24">
								{/* Main CTA Card */}
								<div className="mb-6 rounded-xl border border-purple-700 bg-purple-900/50 p-8">
									{/* Header */}
									<div className="mb-6 flex items-center gap-3">
										<span className="text-xl">⚡</span>
										<h3 className="text-2xl font-semibold text-white">
											{speaker.name} at a glance
										</h3>
									</div>

									<div className="mb-6 text-purple-100">
										<p className="mb-6 text-lg italic leading-relaxed">
											{speaker.tagline}
										</p>
									</div>

									{/* Travels from */}
									<div className="mb-4 flex items-center gap-3 text-base text-purple-200">
										<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
											<span className="text-lg">📍</span>
										</div>
										<span className="flex-1">
											Travels from {speaker.location}
										</span>
									</div>

									{/* Estimate */}
									<div
										className="relative mb-6"
										onMouseEnter={() =>
											setShowPricePopup(true)
										}
										onMouseLeave={() =>
											setShowPricePopup(false)
										}
									>
										<div className="flex items-center gap-3 text-base text-green-400">
											<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-400 text-black">
												<span className="text-base font-bold">
													$
												</span>
											</div>
											<div className="flex flex-1 items-center gap-2">
												<span className="font-semibold">
													Estimate: {speaker.feeRange}
												</span>
												<div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-gray-400">
													<span className="text-xs text-gray-400">
														?
													</span>
												</div>
											</div>
										</div>

										{/* Price Popup */}
										{showPricePopup && (
											<div className="absolute left-0 top-full z-20 mt-2 w-72 rounded-lg border border-purple-600 bg-purple-800 p-6 shadow-xl">
												<div className="text-base leading-relaxed text-white">
													<p className="mb-3">
														Fees often vary based on
														a number of factors
														including:
														speakers&apos; schedule,
														supply and demand,
														length of presentation,
														location of event, and
														more.
													</p>
													<p className="mb-3">
														Fee ranges listed on
														this website are
														intended to serve only
														as a guideline. Read
														more on fees.
													</p>
													<p>
														For the most accurate
														quote, click the
														&ldquo;Let&apos;s get
														started&rdquo; button,
														and tell us a bit more
														about your event.
													</p>
												</div>
											</div>
										)}
									</div>

									{/* Get a custom quote */}
									<p className="mb-4 text-center text-lg font-medium text-purple-200">
										Get a custom quote for your event:
									</p>

									{/* Button */}
									<button className="mb-8 w-full rounded-full border-2 border-purple-500 bg-transparent py-4 text-lg font-semibold text-white transition-colors hover:bg-purple-500">
										Let&apos;s get started
									</button>

									{/* Save/Share buttons */}
									<div className="flex justify-center gap-4">
										<button className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-2 text-base text-gray-400 hover:border-white hover:text-white">
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
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
											save
										</button>
										<button className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-2 text-base text-gray-400 hover:border-white hover:text-white">
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
													d="M12 3l8 8-8 8m0 0l-3-3m3 3H5"
												/>
											</svg>
											share
										</button>
									</div>
								</div>

								{/* Submit revision request - Outside the card, on background */}
								<div className="mt-4 text-center">
									<button className="text-base text-gray-400 underline hover:text-white">
										Submit a revision request
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Browse Similar Speakers */}
					<div className="mt-16">
						<div className="mb-6 flex items-center justify-between">
							<h3 className="text-3xl font-semibold text-white">
								Browse similar speakers
							</h3>
							<div className="flex items-center gap-2">
								<span className="text-base text-purple-300">
									{currentPage}/3
								</span>
								<button
									onClick={() =>
										setActiveSimilarSpeaker(
											Math.max(
												0,
												activeSimilarSpeaker -
													speakersPerPage
											)
										)
									}
									disabled={currentPage === 1}
									className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600 disabled:opacity-50"
								>
									‹
								</button>
								<button
									onClick={() =>
										setActiveSimilarSpeaker(
											Math.min(
												(totalPages - 1) *
													speakersPerPage,
												activeSimilarSpeaker +
													speakersPerPage
											)
										)
									}
									disabled={currentPage === totalPages}
									className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-lg text-white hover:bg-purple-600 disabled:opacity-50"
								>
									›
								</button>
							</div>
						</div>

						{/* 6 rows x 5 columns = 30 speakers per page */}
						<div className="grid grid-cols-5 gap-4">
							{currentPageSpeakers.map((speakerItem, index) => (
								<div
									key={`${activeSimilarSpeaker}-${index}`}
									className="overflow-hidden rounded-xl border border-purple-700 bg-purple-900/50 transition-colors hover:bg-purple-800/50"
								>
									<div className="relative p-4">
										{/* Plus button - left side */}
										<button className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white transition-colors hover:bg-purple-500">
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 4v16m8-8H4"
												/>
											</svg>
										</button>

										{/* Heart button - right side */}
										<button
											onClick={() =>
												toggleFavorite(speakerItem.name)
											}
											className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur transition-colors hover:bg-black/70"
										>
											<svg
												className={`h-5 w-5 ${
													favoriteStates[
														speakerItem.name
													]
														? 'fill-purple-500 text-purple-500'
														: 'fill-none text-white'
												}`}
												stroke="currentColor"
												strokeWidth="2"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/>
											</svg>
										</button>

										{/* Circular speaker image */}
										<div className="mb-2 flex justify-center">
											<div className="h-32 w-32 overflow-hidden rounded-full">
												<img
													src={speakerItem.image}
													alt={speakerItem.name}
													className="h-full w-full object-cover"
												/>
											</div>
										</div>
									</div>

									{/* Centered text content */}
									<div className="px-4 pb-4 text-center">
										<h4 className="mb-1 text-base font-semibold text-white">
											{speakerItem.name}
										</h4>
										<p className="mb-2 text-sm text-purple-300">
											{speakerItem.topic}
										</p>
										<div className="flex items-center justify-center gap-2">
											<div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
												<span className="text-xs font-bold text-black">
													$
												</span>
											</div>
											<p className="text-sm text-green-400">
												{speakerItem.fee}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Bottom pagination */}
						<div className="mt-6 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className="text-sm text-purple-400">
									Page {currentPage} of {totalPages}
								</span>
								<button
									onClick={() =>
										setActiveSimilarSpeaker(
											Math.max(
												0,
												activeSimilarSpeaker -
													speakersPerPage
											)
										)
									}
									disabled={currentPage === 1}
									className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-700 text-sm text-white hover:bg-purple-600 disabled:opacity-50"
								>
									‹
								</button>
								<button
									onClick={() =>
										setActiveSimilarSpeaker(
											Math.min(
												(totalPages - 1) *
													speakersPerPage,
												activeSimilarSpeaker +
													speakersPerPage
											)
										)
									}
									disabled={currentPage === totalPages}
									className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-700 text-sm text-white hover:bg-purple-600 disabled:opacity-50"
								>
									›
								</button>
							</div>
						</div>

						<div className="mt-8 text-center">
							<p className="text-base italic text-purple-400">
								Speaker Search is a marketplace of speakers
								designed for talent buyers. We do not represent
								or manage speakers; instead, we provide event
								planners with the most comprehensive resource to
								discover and book the right talent.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
