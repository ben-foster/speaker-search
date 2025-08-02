/**
 * Resource Service
 * Centralized resource data, content, and helper functions
 */

// Comprehensive resource definitions with rich content
export const resources = [
	{
		id: 'contracts-guide',
		title: 'Event Contracts 101 Guide',
		description: 'Learn the essentials of speaker contracts and protect your event.',
		shortDescription: 'Essential guide to speaker contracts and legal protection.',
		category: 'guide',
		categoryLabel: 'Guide',
		author: 'Legal Team',
		readTime: '15 min read',
		publishDate: '2024-12-15',
		featured: true,
		downloadable: true,
		icon: (
			<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
				<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
			</svg>
		),
		color: 'purple',
		gradient: 'from-purple-500 to-indigo-600',
		image: '/resources/contracts-guide-hero.svg',
		tags: ['contracts', 'legal', 'planning', 'negotiation'],
		content: {
			introduction: 'Speaker contracts are the foundation of successful event planning. This comprehensive guide covers everything you need to know to protect your event and ensure a smooth speaker engagement process.',
			sections: [
				{
					id: 'contract-essentials',
					title: 'Contract Essentials',
					content: 'Every speaker contract should include specific elements to protect both parties and ensure clear expectations. Start with the basics: event details, speaker obligations, payment terms, and cancellation policies. Include specific dates, times, and venue information to avoid any confusion.',
					subsections: [
						{
							title: 'Key Contract Elements',
							items: [
								'Event date, time, and venue details',
								'Speaker fee and payment schedule',
								'Travel and accommodation arrangements',
								'Technical requirements and AV needs',
								'Cancellation and force majeure clauses',
								'Intellectual property rights',
								'Marketing and promotion permissions'
							]
						}
					]
				},
				{
					id: 'negotiation-tips',
					title: 'Negotiation Strategies',
					content: 'Successful contract negotiation is about finding win-win solutions. Understand what matters most to both parties and be prepared to offer alternatives. Most speakers are reasonable when approached professionally with clear expectations.',
					subsections: [
						{
							title: 'Best Practices',
							items: [
								'Research standard industry rates for similar speakers',
								'Be transparent about budget constraints early',
								'Offer value beyond monetary compensation',
								'Build in flexibility for minor schedule changes',
								'Consider multi-year agreements for recurring events'
							]
						}
					]
				},
				{
					id: 'legal-considerations',
					title: 'Legal Considerations',
					content: 'While most speaker engagements go smoothly, it\'s important to protect your organization legally. Consider liability insurance, indemnification clauses, and what happens if circumstances change.',
					subsections: [
						{
							title: 'Legal Protections',
							items: [
								'Liability and insurance requirements',
								'Force majeure and cancellation policies',
								'Indemnification clauses',
								'Governing law and dispute resolution',
								'Confidentiality and non-disclosure agreements'
							]
						}
					]
				}
			],
			actionItems: [
				'Download our speaker contract template',
				'Review your organization\'s standard terms',
				'Consult with legal counsel for high-value engagements',
				'Create a contract checklist for your team'
			],
			relatedResources: ['trends-report', 'roi-calculator']
		}
	},
	{
		id: 'trends-report',
		title: '2025 Speaker Trends Report',
		description: 'Discover what topics and speakers are trending this year.',
		shortDescription: 'Data-driven insights into 2025 speaking trends and topics.',
		category: 'report',
		categoryLabel: 'Report',
		author: 'Research Team',
		readTime: '20 min read',
		publishDate: '2024-12-01',
		featured: true,
		downloadable: true,
		icon: (
			<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
				<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
			</svg>
		),
		color: 'blue',
		gradient: 'from-blue-500 to-cyan-600',
		image: '/resources/trends-report-hero.svg',
		tags: ['trends', 'data', 'insights', '2025', 'industry'],
		content: {
			introduction: 'Based on analysis of over 10,000 speaker bookings and industry surveys, this report reveals the most significant trends shaping the speaking industry in 2025.',
			sections: [
				{
					id: 'top-topics',
					title: 'Most In-Demand Topics',
					content: 'Artificial Intelligence and digital transformation continue to dominate speaker requests, but we\'re seeing significant growth in sustainability, mental health, and leadership development topics.',
					subsections: [
						{
							title: '2025 Top 10 Topics',
							items: [
								'AI & Machine Learning (32% growth)',
								'Digital Transformation (28% growth)',
								'Leadership & Strategy (25% growth)',
								'Mental Health & Wellness (45% growth)',
								'Sustainability & ESG (38% growth)',
								'Remote Work & Hybrid Teams (22% growth)',
								'Innovation & Creativity (19% growth)',
								'Diversity & Inclusion (35% growth)',
								'Cybersecurity (29% growth)',
								'Personal Branding (24% growth)'
							]
						}
					]
				},
				{
					id: 'budget-trends',
					title: 'Speaker Fee Analysis',
					content: 'Speaker fees have stabilized after the volatility of recent years. Virtual events continue to command lower fees, while in-person and hybrid events see premium pricing.',
					subsections: [
						{
							title: 'Average Fee Ranges by Format',
							items: [
								'In-Person Keynote: $15,000 - $75,000',
								'Virtual Keynote: $8,000 - $35,000',
								'Hybrid Event: $12,000 - $55,000',
								'Workshop/Training: $5,000 - $25,000',
								'Panel Discussion: $3,000 - $15,000'
							]
						}
					]
				},
				{
					id: 'demographic-shifts',
					title: 'Speaker Demographics',
					content: 'Event planners are prioritizing diversity more than ever. We\'re seeing increased demand for speakers from underrepresented groups and international perspectives.',
					subsections: [
						{
							title: 'Demographic Preferences',
							items: [
								'Gender diversity: 65% of events now book equal gender representation',
								'Ethnic diversity: 58% increase in requests for diverse speakers',
								'Age diversity: Growing demand for both Gen Z and experienced speakers',
								'Geographic diversity: 42% increase in international speaker bookings',
								'Industry diversity: Cross-industry expertise increasingly valued'
							]
						}
					]
				}
			],
			statistics: {
				totalEvents: '10,247',
				averageBudget: '$42,500',
				topGrowthTopic: 'Mental Health & Wellness (+45%)',
				mostBookedFormat: 'In-Person Events (67%)'
			},
			actionItems: [
				'Review your 2025 event topics against trending themes',
				'Consider budget allocations based on format preferences',
				'Evaluate speaker diversity in your lineup',
				'Plan early for high-demand speakers and topics'
			],
			relatedResources: ['contracts-guide', 'roi-calculator']
		}
	},
	{
		id: 'roi-calculator',
		title: 'Event ROI Calculator',
		description: 'Calculate the return on investment for your speaker booking.',
		shortDescription: 'Interactive tool to measure and optimize event ROI.',
		category: 'tool',
		categoryLabel: 'Tool',
		author: 'Analytics Team',
		readTime: '10 min to complete',
		publishDate: '2024-11-20',
		featured: true,
		downloadable: false,
		interactive: true,
		icon: (
			<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
				<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
			</svg>
		),
		color: 'green',
		gradient: 'from-green-500 to-emerald-600',
		image: '/resources/roi-calculator-hero.svg',
		tags: ['calculator', 'roi', 'metrics', 'budget', 'planning'],
		content: {
			introduction: 'Measure the true impact of your speaker investments with our comprehensive ROI calculator. Input your event metrics and get detailed analysis of your return on investment.',
			sections: [
				{
					id: 'how-to-use',
					title: 'How to Use This Calculator',
					content: 'Our ROI calculator considers both direct and indirect benefits of your speaker investment. Input your event costs, attendance figures, and business outcomes to get a comprehensive ROI analysis.',
					subsections: [
						{
							title: 'Required Information',
							items: [
								'Total event budget and speaker fees',
								'Expected and actual attendance numbers',
								'Registration and ticket revenue',
								'Lead generation and conversion data',
								'Brand awareness and engagement metrics',
								'Long-term business impact measurements'
							]
						}
					]
				},
				{
					id: 'calculation-methodology',
					title: 'Our Calculation Method',
					content: 'We use industry-standard formulas that account for both tangible and intangible benefits. The calculator weighs immediate returns against long-term brand and relationship value.',
					subsections: [
						{
							title: 'ROI Components',
							items: [
								'Direct revenue (ticket sales, sponsorships)',
								'Lead generation value',
								'Brand awareness impact',
								'Employee engagement boost',
								'Network and partnership opportunities',
								'Content and social media value'
							]
						}
					]
				},
				{
					id: 'benchmarks',
					title: 'Industry Benchmarks',
					content: 'Compare your results against industry averages. Well-executed speaker events typically see ROI between 200-400%, with top-performing events exceeding 600%.',
					subsections: [
						{
							title: 'Typical ROI Ranges',
							items: [
								'Corporate conferences: 250-400% ROI',
								'Industry summits: 300-500% ROI',
								'Training events: 200-350% ROI',
								'Customer events: 400-600% ROI',
								'Internal team events: 150-300% ROI'
							]
						}
					]
				}
			],
			calculatorFields: [
				{
					category: 'Event Costs',
					fields: [
						{ name: 'speakerFee', label: 'Speaker Fee', type: 'currency' },
						{ name: 'venueCost', label: 'Venue Cost', type: 'currency' },
						{ name: 'marketingBudget', label: 'Marketing Budget', type: 'currency' },
						{ name: 'staffTime', label: 'Staff Time Cost', type: 'currency' },
						{ name: 'otherExpenses', label: 'Other Expenses', type: 'currency' }
					]
				},
				{
					category: 'Event Metrics',
					fields: [
						{ name: 'expectedAttendees', label: 'Expected Attendees', type: 'number' },
						{ name: 'actualAttendees', label: 'Actual Attendees', type: 'number' },
						{ name: 'ticketRevenue', label: 'Ticket Revenue', type: 'currency' },
						{ name: 'sponsorshipRevenue', label: 'Sponsorship Revenue', type: 'currency' }
					]
				},
				{
					category: 'Business Impact',
					fields: [
						{ name: 'leadsGenerated', label: 'Leads Generated', type: 'number' },
						{ name: 'avgDealValue', label: 'Average Deal Value', type: 'currency' },
						{ name: 'conversionRate', label: 'Lead Conversion Rate', type: 'percentage' },
						{ name: 'brandValueIncrease', label: 'Estimated Brand Value Increase', type: 'currency' }
					]
				}
			],
			actionItems: [
				'Input your event data to calculate ROI',
				'Compare results against industry benchmarks',
				'Identify areas for improvement in future events',
				'Download your ROI report for stakeholders'
			],
			relatedResources: ['contracts-guide', 'trends-report']
		}
	}
];

// Resource categories
export const resourceCategories = [
	{ id: 'all', name: 'All Resources', count: resources.length },
	{ id: 'guide', name: 'Guides', count: resources.filter(r => r.category === 'guide').length },
	{ id: 'report', name: 'Reports', count: resources.filter(r => r.category === 'report').length },
	{ id: 'tool', name: 'Tools', count: resources.filter(r => r.category === 'tool').length },
	{ id: 'template', name: 'Templates', count: resources.filter(r => r.category === 'template').length }
];

/**
 * Get all resources
 * @returns {Array} Array of all resources
 */
export function getAllResources() {
	return resources;
}

/**
 * Get resource by ID
 * @param {string} id - Resource ID
 * @returns {Object|null} Resource object or null if not found
 */
export function getResourceById(id) {
	return resources.find(resource => resource.id === id) || null;
}

/**
 * Get resources by category
 * @param {string} category - Category ID
 * @returns {Array} Array of resources in the category
 */
export function getResourcesByCategory(category) {
	if (category === 'all') return resources;
	return resources.filter(resource => resource.category === category);
}

/**
 * Get featured resources
 * @param {number} limit - Maximum number of resources to return
 * @returns {Array} Array of featured resources
 */
export function getFeaturedResources(limit = 3) {
	return resources.filter(resource => resource.featured).slice(0, limit);
}

/**
 * Search resources by keyword
 * @param {string} query - Search query
 * @returns {Array} Array of matching resources
 */
export function searchResources(query) {
	if (!query || query.trim().length === 0) {
		return resources;
	}

	const searchTerm = query.toLowerCase().trim();

	return resources.filter(resource => {
		return (
			resource.title.toLowerCase().includes(searchTerm) ||
			resource.description.toLowerCase().includes(searchTerm) ||
			resource.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
			resource.content.introduction.toLowerCase().includes(searchTerm)
		);
	});
}

/**
 * Get related resources based on tags and category
 * @param {string} currentResourceId - Current resource ID
 * @param {number} limit - Maximum number of related resources to return
 * @returns {Array} Array of related resources
 */
export function getRelatedResources(currentResourceId, limit = 2) {
	const currentResource = getResourceById(currentResourceId);
	if (!currentResource) return [];

	// Get resources with overlapping tags
	const tagMatches = resources.filter(resource => {
		if (resource.id === currentResourceId) return false;
		
		return currentResource.tags.some(tag =>
			resource.tags.includes(tag)
		);
	});

	// Get resources from the same category if we need more
	const categoryMatches = resources.filter(resource => {
		if (resource.id === currentResourceId || tagMatches.includes(resource)) {
			return false;
		}
		return resource.category === currentResource.category;
	});

	// Combine and limit results
	const related = [...tagMatches, ...categoryMatches].slice(0, limit);
	return related;
}

/**
 * Get resource statistics
 * @returns {Object} Resource statistics
 */
export function getResourceStatistics() {
	const stats = {
		totalResources: resources.length,
		totalCategories: resourceCategories.length - 1, // Exclude 'all'
		totalDownloads: resources.filter(r => r.downloadable).length,
		averageReadTime: Math.round(
			resources.reduce((sum, r) => {
				const time = parseInt(r.readTime.split(' ')[0]) || 0;
				return sum + time;
			}, 0) / resources.length
		)
	};

	// Count resources per category
	resourceCategories.slice(1).forEach(category => {
		stats[`${category.id}Count`] = getResourcesByCategory(category.id).length;
	});

	return stats;
}

/**
 * Calculate ROI based on input values
 * @param {Object} inputs - Calculator input values
 * @returns {Object} ROI calculation results
 */
export function calculateROI(inputs) {
	const {
		speakerFee = 0,
		venueCost = 0,
		marketingBudget = 0,
		staffTime = 0,
		otherExpenses = 0,
		ticketRevenue = 0,
		sponsorshipRevenue = 0,
		leadsGenerated = 0,
		avgDealValue = 0,
		conversionRate = 0,
		brandValueIncrease = 0
	} = inputs;

	// Calculate total costs
	const totalCosts = speakerFee + venueCost + marketingBudget + staffTime + otherExpenses;

	// Calculate direct revenue
	const directRevenue = ticketRevenue + sponsorshipRevenue;

	// Calculate lead value
	const leadValue = leadsGenerated * avgDealValue * (conversionRate / 100);

	// Calculate total revenue
	const totalRevenue = directRevenue + leadValue + brandValueIncrease;

	// Calculate ROI
	const roi = totalCosts > 0 ? ((totalRevenue - totalCosts) / totalCosts) * 100 : 0;
	const netProfit = totalRevenue - totalCosts;

	return {
		totalCosts,
		totalRevenue,
		netProfit,
		roi: Math.round(roi * 100) / 100,
		breakdown: {
			directRevenue,
			leadValue,
			brandValue: brandValueIncrease,
			costBreakdown: {
				speakerFee,
				venueCost,
				marketingBudget,
				staffTime,
				otherExpenses
			}
		},
		benchmark: roi >= 300 ? 'Excellent' : roi >= 200 ? 'Good' : roi >= 100 ? 'Average' : 'Below Average'
	};
}