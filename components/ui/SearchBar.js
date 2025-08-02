'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ placeholder, className = '' }) {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (query.trim()) {
			router.push(`/search?q=${encodeURIComponent(query.trim())}`);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`relative ${className}`}>
			<div className="relative">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder={placeholder}
					className="w-full rounded-full border border-gray-800 bg-dark-bg-secondary px-6 py-4 pr-12 text-lg text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-primary"
				/>
				<button
					type="submit"
					className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 transition-colors duration-200 hover:text-purple-primary"
					aria-label="Search"
				>
					<svg
						className="h-6 w-6"
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
				</button>
			</div>
		</form>
	);
}
