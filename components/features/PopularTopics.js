import Link from 'next/link';

const topics = [
	{
		id: 'business',
		name: 'Business',
		image: '/topics/business.jpg',
		gradient: 'from-orange-500 to-red-500',
	},
	{
		id: 'military',
		name: 'Military',
		image: '/topics/military.jpg',
		gradient: 'from-gray-600 to-gray-800',
	},
	{
		id: 'sports',
		name: 'Sports',
		image: '/topics/sports.jpg',
		gradient: 'from-pink-500 to-rose-500',
	},
];

const topicButtons = [
	'Leadership',
	'Entertainment',
	'Social Justice',
	'Celebrities',
	'Technology',
	'Mental Health',
	'Politics',
	'Sustainability',
];

export default function PopularTopics() {
	return (
		<section className="bg-dark-bg-secondary/50 py-20">
			<div className="container-custom">
				<h2 className="mb-12 text-center font-poppins text-3xl font-bold md:text-4xl">
					Popular Speaking Topics
				</h2>

				{/* Featured Topics with Images */}
				<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					{topics.map((topic) => (
						<Link
							key={topic.id}
							href={`/topics/${topic.id}`}
							className="group relative h-64 overflow-hidden rounded-2xl"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-80`}
							/>
							<div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

							<div className="relative z-10 flex h-full items-center justify-center">
								<h3 className="font-poppins text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
									{topic.name}
								</h3>
							</div>
						</Link>
					))}
				</div>

				{/* Topic Buttons Grid */}
				<div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
					{topicButtons.map((topic) => (
						<Link
							key={topic}
							href={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
							className="rounded-full border border-gray-700 px-6 py-4 text-center transition-all duration-200 hover:border-purple-primary hover:text-purple-primary"
						>
							{topic}
						</Link>
					))}
				</div>

				{/* All Topics Button */}
				<div className="text-center">
					<Link
						href="/topics"
						className="btn-primary inline-flex items-center"
					>
						All Topics
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
					</Link>
				</div>
			</div>
		</section>
	);
}
