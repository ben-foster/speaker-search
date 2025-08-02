'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SpeakerCard({ speaker, showFavorite = false }) {
	const { id, name, image, topic, rating, eventCount } = speaker;
	const [isFavorited, setIsFavorited] = useState(false);

	const handleFavoriteClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsFavorited(!isFavorited);
	};

	return (
		<Link href={`/speakers/${id}`} className="group block">
			<div className="card relative p-6 transition-all duration-300 hover:shadow-xl">
				{/* Favorite button */}
				{showFavorite && (
					<button
						onClick={handleFavoriteClick}
						className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-dark-bg-primary/80 backdrop-blur-sm transition-all duration-200 hover:bg-dark-bg-primary"
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
				)}

				<div className="flex flex-col items-center text-center">
					<div className="relative mb-4 h-32 w-32">
						{image ? (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={image}
								alt={name}
								className="h-full w-full rounded-full object-cover"
							/>
						) : (
							<div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-primary/20 to-purple-primary/10">
								<svg
									className="h-16 w-16 text-purple-primary/50"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
								</svg>
							</div>
						)}
						<div className="absolute inset-0 rounded-full ring-4 ring-purple-primary/0 transition-all duration-300 group-hover:ring-purple-primary/50" />
					</div>

					<h3 className="mb-1 font-poppins text-lg font-semibold transition-colors group-hover:text-purple-primary">
						{name}
					</h3>

					<p className="mb-3 text-sm text-gray-400">{topic}</p>

					<div className="flex items-center space-x-4 text-sm">
						<div className="flex items-center">
							<svg
								className="mr-1 h-4 w-4 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
							<span className="font-medium">{rating}</span>
						</div>
						<span className="text-gray-400">•</span>
						<span className="text-gray-400">
							{eventCount}+ events
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
