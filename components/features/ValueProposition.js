export default function ValueProposition() {
	return (
		<section className="mb-20">
			<div className="text-center mb-12">
				<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
					Why Choose Our Platform?
				</h2>
				<p className="mx-auto max-w-2xl text-xl text-gray-300">
					We&apos;re not an agency. We&apos;re a marketplace that connects you 
					directly with event planners who need your expertise.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{[
					{
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
							</svg>
						),
						title: 'No Exclusivity Required',
						description: 'Keep all your existing representation and client relationships. Work with multiple agencies or direct clients.',
						color: 'purple'
					},
					{
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						),
						title: 'Quality Event Planners',
						description: 'All event planners are vetted professionals from legitimate organizations with real budgets for speakers.',
						color: 'green'
					},
					{
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
							</svg>
						),
						title: 'You Set Your Fees',
						description: 'Complete control over your speaking fees. We provide market data to help you price competitively.',
						color: 'blue'
					},
					{
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						),
						title: 'Direct Bookings',
						description: 'Event planners contact you directly. No middleman delays or filtered communication.',
						color: 'yellow'
					},
					{
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						),
						title: 'Professional Support',
						description: 'Contract assistance, marketing support, and dedicated account management for active speakers.',
						color: 'indigo'
					},
					{
						icon: (
							<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						),
						title: 'Global Reach',
						description: 'Access events worldwide, from local conferences to international summits and virtual presentations.',
						color: 'pink'
					}
				].map((benefit, index) => (
					<div key={index} className="card group p-8 transition-all duration-300 hover:scale-105">
						<div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
							benefit.color === 'purple' ? 'bg-purple-primary/20 text-purple-primary group-hover:bg-purple-primary group-hover:text-white' :
							benefit.color === 'green' ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white' :
							benefit.color === 'blue' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' :
							benefit.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white' :
							benefit.color === 'indigo' ? 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' :
							'bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white'
						}`}>
							{benefit.icon}
						</div>

						<h3 className="mb-4 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
							{benefit.title}
						</h3>

						<p className="text-gray-400 leading-relaxed">
							{benefit.description}
						</p>
					</div>
				))}
			</div>

			{/* Comparison Section */}
			<div className="mt-16">
				<div className="text-center mb-8">
					<h3 className="font-poppins text-2xl font-bold mb-2">
						Traditional Agencies vs. Our Platform
					</h3>
					<p className="text-gray-300">
						See the difference for yourself
					</p>
				</div>

				<div className="overflow-hidden rounded-lg border border-gray-700">
					<div className="grid grid-cols-1 md:grid-cols-3">
						{/* Traditional Agency */}
						<div className="bg-dark-bg-secondary p-6 border-b border-gray-700 md:border-b-0 md:border-r">
							<h4 className="font-semibold text-red-400 mb-4 text-center">
								Traditional Agencies
							</h4>
							<ul className="space-y-3 text-sm">
								{[
									'Exclusive representation required',
									'Agency controls your pricing',
									'Filtered communication with clients',
									'High commission rates (20-30%)',
									'Limited event types',
									'Lengthy approval processes'
								].map((item, index) => (
									<li key={index} className="flex items-start text-gray-400">
										<span className="mr-3 mt-1 h-4 w-4 text-red-400">✗</span>
										{item}
									</li>
								))}
							</ul>
						</div>

						{/* Our Platform */}
						<div className="bg-purple-primary/5 p-6 border-b border-gray-700 md:border-b-0 md:border-r border-purple-primary/20">
							<h4 className="font-semibold text-purple-primary mb-4 text-center">
								Our Platform
							</h4>
							<ul className="space-y-3 text-sm">
								{[
									'No exclusivity requirements',
									'You control your speaking fees',
									'Direct client communication',
									'Low commission (10-15%)',
									'All event types welcome',
									'Fast 3-5 day approval'
								].map((item, index) => (
									<li key={index} className="flex items-start text-gray-300">
										<span className="mr-3 mt-1 h-4 w-4 text-green-400">✓</span>
										{item}
									</li>
								))}
							</ul>
						</div>

						{/* Independent Booking */}
						<div className="bg-dark-bg-secondary p-6">
							<h4 className="font-semibold text-yellow-400 mb-4 text-center">
								Independent Booking
							</h4>
							<ul className="space-y-3 text-sm">
								{[
									'Must find your own leads',
									'No marketing support',
									'Handle all negotiations',
									'No commission (0%)',
									'Limited event discovery',
									'No professional backup'
								].map((item, index) => (
									<li key={index} className="flex items-start text-gray-400">
										<span className="mr-3 mt-1 h-4 w-4 text-yellow-400">~</span>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}