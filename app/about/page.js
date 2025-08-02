import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function AboutPage() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-20 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							About Speaker Search
						</h1>
						<p className="mx-auto max-w-4xl text-xl text-gray-300 md:text-2xl">
							We&apos;re democratizing the speaker booking industry by creating 
							the world&apos;s most comprehensive, unbiased platform that connects 
							event planners directly with speaking experts.
						</p>
					</div>

					{/* Mission Statement */}
					<div className="card mb-20 p-8 md:p-12">
						<div className="text-center mb-8">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Our Mission
							</h2>
						</div>
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
							<div>
								<p className="text-lg leading-relaxed text-gray-300 mb-6">
									The traditional speaker booking industry is broken. It&apos;s dominated by 
									exclusive agencies that limit choice, inflate prices, and create barriers 
									between speakers and event planners.
								</p>
								<p className="text-lg leading-relaxed text-gray-300 mb-6">
									We believe every event deserves access to the perfect speaker, and every 
									qualified speaker deserves equal opportunity to share their expertise. 
									That&apos;s why we built the first truly open, transparent marketplace for 
									professional speaking.
								</p>
								<p className="text-lg leading-relaxed text-gray-300">
									Our platform empowers event planners with comprehensive choice and 
									transparent pricing, while giving speakers the freedom to build their 
									careers without exclusive constraints.
								</p>
							</div>
							<div className="grid grid-cols-2 gap-6">
								{[
									{ metric: '2,500+', label: 'Expert Speakers' },
									{ metric: '15,000+', label: 'Successful Events' },
									{ metric: '8,500+', label: 'Event Planners' },
									{ metric: '96%', label: 'Satisfaction Rate' }
								].map((stat, index) => (
									<div key={index} className="text-center">
										<div className="text-3xl font-bold text-purple-primary mb-2">
											{stat.metric}
										</div>
										<div className="text-gray-400 text-sm">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Values */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Our Values
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								These principles guide everything we do, from product development 
								to customer relationships.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
									),
									title: 'Transparency',
									description: 'We believe in open, honest communication. Our pricing is transparent, our processes are clear, and our data is accurate and verified.',
									color: 'purple'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									),
									title: 'Inclusivity',
									description: 'We actively promote diversity in speaking opportunities and work to amplify underrepresented voices in professional speaking.',
									color: 'green'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									),
									title: 'Innovation',
									description: 'We continuously push the boundaries of what&apos;s possible in speaker discovery, using AI and data science to improve matching.',
									color: 'blue'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									),
									title: 'Community',
									description: 'We foster a supportive community where speakers and event planners help each other succeed and grow professionally.',
									color: 'yellow'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									),
									title: 'Quality',
									description: 'We maintain high standards through careful vetting, ongoing monitoring, and continuous feedback to ensure exceptional experiences.',
									color: 'indigo'
								},
								{
									icon: (
										<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
										</svg>
									),
									title: 'Freedom',
									description: 'We believe speakers should have complete control over their careers, pricing, and professional relationships without exclusivity constraints.',
									color: 'pink'
								}
							].map((value, index) => (
								<div key={index} className="card p-8 text-center group hover:scale-105 transition-all duration-300">
									<div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
										value.color === 'purple' ? 'bg-purple-primary/20 text-purple-primary group-hover:bg-purple-primary group-hover:text-white' :
										value.color === 'green' ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white' :
										value.color === 'blue' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' :
										value.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white' :
										value.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' :
										'bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white'
									}`}>
										{value.icon}
									</div>
									<h3 className="mb-4 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
										{value.title}
									</h3>
									<p className="text-gray-400 leading-relaxed">
										{value.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Team Section */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
								Leadership Team
							</h2>
							<p className="mx-auto max-w-2xl text-xl text-gray-300">
								Meet the experienced professionals building the future of speaker booking.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									name: 'Sarah Martinez',
									title: 'CEO & Co-Founder',
									bio: 'Former VP of Events at Fortune 500 companies, Sarah brings 15 years of event planning experience and a passion for democratizing speaker access.',
									image: '/team/sarah-martinez.svg',
									social: {
										linkedin: 'https://linkedin.com/in/sarahmartinez',
										twitter: 'https://twitter.com/sarahmartinez'
									}
								},
								{
									name: 'David Chen',
									title: 'CTO & Co-Founder',
									bio: 'Technology leader with 12 years at Google and Microsoft, David leads our engineering team and AI-powered speaker matching technology.',
									image: '/team/david-chen.svg',
									social: {
										linkedin: 'https://linkedin.com/in/davidchen',
										github: 'https://github.com/davidchen'
									}
								},
								{
									name: 'Maria Rodriguez',
									title: 'VP of Speaker Success',
									bio: 'Professional speaking coach and former agency director, Maria ensures our speakers have the support and resources they need to thrive.',
									image: '/team/maria-rodriguez.svg',
									social: {
										linkedin: 'https://linkedin.com/in/mariarodriguez'
									}
								},
								{
									name: 'Alex Johnson',
									title: 'VP of Product',
									bio: 'Product visionary with experience at Airbnb and Uber, Alex drives our platform evolution and user experience innovation.',
									image: '/team/alex-johnson.svg',
									social: {
										linkedin: 'https://linkedin.com/in/alexjohnson',
										twitter: 'https://twitter.com/alexjohnson'
									}
								},
								{
									name: 'Dr. Jennifer Kim',
									title: 'Head of Data Science',
									bio: 'PhD in Machine Learning from Stanford, Jennifer leads our AI research and speaker-event matching algorithms.',
									image: '/team/jennifer-kim.svg',
									social: {
										linkedin: 'https://linkedin.com/in/jenniferkim'
									}
								},
								{
									name: 'Michael Thompson',
									title: 'VP of Business Development',
									bio: 'Former partnerships executive at LinkedIn, Michael builds strategic relationships with enterprise clients and industry partners.',
									image: '/team/michael-thompson.svg',
									social: {
										linkedin: 'https://linkedin.com/in/michaelthompson'
									}
								}
							].map((member, index) => (
								<div key={index} className="card p-8 text-center group hover:scale-105 transition-all duration-300">
									<div className="mb-6 flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-purple-primary/20">
										<svg className="h-12 w-12 text-purple-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<h3 className="mb-2 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
										{member.name}
									</h3>
									<div className="mb-4 text-purple-primary font-medium">
										{member.title}
									</div>
									<p className="text-gray-400 text-sm leading-relaxed mb-4">
										{member.bio}
									</p>
									<div className="flex justify-center space-x-3">
										{Object.entries(member.social).map(([platform, url]) => (
											<a
												key={platform}
												href={url}
												className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-purple-primary/20 hover:text-purple-primary"
												aria-label={`${member.name} on ${platform}`}
											>
												<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
													{platform === 'linkedin' && (
														<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
													)}
													{platform === 'twitter' && (
														<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
													)}
													{platform === 'github' && (
														<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
													)}
												</svg>
											</a>
										))}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Company Story */}
					<section className="mb-20">
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
							<div>
								<h2 className="mb-6 font-poppins text-3xl font-bold md:text-4xl">
									Our Story
								</h2>
								<div className="prose prose-invert max-w-none">
									<p className="text-lg leading-relaxed text-gray-300 mb-6">
										Speaker Search was born from frustration. As an event planner at a Fortune 500 
										company, our CEO Sarah Martinez repeatedly encountered the same problems: limited 
										speaker choices from exclusive agencies, inflated prices, and difficulty finding 
										diverse voices for events.
									</p>
									<p className="text-lg leading-relaxed text-gray-300 mb-6">
										In 2019, Sarah partnered with CTO David Chen to build a better solution. They 
										envisioned a platform that would give event planners access to the world&apos;s 
										best speakers while providing speakers complete freedom to control their careers.
									</p>
									<p className="text-lg leading-relaxed text-gray-300 mb-6">
										What started as a simple directory has evolved into the industry&apos;s most 
										comprehensive speaker platform, powered by AI matching technology and trusted 
										by thousands of speakers and event planners worldwide.
									</p>
									<p className="text-lg leading-relaxed text-gray-300">
										Today, we&apos;re proud to be the fastest-growing speaker platform, processing 
										over $50 million in bookings annually while maintaining our core mission of 
										democratizing access to speaking opportunities.
									</p>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-6">
								{[
									{ year: '2019', milestone: 'Company Founded' },
									{ year: '2020', milestone: 'First 100 Speakers' },
									{ year: '2021', milestone: 'AI Matching Launch' },
									{ year: '2022', milestone: '1,000 Speakers' },
									{ year: '2023', milestone: '10,000 Events' },
									{ year: '2024', milestone: 'Global Expansion' }
								].map((item, index) => (
									<div key={index} className="card p-6 text-center">
										<div className="text-2xl font-bold text-purple-primary mb-2">
											{item.year}
										</div>
										<div className="text-sm text-gray-300">
											{item.milestone}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Call to Action */}
					<div className="card p-8 text-center md:p-12">
						<h2 className="mb-4 font-poppins text-2xl font-bold md:text-3xl">
							Join Our Mission
						</h2>
						<p className="mb-6 text-gray-300">
							Whether you&apos;re an event planner seeking the perfect speaker or 
							a speaker ready to share your expertise, we&apos;d love to have you 
							as part of our community.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<a
								href="/search"
								className="btn-primary inline-flex items-center"
							>
								Find Speakers
								<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</a>
							<a
								href="/speakers"
								className="inline-flex items-center rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary"
							>
								Become a Speaker
								<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}