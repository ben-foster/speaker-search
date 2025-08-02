'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import SpeakerApplicationForm from '@/components/features/SpeakerApplicationForm';
import ValueProposition from '@/components/features/ValueProposition';
import PlatformStatistics from '@/components/features/PlatformStatistics';
import TestimonialSection from '@/components/features/TestimonialSection';
import ApplicationSuccess from '@/components/features/ApplicationSuccess';
import { loadFormProgress } from '@/services/speakerApplicationService';

export default function SpeakersPage() {
	const [showApplicationForm, setShowApplicationForm] = useState(false);
	const [applicationSubmitted, setApplicationSubmitted] = useState(false);
	const [applicationId, setApplicationId] = useState(null);
	const [hasSavedProgress, setHasSavedProgress] = useState(false);

	useEffect(() => {
		// Check for saved form progress
		const savedProgress = loadFormProgress();
		if (savedProgress) {
			setHasSavedProgress(true);
		}
	}, []);

	const handleStartApplication = () => {
		setShowApplicationForm(true);
	};

	const handleApplicationSuccess = (appId) => {
		setApplicationId(appId);
		setApplicationSubmitted(true);
		setShowApplicationForm(false);
	};

	const handleBackToHome = () => {
		setShowApplicationForm(false);
		setApplicationSubmitted(false);
		setApplicationId(null);
	};

	const handleContinueApplication = () => {
		setShowApplicationForm(true);
	};

	if (applicationSubmitted) {
		return (
			<>
				<Header />
				<main className="min-h-screen bg-dark-bg-primary text-white">
					<ApplicationSuccess
						applicationId={applicationId}
						onBackToHome={handleBackToHome}
					/>
				</main>
				<Footer />
			</>
		);
	}

	if (showApplicationForm) {
		return (
			<>
				<Header />
				<main className="min-h-screen bg-dark-bg-primary text-white">
					<SpeakerApplicationForm
						onSuccess={handleApplicationSuccess}
						onCancel={handleBackToHome}
					/>
				</main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Join the World&apos;s Most 
							<span className="gradient-text"> Trusted Speaker</span> Platform
						</h1>
						<p className="mx-auto mb-8 max-w-4xl text-xl text-gray-300 md:text-2xl">
							Connect with serious event planners who value your expertise. 
							No exclusive agencies, no hidden fees. Just direct access to 
							quality speaking opportunities that match your profile.
						</p>
						
						{/* CTA Buttons */}
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<button
								onClick={handleStartApplication}
								className="btn-primary inline-flex items-center text-lg"
							>
								Apply to Join Platform
								<svg
									className="ml-2 h-5 w-5"
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
							
							{hasSavedProgress && (
								<button
									onClick={handleContinueApplication}
									className="inline-flex items-center rounded-lg border border-purple-primary px-8 py-3 font-medium text-purple-primary transition-colors hover:bg-purple-primary hover:text-white"
								>
									Continue Application
									<svg
										className="ml-2 h-5 w-5"
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
							)}
						</div>

						<p className="mt-4 text-sm text-gray-400">
							✓ Free to join  ✓ No exclusivity requirements  ✓ Keep your existing representation
						</p>
					</div>

					{/* Value Proposition */}
					<ValueProposition />

					{/* Platform Statistics */}
					<PlatformStatistics />

					{/* How It Works */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								How It Works
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Simple, transparent process from application to booking
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
							{[
								{
									step: '01',
									title: 'Submit Application',
									description: 'Complete our comprehensive application with your speaking experience, expertise, and professional background.',
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									)
								},
								{
									step: '02',
									title: 'Review & Approval',
									description: 'Our team reviews your application within 3-5 business days. We maintain high standards to ensure quality.',
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									)
								},
								{
									step: '03',
									title: 'Start Getting Booked',
									description: 'Once approved, your profile goes live and event planners can discover and book you for their events.',
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									)
								}
							].map((item, index) => (
								<div key={index} className="card p-8 text-center">
									<div className="mb-6 flex items-center justify-center">
										<div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-primary/20 text-purple-primary">
											{item.icon}
										</div>
										<div className="text-4xl font-bold text-gray-600">
											{item.step}
										</div>
									</div>
									<h3 className="mb-4 font-poppins text-xl font-semibold">
										{item.title}
									</h3>
									<p className="text-gray-400">
										{item.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Speaker Testimonials */}
					<TestimonialSection />

					{/* FAQ Section */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Frequently Asked Questions
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Common questions from speakers considering joining our platform
							</p>
						</div>

						<div className="mx-auto max-w-4xl">
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								{[
									{
										question: 'Is there a cost to join?',
										answer: 'No, joining our platform is completely free. We only succeed when you do, taking a small commission only from successful bookings.'
									},
									{
										question: 'Do I need to be exclusive?',
										answer: 'Absolutely not. You can maintain all your existing representation and client relationships. We believe in giving speakers maximum flexibility.'
									},
									{
										question: 'What types of events are on the platform?',
										answer: 'We work with corporate conferences, industry summits, universities, non-profits, and government events. All events are vetted for professionalism.'
									},
									{
										question: 'How do you determine speaking fees?',
										answer: 'You set your own fees. We provide market data to help you price competitively, but the final decision is always yours.'
									},
									{
										question: 'What support do you provide?',
										answer: 'We offer contract assistance, marketing support, technical help, and dedicated account management for active speakers.'
									},
									{
										question: 'How long does approval take?',
										answer: 'Most applications are reviewed within 3-5 business days. We maintain high standards to ensure a quality speaker network.'
									}
								].map((faq, index) => (
									<div key={index} className="card p-6">
										<h3 className="mb-3 font-semibold text-purple-primary">
											{faq.question}
										</h3>
										<p className="text-gray-300">
											{faq.answer}
										</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Final CTA */}
					<div className="card p-8 text-center md:p-12">
						<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
							Ready to Expand Your Speaking Career?
						</h2>
						<p className="mb-6 text-gray-300">
							Join thousands of speakers who trust our platform to connect 
							them with quality speaking opportunities worldwide.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<button
								onClick={handleStartApplication}
								className="btn-primary inline-flex items-center text-lg"
							>
								Start Your Application
								<svg
									className="ml-2 h-5 w-5"
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
							<a
								href="mailto:speakers@platform.com"
								className="inline-flex items-center rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
							>
								Have Questions? Contact Us
							</a>
						</div>
						<p className="mt-4 text-sm text-gray-400">
							No hidden fees • No exclusivity • Professional support
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}