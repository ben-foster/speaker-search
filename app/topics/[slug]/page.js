'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import SearchResults from '@/components/features/SearchResults';
import { getTopicBySlug, getRelatedTopics } from '@/services/topicService';
import { mockSpeakers, getSpeakersForTopic } from '@/services/searchService';

export default function TopicPage() {
	const params = useParams();
	const router = useRouter();
	const [topic, setTopic] = useState(null);
	const [speakers, setSpeakers] = useState([]);
	const [relatedTopics, setRelatedTopics] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	const SPEAKERS_PER_PAGE = 12;

	useEffect(() => {
		const fetchTopicData = async () => {
			setLoading(true);

			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 300));

			const topicData = getTopicBySlug(params.slug);

			if (!topicData) {
				router.push('/404');
				return;
			}

			// Get speakers for this topic
			const topicSpeakers = getSpeakersForTopic(
				topicData.name,
				mockSpeakers
			);
			const related = getRelatedTopics(params.slug, 3);

			setTopic(topicData);
			setSpeakers(topicSpeakers);
			setRelatedTopics(related);
			setLoading(false);
		};

		fetchTopicData();
	}, [params.slug, router]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
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
							<div className="mb-8 h-16 w-3/4 rounded bg-gray-700" />
							<div className="mb-12 space-y-4">
								<div className="h-4 w-full rounded bg-gray-700" />
								<div className="h-4 w-5/6 rounded bg-gray-700" />
								<div className="h-4 w-4/5 rounded bg-gray-700" />
							</div>
							<div className="h-96 w-full rounded bg-gray-700" />
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	if (!topic) {
		return null;
	}

	// Paginate speakers
	const paginatedSpeakers = speakers.slice(
		(currentPage - 1) * SPEAKERS_PER_PAGE,
		currentPage * SPEAKERS_PER_PAGE
	);
	const totalPages = Math.ceil(speakers.length / SPEAKERS_PER_PAGE);

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
							href="/topics"
							className="hover:text-purple-primary"
						>
							Topics
						</Link>
						<span>/</span>
						<span className="text-white">{topic.name}</span>
					</nav>

					{/* Compact Topic Header */}
					<div className="mb-8">
						<div className="flex items-center space-x-4 mb-4">
							<span className="text-4xl">{topic.icon}</span>
							<div>
								<h1 className="font-poppins text-3xl font-bold md:text-4xl mb-2">
									{topic.name}
								</h1>
								<div className="flex items-center space-x-4 text-sm text-gray-400">
									<span className="rounded-full bg-purple-primary/20 px-3 py-1 text-purple-primary font-medium">
										{topic.category}
									</span>
									<span>{speakers.length} Expert Speakers</span>
									<span>Available for Booking</span>
								</div>
							</div>
						</div>
						
						{/* Keywords - Compact */}
						<div className="flex flex-wrap gap-2">
							{topic.popularKeywords.slice(0, 6).map((keyword) => (
								<span
									key={keyword}
									className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
								>
									{keyword}
								</span>
							))}
						</div>
					</div>


					{/* Speakers Section */}
					<div className="mb-16">
						<div className="mb-8 text-center">
							<h2 className="mb-4 font-poppins text-3xl font-bold">
								{topic.name} Speakers
							</h2>
							<p className="text-gray-300">
								Discover our curated selection of expert
								speakers specializing in{' '}
								{topic.name.toLowerCase()}
							</p>
						</div>

						<SearchResults
							speakers={paginatedSpeakers}
							totalCount={speakers.length}
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
							loading={false}
						/>
					</div>

					{/* Topic Description */}
					<div className="mb-16">
						<div className="card p-8 md:p-12">
							<h2 className="mb-6 font-poppins text-2xl font-bold">
								About {topic.name}
							</h2>
							<div className="space-y-4 leading-relaxed text-gray-300">
								{topic.description.split('\n\n').map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>
						</div>
					</div>

					{/* Related Topics */}
					{relatedTopics.length > 0 && (
						<div className="mb-16">
							<h2 className="mb-8 text-center font-poppins text-2xl font-bold">
								Related Topics
							</h2>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
								{relatedTopics.map((relatedTopic) => (
									<Link
										key={relatedTopic.slug}
										href={`/topics/${relatedTopic.slug}`}
										className="group block"
									>
										<div className="card relative overflow-hidden p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
											{/* Gradient Background */}
											<div
												className={`absolute inset-0 bg-gradient-to-br ${relatedTopic.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-20`}
											/>

											{/* Content */}
											<div className="relative z-10 text-center">
												<div className="mb-4 text-3xl">
													{relatedTopic.icon}
												</div>
												<h3 className="mb-2 font-poppins text-lg font-semibold transition-colors group-hover:text-purple-primary">
													{relatedTopic.name}
												</h3>
												<p className="mb-4 text-sm text-gray-400">
													{relatedTopic.category}
												</p>
												<div className="flex items-center justify-center text-purple-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
													<span className="mr-2 text-sm font-medium">
														Explore
													</span>
													<svg
														className="h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					)}

					{/* Call to Action */}
					<div className="card p-8 text-center md:p-12">
						<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
							Ready to book a {topic.name} speaker?
						</h2>
						<p className="mb-6 text-gray-300">
							Our team is here to help you find the perfect
							speaker for your event and audience.
						</p>
						<Link
							href="/contact"
							className="inline-block rounded-lg bg-purple-primary px-8 py-3 font-medium text-white transition-colors hover:bg-purple-600"
						>
							Get a Proposal
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
