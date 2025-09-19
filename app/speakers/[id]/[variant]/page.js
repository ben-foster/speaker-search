'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { mockSpeakers } from '@/services/searchService';
import Variant1 from '@/components/features/speaker-variants/Variant1';
import Variant2 from '@/components/features/speaker-variants/Variant2';
import VariantSwitcher from '@/components/features/speaker-variants/VariantSwitcher';

// Mock additional speaker data that would come from API
const getExtendedSpeakerData = (id) => {
	const speaker = mockSpeakers.find((s) => s.id === parseInt(id));
	if (!speaker) return null;

	return {
		...speaker,
		// Jerry Rice specific data for accurate representation
		name: 'Jerry Rice',
		title: 'Hall of Fame Wide Receiver, 3x Super Bowl Champion, NFL Records Holder',
		topic: 'Sports Motivation',
		location: 'San Francisco, CA',
		fee: 75000, // Mid-point of $50k-$100k range
		feeRange: '$50,000 - $100,000',
		rating: 4.9,
		eventCount: 250,
		tagline:
			'Pairs legendary NFL achievements with a warm, engaging style that audiences love. He shares stories of perseverance, teamwork, and leadership that leave people inspired and motivated.',

		// Media items for the top gallery (using actual Jerry Rice images)
		mediaItems: [
			// Main featured image (left 1/3)
			{
				type: 'image',
				url: '/jerry-rice/jerry-rice-primary.jpg',
				title: 'Jerry Rice - Hall of Fame Wide Receiver',
			},
			// Secondary images (top row)
			{
				type: 'image',
				url: '/jerry-rice/jerry-rice-secondary-1.jpeg',
				title: 'Jerry Rice - NFL Action Shot',
			},
			{
				type: 'video',
				thumbnail: '/jerry-rice/jerry-rice-secondary-2.webp',
				url: 'https://www.youtube.com/embed/uzOYs4QI-QA?autoplay=1&mute=1&rel=0',
				title: 'Jerry Rice - Speaking Highlights',
			},
			{
				type: 'image',
				url: '/jerry-rice/jerry-rice-secondary-3.png',
				title: 'Jerry Rice - Conference Presentation',
			},
			// Secondary images (bottom row)
			{
				type: 'image',
				url: '/jerry-rice/jerry-rice-secondary-4.webp',
				title: 'Jerry Rice - Leadership Talk',
			},
			{
				type: 'image',
				url: '/jerry-rice/jerry-rice-secondary-5.jpg',
				title: 'Jerry Rice - Corporate Event',
			},
			{
				type: 'image',
				url: '/jerry-rice/jerry-rice-secondary-6.jpeg',
				title: 'Jerry Rice - Awards Ceremony',
			},
		],

		// Main speaker image
		image: '/jerry-rice/jerry-rice-primary.jpg',

		// Biography content
		bioHighlights: [
			{
				icon: '🏆',
				text: 'Widely regarded as the greatest wide receiver of all time',
			},
			{
				icon: '🥇',
				text: 'Three-time Super Bowl champion and Hall of Fame inductee (2010)',
			},
			{
				icon: '📊',
				text: 'Holds 36 NFL records, including most receptions, yards, and touchdowns',
			},
			{
				icon: '📺',
				text: 'Featured on ESPN, NBC, and Dancing with the Stars',
			},
			{
				icon: '📚',
				text: 'Bestselling author and philanthropist, Honorary Chairman of the 49ers Foundation',
			},
		],
		bioFull: `Hall of Fame wide receiver and three-time Super Bowl champion Jerry Rice is widely regarded as the best wide receiver to ever play in the National Football League, and arguably the greatest player of all time.

During his 15-year career with the San Francisco 49ers, Rice won three Super Bowls (Super Bowl XXIII ('88), Super Bowl XXIV ('89) and SB XXIX ('94)) and one Super Bowl MVP. He enjoyed three seasons with the Oakland Raiders, including a Super Bowl appearance, and one season with the Seattle Seahawks before retiring in 2005.

Throughout his 20-year NFL career, Rice's dedication to preparation and work ethic became legendary. He holds 36 NFL records – a record in itself. He has scored the most touchdowns in NFL history (208) and holds virtually every significant career receiving record.`,

		// Speech topics with detailed descriptions
		speechTopics: [
			{
				title: 'The Greatest of All Time on Winning and Excellence',
				takeaways: [
					'🏆 Commitment & discipline',
					'🎯 Goal-setting & achievement',
					'💡 Turning obstacles into opportunities',
					'🤝 Values that drive strong teams & organizations',
				],
			},
			{
				title: 'Championship Mindset: From Field to Boardroom',
				takeaways: [
					'🧠 Mental preparation techniques',
					'⚡ Peak performance strategies',
					'🎯 Focus under pressure',
					'🏆 Building winning cultures',
				],
			},
		],

		// Media coverage
		mediaCoverage: [
			{
				outlet: 'ESPN',
				title: "Jerry Rice on Kobe Bryant's Legacy",
				description:
					'Reflecting on greatness alongside other NFL stars',
				logo: '/jerry-rice/espn-icon.png',
			},
			{
				outlet: 'NBC Sports',
				title: 'Jerry Rice Reflects on Super Bowl XXIII',
				description:
					'Sharing memories from his iconic championship performance',
				logo: '/jerry-rice/nbc-icon.png',
			},
			{
				outlet: 'Sports Illustrated',
				title: 'What Jerry Rice Is Really Like',
				description:
					"A profile capturing Rice's legendary drive and character",
				logo: '/jerry-rice/si-icon.png',
			},
			{
				outlet: 'Sports Illustrated',
				title: 'Jerry Rice on HBCUs: "We Have Always Proven Ourselves"',
				description:
					'Discussing the impact and value of historically Black colleges',
				logo: '/jerry-rice/si-icon.png',
			},
			{
				outlet: 'NBC Bay Area',
				title: 'Learning From the Great Dwight Clark',
				description:
					'A heartfelt interview about mentorship and legacy',
				logo: '/jerry-rice/nbc-bay-area-icon.png',
			},
		],

		// Books
		books: [
			{
				title: 'Go Long!: My Journey Beyond the Game and the Fame',
				year: '2007',
				description:
					'In "Go Long!" Jerry Rice shares the inspirational lessons and empowering practices that have helped him attain success, both on the football field and off.',
				image: '/jerry-rice/Books 1.png',
			},
			{
				title: '50 Years, 50 Moments: The Most Unforgettable Plays in Super Bowl',
				year: '2015',
				description:
					"New York Times bestseller 50 Years, 50 Moments celebrates five decades' worth of memories, insights, and personal experiences of Super Sunday.",
				image: '/jerry-rice/Books 2.png',
			},
			{
				title: "America's Game: The NFL at 100",
				year: '2019',
				description:
					'The authors celebrate the first 100 years of the National Football League, interweaving history, personal stories, memories, and observations.',
				image: '/jerry-rice/Books 3.png',
			},
		],

		// FAQs
		faqs: [
			{
				question:
					'How do I book Jerry Rice to speak or perform at my event?',
				answer: "You can book Jerry Rice by clicking the \"Let's get started\" button and filling out our booking form. We'll connect you with Jerry's representatives.",
			},
			{
				question:
					'Can I book Jerry Rice directly through Speaker Search?',
				answer: 'Speaker Search is a marketplace that connects you with speaker representatives. We facilitate the connection but bookings are handled through official representatives.',
			},
			{
				question: 'How much does it cost to book Jerry Rice?',
				answer: "Jerry Rice's speaking fee ranges from $50,000 - $100,000. Final fees depend on event details, location, and specific requirements.",
			},
			{
				question:
					'What happens after I submit a booking request for Jerry Rice?',
				answer: "After submitting your request, our team will review your requirements and connect you with Jerry's official representatives within 24 hours.",
			},
			{
				question: 'What can Jerry Rice talk about at my event?',
				answer: 'Jerry can speak on leadership, excellence, teamwork, overcoming obstacles, goal achievement, and peak performance based on his Hall of Fame career.',
			},
			{
				question: 'How can I contact Jerry Rice?',
				answer: "All booking inquiries should go through our platform to ensure you're connected with Jerry's official representatives.",
			},
			{
				question: 'Where does Jerry Rice travel from?',
				answer: 'Jerry Rice is based in San Francisco, CA, but travels worldwide for speaking engagements.',
			},
		],

		// Tags
		tags: [
			'athlete',
			'black heritage',
			'football',
			'golf',
			'sports motivation',
			'hall of fame',
		],

		// Featured lists
		featuredLists: [
			'🥇 Top sports motivational speakers',
			'🏈 Football speakers and NFL Players',
			'🎙 Sports journalism and broadcasting speakers',
		],

		// Representation
		representation: 'Creative Artists Agency | CAA',

		testimonials: [
			{
				quote: "Jerry's keynote left our team motivated, energized, and ready to tackle challenges — a Hall of Famer on the stage and off.",
				author: 'Mel Azulay',
				company: 'ASML',
				rating: 5,
			},
			{
				quote: 'An incredible speaker who brought real-world insights and championship mentality to our conference.',
				author: 'Sarah Johnson',
				company: 'TechCorp',
				rating: 5,
			},
			{
				quote: "Jerry's message on perseverance and excellence resonated with our entire organization.",
				author: 'Mike Chen',
				company: 'Global Industries',
				rating: 5,
			},
		],
		socialMedia: {
			linkedin: 'https://linkedin.com/in/jerryrice',
			twitter: 'https://twitter.com/jerryrice',
			website: 'https://jerryrice.com',
		},
		videoUrl: 'https://www.youtube.com/embed/uzOYs4QI-QA?rel=0',
		languages: ['English'],
		travelPreference: 'Worldwide',
		lastUpdated: 'July 2025',
		updatedBy: 'Bob Evans',
	};
};

export default function SpeakerVariantPage() {
	const params = useParams();
	const router = useRouter();
	const [speaker, setSpeaker] = useState(null);
	const [loading, setLoading] = useState(true);
	const variant = parseInt(params.variant);

	useEffect(() => {
		// Validate variant number
		if (!variant || variant < 1 || variant > 5) {
			router.push(`/speakers/${params.id}`);
			return;
		}

		// Simulate API call
		const fetchSpeaker = async () => {
			setLoading(true);
			// Simulate delay
			await new Promise((resolve) => setTimeout(resolve, 500));

			const speakerData = getExtendedSpeakerData(params.id);
			if (!speakerData) {
				router.push('/404');
				return;
			}

			setSpeaker(speakerData);
			setLoading(false);
		};

		fetchSpeaker();
	}, [params.id, variant, router]);

	if (loading) {
		return (
			<>
				<Header />
				<main className="min-h-screen bg-dark-bg-primary text-white">
					<div className="container mx-auto px-6 pb-16 pt-28">
						<div className="animate-pulse">
							<div className="mb-6 h-6 w-64 rounded bg-gray-700" />
							<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
								<div className="lg:col-span-1">
									<div className="h-96 w-full rounded-2xl bg-gray-700" />
								</div>
								<div className="lg:col-span-2">
									<div className="space-y-4">
										<div className="h-12 w-3/4 rounded bg-gray-700" />
										<div className="h-6 w-1/2 rounded bg-gray-700" />
										<div className="h-32 w-full rounded bg-gray-700" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	if (!speaker) {
		return null;
	}

	const renderVariant = () => {
		switch (variant) {
			case 1:
				return <Variant1 speaker={speaker} />;
			case 2:
				return <Variant2 speaker={speaker} />;
			default:
				return null;
		}
	};

	return (
		<>
			<Header />
			<VariantSwitcher currentVariant={variant} speakerId={params.id} />
			{renderVariant()}
			<Footer />
		</>
	);
}
