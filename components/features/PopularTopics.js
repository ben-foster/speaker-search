import Link from 'next/link';
import { getAllTopics, getSpeakerCountForTopic } from '@/services/topicService';
import { mockSpeakers } from '@/services/searchService';

// Get featured topics (first 3) and topic buttons (remaining topics)
const allTopics = getAllTopics();
const featuredTopics = allTopics.slice(0, 3);
const topicButtons = allTopics.slice(3).map((topic) => topic.name);

export default function PopularTopics() {
	return (
		<section className="bg-dark-bg-secondary/50 py-20">
			<div className="container-custom">
				<h2 className="mb-12 text-center font-poppins text-3xl font-bold md:text-4xl">
					Popular Speaking Topics
				</h2>

				{/* Featured Topics with Gradients */}
				<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					{featuredTopics.map((topic) => {
						const speakerCount = getSpeakerCountForTopic(
							topic.name,
							mockSpeakers
						);
						return (
							<Link
								key={topic.slug}
								href={`/topics/${topic.slug}`}
								className="group relative h-64 overflow-hidden rounded-2xl"
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-80`}
								/>
								<div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />

								<div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
									<div className="mb-2 text-4xl">
										{topic.icon}
									</div>
									<h3 className="mb-2 font-poppins text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
										{topic.name}
									</h3>
									{speakerCount > 0 && (
										<p className="text-sm text-white/80">
											{speakerCount} speakers available
										</p>
									)}
								</div>
							</Link>
						);
					})}
				</div>

				{/* Topic Buttons Grid */}
				<div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
					{topicButtons.map((topicName) => {
						const topicData = allTopics.find(
							(t) => t.name === topicName
						);
						return (
							<Link
								key={topicName}
								href={`/topics/${topicData?.slug || topicName.toLowerCase().replace(/\s+/g, '-')}`}
								className="rounded-full border border-gray-700 px-6 py-4 text-center transition-all duration-200 hover:border-purple-primary hover:text-purple-primary"
							>
								{topicName}
							</Link>
						);
					})}
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
