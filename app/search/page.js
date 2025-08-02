'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import BudgetSlider from '@/components/ui/BudgetSlider';
import FilterPills from '@/components/ui/FilterPills';
import SearchResults from '@/components/features/SearchResults';
import { mockSpeakers } from '@/services/searchService';

const topicOptions = [
	'AI & Machine Learning',
	'Leadership & Strategy',
	'Healthcare Innovation',
	'Digital Transformation',
	'Sustainability',
	'Entrepreneurship',
	'Marketing & Sales',
	'Finance & Economics',
	'Technology Trends',
	'Innovation',
];

function SearchPageContent() {
	const searchParams = useSearchParams();
	const router = useRouter();

	// State for filters
	const [budget, setBudget] = useState(50000);
	const [selectedTopics, setSelectedTopics] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [speakers, setSpeakers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	// Pagination constants
	const SPEAKERS_PER_PAGE = 12;

	// Initialize state from URL parameters
	useEffect(() => {
		const budgetParam = searchParams.get('budget');
		const topicsParam = searchParams.get('topics');
		const queryParam = searchParams.get('q');
		const pageParam = searchParams.get('page');

		if (budgetParam) {
			setBudget(parseInt(budgetParam));
		}
		if (topicsParam) {
			setSelectedTopics(topicsParam.split(','));
		}
		if (queryParam) {
			setSearchQuery(queryParam);
		}
		if (pageParam) {
			setCurrentPage(parseInt(pageParam));
		}
	}, [searchParams]);

	// Update URL when filters change
	const updateURL = (newBudget, newTopics, newQuery, newPage = 1) => {
		const params = new URLSearchParams();

		if (newBudget !== 50000) {
			params.set('budget', newBudget.toString());
		}
		if (newTopics.length > 0) {
			params.set('topics', newTopics.join(','));
		}
		if (newQuery) {
			params.set('q', newQuery);
		}
		if (newPage > 1) {
			params.set('page', newPage.toString());
		}

		const queryString = params.toString();
		const newURL = queryString ? `/search?${queryString}` : '/search';
		router.push(newURL);
	};

	// Update speakers when filters change
	useEffect(() => {
		setLoading(true);
		// Simulate API delay
		const timer = setTimeout(() => {
			// Filter speakers based on current criteria
			const filtered = mockSpeakers.filter((speaker) => {
				// Budget filter
				if (speaker.fee > budget) return false;

				// Topic filter
				if (
					selectedTopics.length > 0 &&
					!selectedTopics.includes(speaker.topic)
				) {
					return false;
				}

				// Search query filter
				if (searchQuery) {
					const query = searchQuery.toLowerCase();
					return (
						speaker.name.toLowerCase().includes(query) ||
						speaker.topic.toLowerCase().includes(query)
					);
				}

				return true;
			});

			setSpeakers(filtered);
			setLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [budget, selectedTopics, searchQuery]);

	// Handle budget change
	const handleBudgetChange = (newBudget) => {
		setBudget(newBudget);
		setCurrentPage(1);
		updateURL(newBudget, selectedTopics, searchQuery, 1);
	};

	// Handle topic selection
	const handleTopicToggle = (topic) => {
		const newTopics = selectedTopics.includes(topic)
			? selectedTopics.filter((t) => t !== topic)
			: [...selectedTopics, topic];

		setSelectedTopics(newTopics);
		setCurrentPage(1);
		updateURL(budget, newTopics, searchQuery, 1);
	};

	// Handle search query change
	const handleSearchChange = (query) => {
		setSearchQuery(query);
		setCurrentPage(1);
		updateURL(budget, selectedTopics, query, 1);
	};

	// Handle page change
	const handlePageChange = (page) => {
		setCurrentPage(page);
		updateURL(budget, selectedTopics, searchQuery, page);
		// Scroll to top
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Remove filter pill
	const handleRemoveFilter = (filterId) => {
		if (filterId === 'budget') {
			setBudget(50000);
			updateURL(50000, selectedTopics, searchQuery, 1);
		} else if (filterId.startsWith('topic-')) {
			const topic = filterId.replace('topic-', '');
			const newTopics = selectedTopics.filter((t) => t !== topic);
			setSelectedTopics(newTopics);
			updateURL(budget, newTopics, searchQuery, 1);
		} else if (filterId === 'search') {
			setSearchQuery('');
			updateURL(budget, selectedTopics, '', 1);
		}
		setCurrentPage(1);
	};

	// Create filter pills
	const createFilterPills = () => {
		const pills = [];

		// Budget pill (show if not default)
		if (budget !== 50000) {
			pills.push({
				id: 'budget',
				label: `Budget: $${budget.toLocaleString()}`,
			});
		}

		// Topic pills
		selectedTopics.forEach((topic) => {
			pills.push({
				id: `topic-${topic}`,
				label: topic,
			});
		});

		// Search query pill
		if (searchQuery) {
			pills.push({
				id: 'search',
				label: `Search: "${searchQuery}"`,
			});
		}

		return pills;
	};

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
					{/* Page header */}
					<div className="mb-12 text-center">
						<h1 className="mb-4 font-poppins text-4xl font-bold md:text-5xl">
							Find Your Perfect Speaker
						</h1>
						<p className="mx-auto max-w-2xl text-xl text-gray-300">
							Search and filter through our curated database of
							world-class speakers
						</p>
					</div>

					{/* Search bar */}
					<div className="mx-auto mb-12 max-w-2xl">
						<div className="relative">
							<input
								type="text"
								placeholder="Search speakers, topics, or keywords..."
								value={searchQuery}
								onChange={(e) =>
									handleSearchChange(e.target.value)
								}
								className="w-full rounded-2xl border border-gray-700 bg-dark-bg-secondary px-6 py-4 pl-14 text-lg placeholder-gray-400 transition-all duration-200 focus:border-purple-primary focus:outline-none focus:ring-2 focus:ring-purple-primary/20"
							/>
							<svg
								className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
						{/* Sidebar filters */}
						<div className="lg:col-span-1">
							<div className="space-y-8">
								{/* Budget slider */}
								<div className="card p-6">
									<BudgetSlider
										value={budget}
										onChange={handleBudgetChange}
									/>
								</div>

								{/* Topic filters */}
								<div className="card p-6">
									<h3 className="mb-4 font-poppins text-lg font-semibold">
										Topics
									</h3>
									<div className="space-y-2">
										{topicOptions.map((topic) => (
											<label
												key={topic}
												className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-gray-800"
											>
												<input
													type="checkbox"
													checked={selectedTopics.includes(
														topic
													)}
													onChange={() =>
														handleTopicToggle(topic)
													}
													className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-primary focus:ring-2 focus:ring-purple-primary/20"
												/>
												<span className="text-sm">
													{topic}
												</span>
											</label>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Results area */}
						<div className="lg:col-span-3">
							<div className="space-y-6">
								{/* Active filters */}
								<FilterPills
									filters={createFilterPills()}
									onRemoveFilter={handleRemoveFilter}
								/>

								{/* Search results */}
								<SearchResults
									speakers={paginatedSpeakers}
									totalCount={speakers.length}
									currentPage={currentPage}
									totalPages={totalPages}
									onPageChange={handlePageChange}
									loading={loading}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

// Loading component for Suspense boundary
function SearchPageLoading() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					<div className="mb-12 text-center">
						<div className="mx-auto mb-4 h-12 w-96 animate-pulse rounded bg-gray-700" />
						<div className="mx-auto h-6 w-2/3 animate-pulse rounded bg-gray-700" />
					</div>
					<div className="mx-auto mb-12 max-w-2xl">
						<div className="h-14 w-full animate-pulse rounded-2xl bg-gray-700" />
					</div>
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
						<div className="lg:col-span-1">
							<div className="space-y-8">
								<div className="card p-6">
									<div className="h-32 animate-pulse rounded bg-gray-700" />
								</div>
								<div className="card p-6">
									<div className="h-64 animate-pulse rounded bg-gray-700" />
								</div>
							</div>
						</div>
						<div className="lg:col-span-3">
							<div className="h-96 animate-pulse rounded bg-gray-700" />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default function SearchPage() {
	return (
		<Suspense fallback={<SearchPageLoading />}>
			<SearchPageContent />
		</Suspense>
	);
}
