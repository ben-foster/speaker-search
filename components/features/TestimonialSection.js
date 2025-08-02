'use client';

import { useState, useEffect } from 'react';
import { getSpeakerTestimonials } from '@/services/speakerApplicationService';

export default function TestimonialSection() {
	const [testimonials, setTestimonials] = useState([]);
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	useEffect(() => {
		const speakerTestimonials = getSpeakerTestimonials();
		setTestimonials(speakerTestimonials);
	}, []);

	useEffect(() => {
		if (testimonials.length > 1) {
			const timer = setInterval(() => {
				setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
			}, 6000);

			return () => clearInterval(timer);
		}
	}, [testimonials.length]);

	if (testimonials.length === 0) return null;

	return (
		<section className="mb-20">
			<div className="text-center mb-12">
				<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
					What Speakers Say About Us
				</h2>
				<p className="mx-auto max-w-2xl text-xl text-gray-300">
					Real feedback from speakers who have grown their careers 
					through our platform.
				</p>
			</div>

			{/* Featured Testimonial */}
			<div className="card p-8 mb-12 md:p-12">
				<div className="text-center">
					{/* Quote */}
					<div className="mb-8">
						<svg className="mx-auto mb-4 h-12 w-12 text-purple-primary" fill="currentColor" viewBox="0 0 24 24">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
						</svg>
						<blockquote className="text-2xl font-medium leading-relaxed text-gray-100 md:text-3xl">
							&ldquo;{testimonials[activeTestimonial]?.quote}&rdquo;
						</blockquote>
					</div>

					{/* Speaker Info */}
					<div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-primary/20">
							<svg className="h-8 w-8 text-purple-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						
						<div className="text-center md:text-left">
							<div className="font-semibold text-white text-lg">
								{testimonials[activeTestimonial]?.name}
							</div>
							<div className="text-purple-primary font-medium">
								{testimonials[activeTestimonial]?.title}
							</div>
							<div className="text-gray-400 text-sm">
								{testimonials[activeTestimonial]?.topic} • {testimonials[activeTestimonial]?.bookings} bookings
							</div>
						</div>

						{/* Rating */}
						<div className="flex items-center space-x-1">
							{[...Array(5)].map((_, index) => (
								<svg
									key={index}
									className={`h-5 w-5 ${
										index < (testimonials[activeTestimonial]?.rating || 0)
											? 'text-yellow-400'
											: 'text-gray-600'
									}`}
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
								</svg>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Testimonial Navigation */}
			<div className="flex justify-center space-x-2 mb-12">
				{testimonials.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveTestimonial(index)}
						className={`h-3 w-3 rounded-full transition-colors ${
							index === activeTestimonial
								? 'bg-purple-primary'
								: 'bg-gray-600 hover:bg-gray-500'
						}`}
						aria-label={`View testimonial ${index + 1}`}
					/>
				))}
			</div>

			{/* All Testimonials Grid */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{testimonials.map((testimonial, index) => (
					<div 
						key={testimonial.id} 
						className={`card p-6 transition-all duration-300 ${
							index === activeTestimonial 
								? 'ring-2 ring-purple-primary border-purple-primary/50' 
								: 'hover:border-purple-primary/30'
						}`}
					>
						{/* Mini Quote */}
						<div className="mb-4">
							<svg className="mb-2 h-6 w-6 text-purple-primary" fill="currentColor" viewBox="0 0 24 24">
								<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
							</svg>
							<p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
								{testimonial.quote}
							</p>
						</div>

						{/* Speaker Details */}
						<div className="flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-primary/20">
								<svg className="h-5 w-5 text-purple-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
							<div className="flex-1">
								<div className="font-medium text-white text-sm">
									{testimonial.name}
								</div>
								<div className="text-purple-primary text-xs font-medium">
									{testimonial.topic}
								</div>
								<div className="flex items-center justify-between mt-1">
									<div className="text-gray-400 text-xs">
										{testimonial.bookings} bookings
									</div>
									<div className="flex items-center space-x-1">
										{[...Array(testimonial.rating)].map((_, starIndex) => (
											<svg
												key={starIndex}
												className="h-3 w-3 text-yellow-400"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
											</svg>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Success Metrics */}
			<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
				{[
					{
						metric: '94%',
						label: 'Speakers Report Increased Bookings',
						description: 'Within 6 months of joining our platform'
					},
					{
						metric: '3.2x',
						label: 'Average Fee Increase',
						description: 'After joining and optimizing their profiles'
					},
					{
						metric: '98%',
						label: 'Would Recommend to Others',
						description: 'Based on our annual speaker survey'
					}
				].map((stat, index) => (
					<div key={index} className="text-center">
						<div className="text-4xl font-bold text-purple-primary mb-2">
							{stat.metric}
						</div>
						<div className="font-semibold text-white mb-1">
							{stat.label}
						</div>
						<div className="text-sm text-gray-400">
							{stat.description}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}