'use client';

import SpeakerCard from '@/components/ui/SpeakerCard';

export default function SearchResults({
	speakers = [],
	totalCount = 0,
	currentPage = 1,
	totalPages = 1,
	onPageChange,
	loading = false,
}) {
	const startIndex = (currentPage - 1) * 12 + 1;
	const endIndex = Math.min(currentPage * 12, totalCount);

	if (loading) {
		return (
			<div className="space-y-8">
				<div className="h-8 w-64 animate-pulse rounded bg-gray-700" />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{Array(12)
						.fill(0)
						.map((_, i) => (
							<div
								key={i}
								className="h-80 animate-pulse rounded-2xl bg-gray-700"
							/>
						))}
				</div>
			</div>
		);
	}

	if (!speakers.length) {
		return (
			<div className="flex flex-col items-center justify-center py-20 text-center">
				<div className="mb-4 rounded-full bg-gray-800 p-6">
					<svg
						className="h-12 w-12 text-gray-500"
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
				<h3 className="mb-2 font-poppins text-xl font-semibold">
					No speakers found
				</h3>
				<p className="text-gray-400">
					Try adjusting your filters or search criteria
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			{/* Results count */}
			<div className="flex items-center justify-between">
				<h2 className="font-poppins text-xl font-semibold">
					{totalCount} speakers matched your search criteria
				</h2>
				<div className="text-sm text-gray-400">
					Showing {startIndex}-{endIndex} of {totalCount}
				</div>
			</div>

			{/* Results grid */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{speakers.map((speaker) => (
					<SpeakerCard
						key={speaker.id}
						speaker={speaker}
						showFavorite={true}
					/>
				))}
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-between border-t border-gray-800 pt-8">
					<div className="text-sm text-gray-400">
						Page {currentPage} of {totalPages}
					</div>
					<div className="flex items-center space-x-2">
						<button
							onClick={() => onPageChange?.(currentPage - 1)}
							disabled={currentPage === 1}
							className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-purple-primary hover:text-purple-primary disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Previous page"
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
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>

						{/* Page numbers */}
						{Array.from(
							{ length: Math.min(5, totalPages) },
							(_, i) => {
								let page;
								if (totalPages <= 5) {
									page = i + 1;
								} else if (currentPage <= 3) {
									page = i + 1;
								} else if (currentPage >= totalPages - 2) {
									page = totalPages - 4 + i;
								} else {
									page = currentPage - 2 + i;
								}

								return (
									<button
										key={page}
										onClick={() => onPageChange?.(page)}
										className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
											page === currentPage
												? 'border-purple-primary bg-purple-primary text-white'
												: 'border-gray-700 text-gray-400 hover:border-purple-primary hover:text-purple-primary'
										}`}
									>
										{page}
									</button>
								);
							}
						)}

						<button
							onClick={() => onPageChange?.(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-200 hover:border-purple-primary hover:text-purple-primary disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Next page"
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
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
