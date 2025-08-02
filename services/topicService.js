/**
 * Topic Service
 * Centralized topic data, metadata, and helper functions
 */

// Comprehensive topic definitions with metadata
export const topics = [
	{
		id: 'ai-machine-learning',
		name: 'AI & Machine Learning',
		slug: 'ai-machine-learning',
		description:
			'Artificial Intelligence and Machine Learning represent the frontier of technological innovation, transforming how businesses operate and compete in the digital age. Our AI speakers are leading researchers, industry executives, and practitioners who bring deep expertise in neural networks, deep learning, computer vision, and natural language processing. They help audiences understand not just the technical capabilities of AI, but its practical business applications and ethical implications.\n\nFrom Fortune 500 companies implementing AI-driven automation to startups leveraging machine learning for competitive advantage, these speakers have hands-on experience building and scaling AI solutions. They cover topics ranging from algorithmic bias and data governance to the future of work and human-AI collaboration. Their insights help organizations navigate the complex landscape of AI adoption while addressing concerns about job displacement and ethical AI development.\n\nWhether your audience consists of technical teams, business leaders, or the general public, our AI speakers excel at making complex concepts accessible and actionable. They provide strategic frameworks for AI implementation, real-world case studies of successful deployments, and practical guidance for overcoming common challenges in AI projects.',
		category: 'Technology',
		gradient: 'from-blue-500 to-purple-600',
		icon: '🤖',
		popularKeywords: [
			'AI',
			'Machine Learning',
			'Deep Learning',
			'Neural Networks',
			'Automation',
			'Data Science',
		],
	},
	{
		id: 'leadership-strategy',
		name: 'Leadership & Strategy',
		slug: 'leadership-strategy',
		description:
			'Leadership and Strategic Management speakers bring decades of executive experience from Fortune 500 companies, successful startups, and organizational transformation initiatives. These are the CEOs, former military leaders, and management consultants who have navigated complex business challenges and led teams through periods of significant change. They understand that effective leadership goes beyond traditional management techniques to encompass emotional intelligence, cultural transformation, and strategic vision.\n\nOur leadership speakers have proven track records of building high-performance teams, driving organizational change, and delivering measurable business results. They share insights from their experiences leading mergers and acquisitions, international expansions, and digital transformations. Their presentations often include frameworks for decision-making under uncertainty, strategies for building resilient organizations, and approaches to fostering innovation and creativity within established companies.\n\nThese speakers excel at inspiring and educating audiences at all organizational levels, from emerging leaders to senior executives. They provide practical tools for improving communication, building trust, and creating cultures of accountability and excellence. Their content is highly relevant for leadership development programs, management retreats, and organizational change initiatives.',
		category: 'Business',
		gradient: 'from-orange-500 to-red-500',
		icon: '👑',
		popularKeywords: [
			'Leadership',
			'Strategy',
			'Management',
			'Team Building',
			'Organizational Change',
			'Executive Coaching',
		],
	},
	{
		id: 'healthcare-innovation',
		name: 'Healthcare Innovation',
		slug: 'healthcare-innovation',
		description:
			'Healthcare Innovation speakers are at the forefront of medical technology advancement, digital health transformation, and healthcare system reform. These include practicing physicians turned entrepreneurs, healthcare technology executives, medical researchers, and policy experts who are reshaping how we approach patient care, medical education, and health system management. They bring firsthand experience with emerging technologies like telemedicine, AI-powered diagnostics, and personalized medicine.\n\nFrom implementing electronic health records and improving patient outcomes to navigating regulatory compliance and healthcare economics, these speakers understand the complex intersection of medicine, technology, and business. They address critical topics such as healthcare accessibility, the rising cost of medical care, and the integration of digital health solutions into traditional healthcare delivery models. Many have founded successful healthcare companies or led major healthcare organizations through significant transformations.\n\nThese speakers are particularly valuable for medical conferences, healthcare executive forums, and technology companies entering the healthcare space. They provide insights into clinical workflows, patient experience design, and the regulatory landscape while offering practical guidance for healthcare innovation initiatives. Their presentations often include real-world case studies of successful healthcare technology implementations and strategies for improving patient care through innovation.',
		category: 'Healthcare',
		gradient: 'from-green-500 to-teal-600',
		icon: '🏥',
		popularKeywords: [
			'Healthcare',
			'Medical Technology',
			'Digital Health',
			'Patient Care',
			'Health Innovation',
			'Telemedicine',
		],
	},
	{
		id: 'digital-transformation',
		name: 'Digital Transformation',
		slug: 'digital-transformation',
		description:
			'Digital Transformation speakers are seasoned technology executives and consultants who have led major organizational changes in the digital age. They understand that digital transformation is not just about adopting new technologies, but about fundamentally reimagining business processes, customer experiences, and organizational cultures. These speakers have guided companies through cloud migrations, digital platform implementations, and comprehensive technology modernization initiatives worth millions of dollars.\n\nWith expertise spanning enterprise software, cloud computing, data analytics, and emerging technologies, these speakers help organizations navigate the complexities of digital change management. They address common challenges such as legacy system integration, workforce reskilling, and cultural resistance to technological change. Their presentations often include frameworks for assessing digital maturity, prioritizing technology investments, and measuring the ROI of digital initiatives.\n\nThese speakers are essential for corporate events focused on technology strategy, IT leadership conferences, and industry forums addressing digital disruption. They provide actionable roadmaps for digital transformation, share lessons learned from both successful and failed implementations, and offer insights into emerging trends that will shape the future of business technology. Their content is particularly valuable for CIOs, CTOs, and business leaders responsible for driving technological change.',
		category: 'Technology',
		gradient: 'from-purple-500 to-indigo-600',
		icon: '🔄',
		popularKeywords: [
			'Digital Transformation',
			'Cloud Computing',
			'Enterprise Technology',
			'Change Management',
			'Innovation',
			'Modernization',
		],
	},
	{
		id: 'sustainability',
		name: 'Sustainability',
		slug: 'sustainability',
		description:
			'Sustainability speakers are environmental scientists, corporate sustainability officers, and climate policy experts who bring both scientific rigor and practical business experience to discussions about environmental responsibility. They understand the urgent need for climate action while recognizing the business realities that organizations face in implementing sustainable practices. These speakers have led major sustainability initiatives at Fortune 500 companies, developed innovative environmental technologies, and influenced policy at local, national, and international levels.\n\nFrom carbon footprint reduction and renewable energy adoption to circular economy principles and sustainable supply chain management, these speakers provide comprehensive insights into environmental stewardship. They address topics such as ESG (Environmental, Social, and Governance) reporting, green financing, and the business case for sustainability investments. Many have direct experience with sustainability certifications, environmental compliance, and stakeholder engagement around climate issues.\n\nThese speakers are crucial for corporate sustainability events, environmental conferences, and industry forums focused on responsible business practices. They help organizations understand regulatory requirements, identify opportunities for operational improvements, and develop strategies for communicating sustainability efforts to stakeholders. Their presentations often include case studies of successful sustainability transformations and practical guidance for reducing environmental impact while maintaining profitability.',
		category: 'Environment',
		gradient: 'from-green-400 to-emerald-600',
		icon: '🌱',
		popularKeywords: [
			'Sustainability',
			'Climate Change',
			'Environmental Responsibility',
			'Green Technology',
			'ESG',
			'Renewable Energy',
		],
	},
	{
		id: 'entrepreneurship',
		name: 'Entrepreneurship',
		slug: 'entrepreneurship',
		description:
			'Entrepreneurship speakers are successful founders, investors, and business builders who have navigated the challenges of starting and scaling companies. They bring real-world experience from building businesses from the ground up, raising capital, and navigating the ups and downs of entrepreneurial ventures. These speakers include serial entrepreneurs who have built multiple companies, venture capitalists who have funded hundreds of startups, and corporate executives who have led intrapreneurial initiatives within large organizations.\n\nWith experience spanning various industries and business models, these speakers understand the common challenges that entrepreneurs face: from initial idea validation and product development to team building, fundraising, and scaling operations. They share insights on market research, customer acquisition, product-market fit, and the importance of persistence and adaptability in the face of setbacks. Many have experience with successful exits through acquisitions or IPOs, providing valuable perspectives on building scalable, valuable businesses.\n\nThese speakers are essential for startup events, entrepreneurship conferences, and business school programs. They inspire aspiring entrepreneurs while providing practical guidance on avoiding common pitfalls and accelerating business growth. Their presentations often include personal stories of failure and success, frameworks for evaluating business opportunities, and strategies for building sustainable competitive advantages in crowded markets.',
		category: 'Business',
		gradient: 'from-yellow-500 to-orange-600',
		icon: '🚀',
		popularKeywords: [
			'Entrepreneurship',
			'Startups',
			'Innovation',
			'Business Development',
			'Venture Capital',
			'Scaling',
		],
	},
	{
		id: 'marketing-sales',
		name: 'Marketing & Sales',
		slug: 'marketing-sales',
		description:
			'Marketing and Sales speakers are seasoned professionals who have built and led successful marketing campaigns, sales organizations, and customer acquisition strategies across various industries. They understand the evolving landscape of digital marketing, customer relationship management, and sales methodology in an increasingly complex and competitive marketplace. These speakers include CMOs from major brands, sales leaders who have built high-performing teams, and marketing entrepreneurs who have disrupted traditional approaches to customer engagement.\n\nWith expertise in areas such as brand building, content marketing, social media strategy, and sales automation, these speakers help organizations optimize their customer acquisition and retention efforts. They address topics ranging from customer persona development and market segmentation to sales funnel optimization and customer lifetime value maximization. Many have direct experience with marketing technology stacks, CRM systems, and the integration of marketing and sales operations for improved business outcomes.\n\nThese speakers are valuable for marketing conferences, sales leadership events, and business development forums. They provide actionable strategies for improving marketing ROI, building effective sales processes, and creating memorable customer experiences. Their presentations often include case studies of successful marketing campaigns, frameworks for sales team management, and insights into emerging trends in customer engagement and relationship building.',
		category: 'Business',
		gradient: 'from-pink-500 to-rose-600',
		icon: '📈',
		popularKeywords: [
			'Marketing',
			'Sales',
			'Customer Acquisition',
			'Brand Building',
			'Digital Marketing',
			'CRM',
		],
	},
	{
		id: 'finance-economics',
		name: 'Finance & Economics',
		slug: 'finance-economics',
		description:
			'Finance and Economics speakers are experienced financial professionals, economists, and business leaders who provide insights into market trends, financial strategy, and economic policy. They include former investment bankers, private equity executives, corporate CFOs, and academic economists who understand both theoretical frameworks and practical applications of financial principles. These speakers have navigated various economic cycles, financial crises, and market conditions, providing valuable perspectives on risk management, capital allocation, and economic forecasting.\n\nWith expertise spanning corporate finance, investment strategy, macroeconomic analysis, and financial technology, these speakers help organizations understand complex financial concepts and their business implications. They address topics such as capital structure optimization, mergers and acquisitions, international finance, and the impact of monetary policy on business operations. Many have direct experience with financial modeling, valuation techniques, and strategic financial planning for organizations of various sizes.\n\nThese speakers are essential for finance conferences, investment forums, and executive education programs. They provide insights into market dynamics, investment opportunities, and financial risk management strategies. Their presentations often include economic forecasts, analysis of financial market trends, and practical guidance for financial decision-making in uncertain economic environments.',
		category: 'Business',
		gradient: 'from-blue-600 to-indigo-700',
		icon: '💰',
		popularKeywords: [
			'Finance',
			'Economics',
			'Investment',
			'Financial Strategy',
			'Market Analysis',
			'Risk Management',
		],
	},
	{
		id: 'technology-trends',
		name: 'Technology Trends',
		slug: 'technology-trends',
		description:
			'Technology Trends speakers are futurists, technology analysts, and innovation experts who help organizations understand and prepare for emerging technological developments. They have deep expertise in identifying, analyzing, and predicting the trajectory of new technologies and their potential impact on business and society. These speakers include technology research analysts, innovation consultants, and executives from leading technology companies who are at the forefront of technological advancement.\n\nWith knowledge spanning emerging technologies such as quantum computing, blockchain, Internet of Things (IoT), augmented reality, and biotechnology, these speakers help audiences understand the implications of technological change. They address topics such as technology adoption cycles, innovation management, and the strategic implications of emerging technologies for different industries. Many have experience in technology commercialization, startup ecosystems, and corporate innovation programs.\n\nThese speakers are crucial for technology conferences, innovation summits, and strategic planning sessions. They provide insights into future technology trends, help organizations identify opportunities for innovation, and offer guidance on preparing for technological disruption. Their presentations often include technology roadmaps, analysis of emerging markets, and frameworks for evaluating and adopting new technologies.',
		category: 'Technology',
		gradient: 'from-cyan-500 to-blue-600',
		icon: '🔮',
		popularKeywords: [
			'Technology Trends',
			'Innovation',
			'Future Technology',
			'Emerging Tech',
			'Disruptive Innovation',
			'Tech Strategy',
		],
	},
	{
		id: 'innovation',
		name: 'Innovation',
		slug: 'innovation',
		description:
			'Innovation speakers are creative leaders, design thinkers, and transformation experts who help organizations foster cultures of innovation and implement systematic approaches to creative problem-solving. They understand that innovation is not just about generating new ideas, but about creating processes, environments, and mindsets that consistently produce valuable solutions to complex challenges. These speakers include chief innovation officers, design thinking experts, and entrepreneurs who have successfully brought innovative products and services to market.\n\nWith expertise in innovation methodologies such as design thinking, lean startup principles, and agile development, these speakers help organizations overcome barriers to innovation and establish sustainable innovation practices. They address topics such as creative problem-solving, cross-functional collaboration, rapid prototyping, and the management of innovation portfolios. Many have direct experience with innovation labs, corporate venture programs, and partnerships with startups and research institutions.\n\nThese speakers are valuable for innovation conferences, creative leadership events, and organizational development programs. They provide practical tools and frameworks for stimulating creativity, managing innovation projects, and measuring innovation outcomes. Their presentations often include case studies of breakthrough innovations, exercises in creative thinking, and strategies for building innovation capabilities within established organizations.',
		category: 'Business',
		gradient: 'from-purple-400 to-pink-600',
		icon: '💡',
		popularKeywords: [
			'Innovation',
			'Creativity',
			'Design Thinking',
			'Problem Solving',
			'Breakthrough Innovation',
			'Creative Leadership',
		],
	},
];

// Category definitions
export const categories = [
	{ id: 'technology', name: 'Technology', color: 'blue' },
	{ id: 'business', name: 'Business', color: 'orange' },
	{ id: 'healthcare', name: 'Healthcare', color: 'green' },
	{ id: 'environment', name: 'Environment', color: 'emerald' },
];

/**
 * Get all topics
 * @returns {Array} Array of all topics
 */
export function getAllTopics() {
	return topics;
}

/**
 * Get topic by slug
 * @param {string} slug - Topic slug
 * @returns {Object|null} Topic object or null if not found
 */
export function getTopicBySlug(slug) {
	return topics.find((topic) => topic.slug === slug) || null;
}

/**
 * Get topics by category
 * @param {string} categoryId - Category ID
 * @returns {Array} Array of topics in the category
 */
export function getTopicsByCategory(categoryId) {
	return topics.filter(
		(topic) => topic.category.toLowerCase() === categoryId.toLowerCase()
	);
}

/**
 * Get speaker count for a topic
 * @param {string} topicName - Topic name to match against speaker topics
 * @param {Array} speakers - Array of speaker objects
 * @returns {number} Number of speakers for this topic
 */
export function getSpeakerCountForTopic(topicName, speakers = []) {
	return speakers.filter(
		(speaker) =>
			speaker.topic &&
			speaker.topic.toLowerCase() === topicName.toLowerCase()
	).length;
}

/**
 * Get speakers for a specific topic
 * @param {string} topicName - Topic name to filter by
 * @param {Array} speakers - Array of speaker objects
 * @returns {Array} Array of speakers for this topic
 */
export function getSpeakersForTopic(topicName, speakers = []) {
	return speakers.filter(
		(speaker) =>
			speaker.topic &&
			speaker.topic.toLowerCase() === topicName.toLowerCase()
	);
}

/**
 * Search topics by keyword
 * @param {string} query - Search query
 * @returns {Array} Array of matching topics
 */
export function searchTopics(query) {
	if (!query || query.trim().length === 0) {
		return topics;
	}

	const searchTerm = query.toLowerCase().trim();

	return topics.filter((topic) => {
		return (
			topic.name.toLowerCase().includes(searchTerm) ||
			topic.description.toLowerCase().includes(searchTerm) ||
			topic.popularKeywords.some((keyword) =>
				keyword.toLowerCase().includes(searchTerm)
			)
		);
	});
}

/**
 * Get related topics based on category and keywords
 * @param {string} currentTopicSlug - Current topic slug
 * @param {number} limit - Maximum number of related topics to return
 * @returns {Array} Array of related topics
 */
export function getRelatedTopics(currentTopicSlug, limit = 3) {
	const currentTopic = getTopicBySlug(currentTopicSlug);
	if (!currentTopic) return [];

	// Get topics from the same category first
	const sameCategory = topics.filter(
		(topic) =>
			topic.slug !== currentTopicSlug &&
			topic.category === currentTopic.category
	);

	// If we need more, get topics with overlapping keywords
	const keywordMatches = topics.filter((topic) => {
		if (topic.slug === currentTopicSlug || sameCategory.includes(topic)) {
			return false;
		}

		return currentTopic.popularKeywords.some((keyword) =>
			topic.popularKeywords.includes(keyword)
		);
	});

	// Combine and limit results
	const related = [...sameCategory, ...keywordMatches].slice(0, limit);
	return related;
}

/**
 * Get topic statistics
 * @param {Array} speakers - Array of speaker objects
 * @returns {Object} Topic statistics
 */
export function getTopicStatistics(speakers = []) {
	const stats = {
		totalTopics: topics.length,
		totalCategories: categories.length,
		topicCounts: {},
		categoryDistribution: {},
	};

	// Count speakers per topic
	topics.forEach((topic) => {
		stats.topicCounts[topic.slug] = getSpeakerCountForTopic(
			topic.name,
			speakers
		);
	});

	// Count topics per category
	categories.forEach((category) => {
		stats.categoryDistribution[category.id] = getTopicsByCategory(
			category.id
		).length;
	});

	return stats;
}
