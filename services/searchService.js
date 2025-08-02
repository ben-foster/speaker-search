/**
 * Speaker Search Service
 * Handles all API interactions for speaker search functionality
 */

// API base URL - should be set via environment variable in production
const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

/**
 * Search speakers with filters
 * @param {Object} filters - Search filters
 * @param {number} filters.budget - Maximum budget
 * @param {string[]} filters.topics - Array of topic filters
 * @param {string} filters.query - Search query
 * @param {number} filters.page - Page number (1-based)
 * @param {number} filters.limit - Number of results per page
 * @returns {Promise<Object>} Search results with speakers and pagination info
 */
export async function searchSpeakers({
	budget,
	topics = [],
	query = '',
	page = 1,
	limit = 12,
}) {
	try {
		const params = new URLSearchParams();

		// Add filters to query parameters
		if (budget) {
			params.append('maxBudget', budget.toString());
		}
		if (topics.length > 0) {
			params.append('topics', topics.join(','));
		}
		if (query) {
			params.append('q', query);
		}
		params.append('page', page.toString());
		params.append('limit', limit.toString());

		const response = await fetch(
			`${API_BASE_URL}/speakers/search?${params}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					// Add any required auth headers here
					// 'Authorization': `Bearer ${token}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		return {
			speakers: data.speakers || [],
			totalCount: data.totalCount || 0,
			totalPages: data.totalPages || 0,
			currentPage: data.currentPage || page,
			hasNextPage: data.hasNextPage || false,
			hasPreviousPage: data.hasPreviousPage || false,
		};
	} catch (error) {
		console.error('Error searching speakers:', error);
		throw new Error('Failed to search speakers. Please try again.');
	}
}

/**
 * Get speaker details by ID
 * @param {string|number} speakerId - Speaker ID
 * @returns {Promise<Object>} Speaker details
 */
export async function getSpeakerById(speakerId) {
	try {
		const response = await fetch(`${API_BASE_URL}/speakers/${speakerId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const speaker = await response.json();
		return speaker;
	} catch (error) {
		console.error('Error fetching speaker:', error);
		throw new Error('Failed to fetch speaker details. Please try again.');
	}
}

/**
 * Get trending speakers
 * @param {number} limit - Number of speakers to return
 * @returns {Promise<Array>} Array of trending speakers
 */
export async function getTrendingSpeakers(limit = 6) {
	try {
		const response = await fetch(
			`${API_BASE_URL}/speakers/trending?limit=${limit}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const speakers = await response.json();
		return speakers;
	} catch (error) {
		console.error('Error fetching trending speakers:', error);
		throw new Error('Failed to fetch trending speakers. Please try again.');
	}
}

/**
 * Get popular topics
 * @returns {Promise<Array>} Array of popular topics
 */
export async function getPopularTopics() {
	try {
		const response = await fetch(`${API_BASE_URL}/topics/popular`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const topics = await response.json();
		return topics;
	} catch (error) {
		console.error('Error fetching popular topics:', error);
		// Return fallback topics on error
		return [
			'AI & Machine Learning',
			'Leadership & Strategy',
			'Digital Transformation',
			'Innovation',
			'Sustainability',
			'Entrepreneurship',
		];
	}
}

/**
 * Get speaker recommendations based on criteria
 * @param {Object} criteria - Recommendation criteria
 * @param {string[]} criteria.topics - Preferred topics
 * @param {number} criteria.budget - Budget range
 * @param {number} limit - Number of recommendations
 * @returns {Promise<Array>} Array of recommended speakers
 */
export async function getRecommendedSpeakers(criteria, limit = 4) {
	try {
		const params = new URLSearchParams();

		if (criteria.topics?.length > 0) {
			params.append('topics', criteria.topics.join(','));
		}
		if (criteria.budget) {
			params.append('budget', criteria.budget.toString());
		}
		params.append('limit', limit.toString());

		const response = await fetch(
			`${API_BASE_URL}/speakers/recommendations?${params}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const speakers = await response.json();
		return speakers;
	} catch (error) {
		console.error('Error fetching recommendations:', error);
		throw new Error(
			'Failed to fetch speaker recommendations. Please try again.'
		);
	}
}

/**
 * Request speaker availability
 * @param {Object} request - Availability request
 * @param {string|number} request.speakerId - Speaker ID
 * @param {string} request.eventDate - Event date (ISO string)
 * @param {string} request.eventLocation - Event location
 * @param {string} request.contactEmail - Contact email
 * @param {string} request.message - Additional message
 * @returns {Promise<Object>} Request confirmation
 */
export async function requestSpeakerAvailability(request) {
	try {
		const response = await fetch(`${API_BASE_URL}/speakers/availability`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(request),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error requesting availability:', error);
		throw new Error(
			'Failed to submit availability request. Please try again.'
		);
	}
}

/**
 * Mock data for development - remove when connecting to real API
 */
export const mockSpeakers = [
	{
		id: 1,
		name: 'Dr. Sarah Chen',
		image: '/speaker-placeholder.svg',
		topic: 'AI & Machine Learning',
		rating: 4.9,
		eventCount: 150,
		fee: 45000,
		bio: 'Dr. Sarah Chen is a leading AI researcher and former Google executive with over 15 years of experience in machine learning and data science. She currently serves as Chief AI Officer at a Fortune 500 technology company, where she spearheads the development of cutting-edge artificial intelligence solutions that transform how businesses operate and serve their customers.\n\nThroughout her distinguished career, Dr. Chen has published over 50 peer-reviewed papers in top-tier journals and holds 12 patents in machine learning algorithms. At Google, she led the team that developed breakthrough natural language processing models, and her work has been instrumental in advancing the field of computer vision. She has successfully guided multiple AI initiatives from research concepts to production systems serving millions of users worldwide.\n\nAs a speaker, Dr. Chen has a remarkable ability to demystify complex AI concepts for diverse audiences, from technical teams to C-suite executives. Her presentations combine deep technical expertise with real-world case studies, inspiring organizations to embrace AI transformation while addressing ethical considerations. Attendees consistently praise her for making AI accessible and actionable, leaving them equipped with both strategic vision and practical implementation strategies.',
		availability: 'Available',
		location: 'San Francisco, CA',
	},
	{
		id: 2,
		name: 'Marcus Rodriguez',
		image: '/speaker-placeholder.svg',
		topic: 'Leadership & Strategy',
		rating: 4.8,
		eventCount: 200,
		fee: 35000,
		bio: 'Marcus Rodriguez is a seasoned Fortune 500 CEO and leadership expert who has spent over two decades transforming organizations through strategic innovation and visionary leadership. Currently serving as CEO of a global consulting firm, he has a proven track record of turning around struggling companies and scaling successful enterprises across diverse industries, from technology startups to established manufacturing giants.\n\nDuring his tenure as CEO of three different Fortune 500 companies, Marcus has orchestrated remarkable business transformations, including a $2.8 billion turnaround that saved over 15,000 jobs and increased shareholder value by 340%. His innovative leadership approaches have been featured in Harvard Business Review, and he serves on the boards of several nonprofit organizations focused on leadership development. Marcus holds an MBA from Wharton and has been recognized with numerous awards, including "CEO of the Year" by Industry Week.\n\nAs a keynote speaker, Marcus brings unparalleled energy and authenticity to the stage, sharing real-world leadership lessons with humor, vulnerability, and actionable insights. His presentations are renowned for inspiring immediate behavioral change in leaders at all levels. Audiences appreciate his direct, no-nonsense approach combined with genuine care for developing the next generation of leaders, making complex leadership principles accessible and immediately applicable.',
		availability: 'Limited',
		location: 'New York, NY',
	},
	{
		id: 3,
		name: 'Dr. Emily Watson',
		image: '/speaker-placeholder.svg',
		topic: 'Healthcare Innovation',
		rating: 4.9,
		eventCount: 120,
		fee: 55000,
		bio: 'Dr. Emily Watson is a pioneering healthcare researcher and entrepreneur who has dedicated her career to driving digital transformation in medical technology. As the founder and CEO of MedTech Innovations, she leads a company that has developed groundbreaking digital health solutions used by over 500 hospitals worldwide. With an MD from Johns Hopkins and a PhD in Biomedical Engineering from MIT, she uniquely bridges the gap between clinical practice and technological innovation.\n\nDr. Watson\'s research has resulted in 15 FDA-approved medical devices and software platforms that have improved patient outcomes for millions of people globally. Her work in AI-powered diagnostic tools has been published in Nature Medicine and The Lancet, and she holds over 25 patents in healthcare technology. She has raised $200 million in venture capital and successfully led her company through two major acquisitions. Her contributions to healthcare have earned her recognition as one of Time Magazine\'s "100 Most Influential People in Healthcare Innovation."\n\nOn stage, Dr. Watson combines her deep medical expertise with entrepreneurial insights to deliver compelling presentations that inspire healthcare professionals to embrace technological change. She has a gift for translating complex medical and technical concepts into actionable strategies that healthcare leaders can implement immediately. Audiences are consistently moved by her passion for improving patient care and her practical approach to navigating the challenges of healthcare innovation in a rapidly evolving digital landscape.',
		availability: 'Available',
		location: 'Boston, MA',
	},
	{
		id: 4,
		name: 'James Mitchell',
		image: '/speaker-placeholder.svg',
		topic: 'Digital Transformation',
		rating: 4.7,
		eventCount: 180,
		fee: 42000,
		bio: 'James Mitchell is a renowned digital transformation consultant who has spent the past 18 years helping enterprises navigate the complex intersection of technology and business strategy. As Senior Partner at Global Digital Advisory and former Chief Technology Officer at two Fortune 100 companies, he has led digital transformation initiatives worth over $1.5 billion, touching every aspect of business operations from customer experience to supply chain optimization.\n\nJames has successfully guided more than 200 organizations through major technology transformations, including cloud migrations, AI implementations, and comprehensive digital platform overhauls. His methodical approach to change management has resulted in an average ROI increase of 250% for his clients. He is the author of the bestselling book "The Digital Enterprise" and his transformation frameworks are taught in MBA programs at leading business schools. James holds certifications from Amazon Web Services, Microsoft Azure, and Google Cloud, and regularly contributes to Harvard Business Review and MIT Sloan Management Review.\n\nKnown for his pragmatic and engaging speaking style, James excels at breaking down complex digital concepts into clear, actionable roadmaps that executives can implement immediately. His presentations blend strategic thinking with tactical execution, always focusing on the human side of technological change. Audiences value his honest assessment of digital transformation challenges and his proven methodologies for overcoming resistance to change, making him one of the most sought-after speakers on digital strategy and organizational transformation.',
		availability: 'Available',
		location: 'Austin, TX',
	},
	{
		id: 5,
		name: 'Prof. Lisa Park',
		image: '/speaker-placeholder.svg',
		topic: 'Sustainability',
		rating: 4.8,
		eventCount: 95,
		fee: 38000,
		bio: 'Professor Lisa Park is a distinguished environmental scientist and sustainability advocate who has dedicated her career to developing innovative climate solutions for Fortune 500 companies and government organizations. Currently serving as Director of the Climate Solutions Institute at Stanford University, she leads interdisciplinary research teams that have developed breakthrough technologies in renewable energy, carbon capture, and sustainable manufacturing processes. Her work bridges the gap between academic research and practical business applications.\n\nDr. Park has authored over 80 peer-reviewed publications on climate science and sustainability, and her research has directly influenced environmental policies in 12 countries. She has secured over $50 million in research funding and has collaborated with major corporations including Apple, Tesla, and Unilever to implement sustainable practices that have collectively reduced carbon emissions by over 2 million tons annually. Her expertise spans renewable energy systems, circular economy principles, and ESG strategy development. She holds a PhD in Environmental Engineering from MIT and serves on the UN Climate Council advisory board.\n\nAs a speaker, Professor Park combines rigorous scientific expertise with passionate advocacy, creating presentations that both educate and inspire action on climate change. Her ability to translate complex environmental data into compelling business cases has made her a favorite among corporate executives and policymakers alike. Audiences are moved by her genuine commitment to environmental stewardship and her practical, optimistic approach to solving climate challenges, leaving events with clear action plans and renewed motivation to drive sustainable change in their organizations.',
		availability: 'Available',
		location: 'Seattle, WA',
	},
	{
		id: 6,
		name: 'David Thompson',
		image: '/speaker-placeholder.svg',
		topic: 'Entrepreneurship',
		rating: 4.6,
		eventCount: 160,
		fee: 30000,
		bio: "David Thompson is a serial entrepreneur and startup mentor who has built and sold multiple successful tech companies over the past 20 years. As the founder of four different startups, including two unicorn companies, he has experienced the full spectrum of entrepreneurial challenges from ideation to IPO. Currently serving as Managing Partner at Venture Catalyst Fund, David has invested in over 100 early-stage companies and mentors the next generation of entrepreneurs through his role at the Stanford Entrepreneurship Program.\n\nDavid's entrepreneurial journey includes founding CloudTech Solutions, which he sold to Microsoft for $850 million, and DataVision Analytics, acquired by Salesforce for $1.2 billion. His companies have created over 5,000 jobs and generated more than $3 billion in combined revenue. Beyond his own ventures, David has served as an advisor to 50+ startups, with a portfolio success rate of 78% - significantly higher than the industry average. He holds an MBA from Stanford Graduate School of Business and has been featured on the cover of Forbes, Entrepreneur Magazine, and Inc. Magazine.\n\nAs a keynote speaker, David brings authenticity and hard-earned wisdom to every presentation, sharing both his spectacular successes and instructive failures with equal candor. His storytelling ability captivates audiences while delivering practical, actionable advice that entrepreneurs can implement immediately. Known for his approachable style and genuine desire to help others succeed, David creates an interactive environment where attendees feel inspired to take risks, embrace failure as learning, and pursue their entrepreneurial dreams with confidence and strategic thinking.",
		availability: 'Limited',
		location: 'Los Angeles, CA',
	},
];

/**
 * Get speaker count for a topic
 * @param {string} topicName - Topic name to match against speaker topics
 * @param {Array} speakers - Array of speaker objects
 * @returns {number} Number of speakers for this topic
 */
export function getSpeakerCountForTopic(topicName, speakers = mockSpeakers) {
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
export function getSpeakersForTopic(topicName, speakers = mockSpeakers) {
	return speakers.filter(
		(speaker) =>
			speaker.topic &&
			speaker.topic.toLowerCase() === topicName.toLowerCase()
	);
}

/**
 * Development helper - simulates API delay
 * @param {number} ms - Delay in milliseconds
 * @returns {Promise} Promise that resolves after delay
 */
export const simulateApiDelay = (ms = 300) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
