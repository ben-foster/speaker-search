'use client';

import { useState, useEffect } from 'react';
import { getPlatformStatistics } from '@/services/speakerApplicationService';

export default function PlatformStatistics() {
	const [stats, setStats] = useState({});
	const [visibleStats, setVisibleStats] = useState({});

	useEffect(() => {
		const platformStats = getPlatformStatistics();
		setStats(platformStats);
		
		// Animate stats on load
		const timer = setTimeout(() => {
			setVisibleStats(platformStats);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	const mainStats = [
		{
			key: 'totalSpeakers',
			label: 'Expert Speakers',
			value: stats.totalSpeakers,
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			),
			color: 'purple'
		},
		{
			key: 'totalEvents',
			label: 'Successful Events',
			value: stats.totalEvents,
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			),
			color: 'blue'
		},
		{
			key: 'totalPlanners',
			label: 'Event Planners',
			value: stats.totalPlanners,
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
				</svg>
			),
			color: 'green'
		},
		{
			key: 'averageBookingValue',
			label: 'Average Booking',
			value: stats.averageBookingValue,
			icon: (
				<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
				</svg>
			),
			color: 'yellow'
		}
	];

	const additionalStats = [
		{
			key: 'customerSatisfaction',
			label: 'Customer Satisfaction',
			value: stats.customerSatisfaction,
			description: 'Based on post-event surveys'
		},
		{
			key: 'responseTime',
			label: 'Average Response Time',
			value: stats.responseTime,
			description: 'For speaker inquiries'
		},
		{
			key: 'approvalRate',
			label: 'Application Approval Rate',
			value: stats.approvalRate,
			description: 'We maintain quality standards'
		}
	];

	return (
		<section className="mb-20">
			<div className="text-center mb-12">
				<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
					Platform by the Numbers
				</h2>
				<p className="mx-auto max-w-2xl text-xl text-gray-300">
					Join a thriving community of speakers and event planners 
					who trust our platform for quality connections.
				</p>
			</div>

			{/* Main Statistics */}
			<div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
				{mainStats.map((stat, _index) => (
					<div key={stat.key} className="card p-8 text-center group hover:scale-105 transition-all duration-300">
						<div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
							stat.color === 'purple' ? 'bg-purple-primary/20 text-purple-primary group-hover:bg-purple-primary group-hover:text-white' :
							stat.color === 'blue' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' :
							stat.color === 'green' ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white' :
							'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white'
						}`}>
							{stat.icon}
						</div>
						<div className="text-3xl font-bold text-white mb-2 transition-colors group-hover:text-purple-primary">
							{visibleStats[stat.key] || '0'}
						</div>
						<div className="text-gray-400 font-medium">
							{stat.label}
						</div>
					</div>
				))}
			</div>

			{/* Additional Statistics */}
			<div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
				{additionalStats.map((stat, _index) => (
					<div key={stat.key} className="card p-6 text-center">
						<div className="text-2xl font-bold text-purple-primary mb-1">
							{visibleStats[stat.key] || '0'}
						</div>
						<div className="font-medium text-white mb-2">
							{stat.label}
						</div>
						<div className="text-sm text-gray-400">
							{stat.description}
						</div>
					</div>
				))}
			</div>

			{/* Top Categories */}
			<div className="card p-8">
				<div className="text-center mb-8">
					<h3 className="font-poppins text-2xl font-bold mb-2">
						Most Popular Speaking Categories
					</h3>
					<p className="text-gray-300">
						High-demand topics where speakers see the most bookings
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
					{(stats.topCategories || []).map((category, index) => (
						<div key={index} className="relative">
							<div className="flex items-center justify-between p-4 rounded-lg bg-dark-bg-secondary border border-gray-700 hover:border-purple-primary/50 transition-colors">
								<div className="flex items-center space-x-3">
									<div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-primary/20 text-purple-primary text-sm font-bold">
										{index + 1}
									</div>
									<span className="font-medium text-white">
										{category}
									</span>
								</div>
								<div className="h-2 w-16 rounded-full bg-gray-700 overflow-hidden">
									<div 
										className="h-full bg-gradient-to-r from-purple-primary to-blue-500 transition-all duration-1000 ease-out"
										style={{ width: `${100 - (index * 15)}%` }}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Success Metrics */}
			<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
				{[
					{
						title: 'Quality First',
						description: 'We carefully vet all speakers and event planners to ensure professional, high-quality connections.',
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						)
					},
					{
						title: 'Global Reach',
						description: 'Speakers on our platform work with organizations across 45+ countries and all major industries.',
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						)
					},
					{
						title: 'Continuous Growth',
						description: 'Our platform grows by 25% annually, with new speakers and event planners joining every week.',
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
							</svg>
						)
					}
				].map((metric, index) => (
					<div key={index} className="text-center">
						<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-primary/20 text-purple-primary">
							{metric.icon}
						</div>
						<h3 className="mb-3 font-poppins text-xl font-semibold">
							{metric.title}
						</h3>
						<p className="text-gray-400 leading-relaxed">
							{metric.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}