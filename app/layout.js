import './globals.css';

export const metadata = {
	title: 'Speaker Search - Find the Perfect Keynote Speaker',
	description:
		'The most comprehensive speaker database with natural language search. Find and book the perfect speaker for your event.',
	keywords:
		'keynote speakers, event speakers, conference speakers, motivational speakers',
	openGraph: {
		title: 'Speaker Search - Find the Perfect Keynote Speaker',
		description:
			'The most comprehensive speaker database with natural language search.',
		type: 'website',
		locale: 'en_US',
		siteName: 'Speaker Search',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Speaker Search - Find the Perfect Keynote Speaker',
		description:
			'The most comprehensive speaker database with natural language search.',
	},
	robots: 'index, follow',
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="antialiased">{children}</body>
		</html>
	);
}
