import Link from 'next/link';

const resources = [
	{
		id: 'contracts-guide',
		title: 'Event Contracts 101 Guide',
		description:
			'Learn the essentials of speaker contracts and protect your event.',
		icon: (
			<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
				<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
			</svg>
		),
		color: 'purple',
	},
	{
		id: 'trends-report',
		title: '2025 Speaker Trends Report',
		description:
			'Discover what topics and speakers are trending this year.',
		icon: (
			<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
				<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
			</svg>
		),
		color: 'blue',
	},
	{
		id: 'roi-calculator',
		title: 'Event ROI Calculator',
		description:
			'Calculate the return on investment for your speaker booking.',
		icon: (
			<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
				<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
			</svg>
		),
		color: 'green',
	},
];

export default function ResourcesSection() {
	return (
		<section className="py-20">
			<div className="container-custom">
				<div className="mb-12 text-center">
					<h2 className="mb-4 font-poppins text-3xl font-bold md:text-4xl">
						What you need to know to book with confidence
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-300">
						Access free resources and tools to help you make
						informed decisions
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{resources.map((resource) => (
						<Link
							key={resource.id}
							href={`/resources/${resource.id}`}
							className="group"
						>
							<div className="card h-full p-8 transition-all duration-300 hover:border-purple-primary/50">
								<div
									className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
										resource.color === 'purple'
											? 'bg-purple-primary/20 text-purple-primary'
											: resource.color === 'blue'
												? 'bg-blue-500/20 text-blue-400'
												: 'bg-green-500/20 text-green-400'
									}`}
								>
									{resource.icon}
								</div>

								<h3 className="mb-3 font-poppins text-xl font-semibold transition-colors group-hover:text-purple-primary">
									{resource.title}
								</h3>

								<p className="text-gray-400">
									{resource.description}
								</p>

								<div className="mt-4 flex items-center text-purple-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<span className="text-sm font-medium">
										Learn more
									</span>
									<svg
										className="ml-1 h-4 w-4"
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
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
