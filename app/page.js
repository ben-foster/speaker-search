import Header from '@/components/layouts/Header';
import HeroSection from '@/components/features/HeroSection';
import TrendingSpeakers from '@/components/features/TrendingSpeakers';
import BudgetWidget from '@/components/features/BudgetWidget';
import PopularTopics from '@/components/features/PopularTopics';
import ResourcesSection from '@/components/features/ResourcesSection';
import Footer from '@/components/layouts/Footer';

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<TrendingSpeakers />
				<BudgetWidget />
				<PopularTopics />
				<ResourcesSection />
			</main>
			<Footer />
		</>
	);
}
