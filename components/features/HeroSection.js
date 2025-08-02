import SearchBar from '@/components/ui/SearchBar';

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden pb-20 pt-32">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-dark-bg-primary via-dark-bg-secondary to-dark-bg-primary opacity-50" />

			{/* Decorative elements */}
			<div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-primary/10 blur-3xl" />
			<div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-purple-primary/5 blur-3xl" />

			<div className="container-custom relative z-10">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="mb-6 animate-fade-in font-poppins text-5xl font-bold md:text-6xl lg:text-7xl">
						Find the perfect{' '}
						<span className="gradient-text">keynote speaker</span>{' '}
						for your event
					</h1>

					<p className="mb-12 animate-slide-up text-xl text-gray-300 md:text-2xl">
						Search like a human being. Describe your event needs,
						and we&apos;ll find the perfect match.
					</p>

					<SearchBar
						placeholder="Search for speakers by topic, expertise, or describe your event needs"
						className="mx-auto max-w-3xl animate-slide-up"
					/>

					<div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
						<span className="text-gray-400">Popular searches:</span>
						<button className="text-purple-primary transition-colors hover:text-purple-400">
							AI & Technology
						</button>
						<span className="text-gray-600">•</span>
						<button className="text-purple-primary transition-colors hover:text-purple-400">
							Leadership
						</button>
						<span className="text-gray-600">•</span>
						<button className="text-purple-primary transition-colors hover:text-purple-400">
							Mental Health
						</button>
						<span className="text-gray-600">•</span>
						<button className="text-purple-primary transition-colors hover:text-purple-400">
							Diversity & Inclusion
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
