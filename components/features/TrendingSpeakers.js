'use client';

import { useState, useEffect } from 'react';
import SpeakerCard from '@/components/ui/SpeakerCard';

// Mock data - replace with API call
const mockSpeakers = [
	{
		id: '1',
		name: 'Dr. Sarah Chen',
		image: null,
		topic: 'AI & Future of Work',
		rating: 4.9,
		eventCount: 150,
	},
	{
		id: '2',
		name: 'Marcus Rodriguez',
		image: null,
		topic: 'Leadership & Innovation',
		rating: 4.8,
		eventCount: 200,
	},
	{
		id: '3',
		name: 'Dr. Amara Okafor',
		image: null,
		topic: 'Sustainability & Climate',
		rating: 4.9,
		eventCount: 120,
	},
	{
		id: '4',
		name: 'James Mitchell',
		image: null,
		topic: 'Mental Health & Wellness',
		rating: 4.7,
		eventCount: 180,
	},
	{
		id: '5',
		name: 'Lisa Wang',
		image: null,
		topic: 'Entrepreneurship',
		rating: 4.8,
		eventCount: 95,
	},
	{
		id: '6',
		name: 'Dr. Robert Hayes',
		image: null,
		topic: 'Medical Innovation',
		rating: 4.9,
		eventCount: 210,
	},
];

export default function TrendingSpeakers() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerView, setItemsPerView] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setItemsPerView(1);
			} else if (window.innerWidth < 1024) {
				setItemsPerView(2);
			} else {
				setItemsPerView(3);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const maxIndex = Math.max(0, mockSpeakers.length - itemsPerView);

	const goToPrevious = () => {
		setCurrentIndex((prev) => Math.max(0, prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
	};

	return (
		<section className="bg-dark-bg-secondary/50 py-20">
			<div className="container-custom">
				<div className="mb-12 flex items-center justify-between">
					<h2 className="font-poppins text-3xl font-bold md:text-4xl">
						Trending Speakers
					</h2>

					<div className="flex items-center space-x-2">
						<button
							onClick={goToPrevious}
							disabled={currentIndex === 0}
							className="rounded-full border border-gray-800 bg-dark-bg-primary p-2 text-gray-400 transition-all duration-200 hover:border-purple-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Previous speakers"
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
						<button
							onClick={goToNext}
							disabled={currentIndex === maxIndex}
							className="rounded-full border border-gray-800 bg-dark-bg-primary p-2 text-gray-400 transition-all duration-200 hover:border-purple-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Next speakers"
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

				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-300 ease-out"
						style={{
							transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
						}}
					>
						{mockSpeakers.map((speaker) => (
							<div
								key={speaker.id}
								className="px-3"
								style={{ flex: `0 0 ${100 / itemsPerView}%` }}
							>
								<SpeakerCard speaker={speaker} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
