export default function ApplicationSuccess({ applicationId, onBackToHome }) {
	return (
		<div className="container mx-auto px-6 pt-28 pb-16">
			<div className="mx-auto max-w-2xl text-center">
				{/* Success Icon */}
				<div className="mb-8">
					<div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20">
						<svg className="h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
				</div>

				{/* Success Message */}
				<h1 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
					Application Submitted Successfully!
				</h1>
				
				<p className="mb-8 text-xl text-gray-300">
					Thank you for applying to join our speaker platform. 
					We&apos;ve received your application and will review it carefully.
				</p>

				{/* Application ID */}
				<div className="card mb-8 p-6">
					<h2 className="mb-3 font-semibold text-purple-primary">
						Your Application ID
					</h2>
					<div className="rounded-lg bg-dark-bg-secondary p-4">
						<code className="text-lg font-mono text-white">
							{applicationId}
						</code>
					</div>
					<p className="mt-3 text-sm text-gray-400">
						Save this ID for your records. You can use it to check your application status.
					</p>
				</div>

				{/* What Happens Next */}
				<div className="card mb-8 p-8 text-left">
					<h2 className="mb-6 text-center font-poppins text-2xl font-bold">
						What Happens Next?
					</h2>
					
					<div className="space-y-6">
						{[
							{
								step: '1',
								title: 'Application Review',
								description: 'Our team will review your application within 3-5 business days. We carefully evaluate each application to maintain our platform quality.',
								timeframe: '3-5 business days'
							},
							{
								step: '2',
								title: 'Background Verification',
								description: 'We may verify your professional background, speaking experience, and references to ensure authenticity.',
								timeframe: '2-3 business days'
							},
							{
								step: '3',
								title: 'Profile Setup',
								description: 'Once approved, we\'ll help you set up your speaker profile and provide onboarding materials to get you started.',
								timeframe: '1 business day'
							},
							{
								step: '4',
								title: 'Go Live',
								description: 'Your profile goes live on our platform and event planners can start discovering and booking you for their events.',
								timeframe: 'Immediate'
							}
						].map((item, index) => (
							<div key={index} className="flex items-start space-x-4">
								<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-primary text-sm font-bold text-white">
									{item.step}
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-white mb-1">
										{item.title}
									</h3>
									<p className="text-gray-300 text-sm mb-2">
										{item.description}
									</p>
									<div className="text-xs text-purple-primary font-medium">
										Timeframe: {item.timeframe}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Contact Information */}
				<div className="card mb-8 p-6">
					<h2 className="mb-4 font-semibold text-purple-primary">
						Need Help or Have Questions?
					</h2>
					<div className="space-y-4 text-sm">
						<div className="flex items-center justify-center space-x-6">
							<a 
								href="mailto:speakers@platform.com"
								className="flex items-center space-x-2 text-gray-300 hover:text-purple-primary"
							>
								<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<span>speakers@platform.com</span>
							</a>
							<a 
								href="tel:+1-555-123-4567"
								className="flex items-center space-x-2 text-gray-300 hover:text-purple-primary"
							>
								<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								<span>+1 (555) 123-4567</span>
							</a>
						</div>
						<p className="text-gray-400">
							Our speaker support team is available Monday-Friday, 9 AM - 6 PM EST
						</p>
					</div>
				</div>

				{/* Preparation Tips */}
				<div className="card mb-8 p-6 text-left">
					<h2 className="mb-4 text-center font-semibold text-purple-primary">
						While You Wait - Preparation Tips
					</h2>
					<ul className="space-y-3 text-sm">
						{[
							'Prepare high-quality speaker photos and videos for your profile',
							'Gather testimonials from past speaking engagements',
							'Update your LinkedIn profile and professional website',
							'Create or update your speaker one-sheet or media kit',
							'Review and refine your speaking topics and key messages',
							'Consider creating sample presentation slides or demo videos'
						].map((tip, index) => (
							<li key={index} className="flex items-start space-x-3 text-gray-300">
								<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-primary" />
								{tip}
							</li>
						))}
					</ul>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<button
						onClick={onBackToHome}
						className="btn-primary inline-flex items-center"
					>
						Return to Homepage
						<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</button>
					
					<a
						href="/resources"
						className="inline-flex items-center rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
					>
						Browse Speaker Resources
						<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>

				{/* Final Message */}
				<div className="mt-8 rounded-lg bg-purple-primary/10 border border-purple-primary/20 p-6">
					<div className="flex items-center justify-center space-x-3 mb-3">
						<svg className="h-6 w-6 text-purple-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<h3 className="font-semibold text-purple-primary">
							Application Status Updates
						</h3>
					</div>
					<p className="text-sm text-gray-300">
						We&apos;ll send you email updates at key stages of the review process. 
						You can also check your application status anytime using your application ID above.
					</p>
				</div>
			</div>
		</div>
	);
}