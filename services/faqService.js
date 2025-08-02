/**
 * FAQ Service
 * Manages frequently asked questions with search and categorization
 */

// FAQ categories and questions
export const faqCategories = [
	{ id: 'all', name: 'All Questions', icon: '❓' },
	{ id: 'event-planners', name: 'For Event Planners', icon: '📅' },
	{ id: 'speakers', name: 'For Speakers', icon: '🎤' },
	{ id: 'billing', name: 'Billing & Pricing', icon: '💰' },
	{ id: 'technical', name: 'Technical Support', icon: '🔧' },
	{ id: 'platform', name: 'Platform Features', icon: '⚡' }
];

export const faqData = [
	// Event Planners
	{
		id: 1,
		category: 'event-planners',
		question: 'How do I search for speakers on your platform?',
		answer: 'Our platform offers multiple ways to find speakers: Use our natural language search to describe your event needs (e.g., "AI expert for tech conference"), browse by topic categories, filter by budget range, location, and availability, or use our advanced filters for specific requirements. Our search algorithm matches you with speakers based on expertise, experience, and fit for your event type.',
		tags: ['search', 'finding speakers', 'platform features'],
		popular: true
	},
	{
		id: 2,
		category: 'event-planners',
		question: 'What information do I get about each speaker?',
		answer: 'Each speaker profile includes comprehensive information: Professional bio and background, speaking topics and areas of expertise, speaking experience and event history, client testimonials and ratings, speaking fees and availability, sample videos or presentation materials, contact information and booking details. We verify all speaker information to ensure accuracy and authenticity.',
		tags: ['speaker profiles', 'information', 'verification'],
		popular: true
	},
	{
		id: 3,
		category: 'event-planners',
		question: 'How does the booking process work?',
		answer: 'The booking process is straightforward: Browse and select your preferred speaker, contact them directly through our platform, negotiate terms and confirm availability, sign contracts and handle payments securely, receive ongoing support throughout the process. We provide contract templates and can assist with negotiations if needed.',
		tags: ['booking process', 'contracts', 'payments'],
		popular: true
	},
	{
		id: 4,
		category: 'event-planners',
		question: 'Do you charge event planners any fees?',
		answer: 'No, our platform is completely free for event planners. There are no search fees, booking fees, or platform charges. You only pay the speaker\'s agreed-upon fee directly. We earn revenue through a small commission from successful bookings, which is built into the speaker\'s fee structure.',
		tags: ['fees', 'pricing', 'free platform'],
		popular: true
	},
	{
		id: 5,
		category: 'event-planners',
		question: 'Can you help me find speakers within my budget?',
		answer: 'Absolutely! Use our budget filter to see speakers within your price range. Our platform includes speakers across all fee levels, from emerging experts to internationally recognized keynote speakers. We can also recommend speakers who might be flexible on pricing or suggest alternatives that fit your budget while meeting your content needs.',
		tags: ['budget', 'pricing', 'recommendations'],
		popular: false
	},
	{
		id: 6,
		category: 'event-planners',
		question: 'Do you offer speakers for virtual events?',
		answer: 'Yes! Many of our speakers are experienced with virtual and hybrid events. You can filter specifically for virtual event speakers, and each profile indicates their virtual presentation capabilities, technical setup, and experience with online platforms like Zoom, Teams, and specialized event platforms.',
		tags: ['virtual events', 'online speaking', 'hybrid events'],
		popular: false
	},

	// Speakers
	{
		id: 7,
		category: 'speakers',
		question: 'How do I apply to join the platform?',
		answer: 'Applying is easy! Visit our "For Speakers" page and complete the comprehensive application form. You\'ll need to provide: Personal and professional information, speaking experience and expertise, sample materials and testimonials, references and credentials. Our team reviews applications within 3-5 business days and maintains high standards to ensure platform quality.',
		tags: ['application', 'joining platform', 'requirements'],
		popular: true
	},
	{
		id: 8,
		category: 'speakers',
		question: 'What are the requirements to become a speaker on your platform?',
		answer: 'We look for speakers with: Relevant expertise and professional experience, proven speaking ability (not necessarily extensive), authentic credentials and background, professional presentation materials, positive references or testimonials. We welcome both experienced speakers and emerging experts who can provide value to event audiences.',
		tags: ['requirements', 'qualifications', 'criteria'],
		popular: true
	},
	{
		id: 9,
		category: 'speakers',
		question: 'Do I need to be exclusive to your platform?',
		answer: 'No exclusivity required! You can maintain all existing representation, work with other agencies, take direct bookings, and use multiple platforms simultaneously. We believe speakers should have maximum flexibility and control over their careers.',
		tags: ['exclusivity', 'representation', 'flexibility'],
		popular: true
	},
	{
		id: 10,
		category: 'speakers',
		question: 'How do I set my speaking fees?',
		answer: 'You have complete control over your fees. We provide market data and recommendations based on your experience, topic demand, and comparable speakers. You can set different rates for different event types, adjust for travel requirements, and update your fees at any time through your profile dashboard.',
		tags: ['fees', 'pricing', 'market rates'],
		popular: true
	},
	{
		id: 11,
		category: 'speakers',
		question: 'How often will I get booking inquiries?',
		answer: 'Booking frequency varies based on factors like your topics, experience level, availability, and market demand. Active speakers typically receive 2-8 inquiries per month, with higher-demand topics and experienced speakers receiving more. We optimize your profile visibility to maximize quality inquiries.',
		tags: ['bookings', 'inquiries', 'frequency'],
		popular: false
	},
	{
		id: 12,
		category: 'speakers',
		question: 'What support do you provide to speakers?',
		answer: 'We offer comprehensive support including: Profile optimization and marketing guidance, contract templates and negotiation assistance, technical support for platform use, industry insights and trend reports, networking opportunities with other speakers, dedicated account management for active speakers.',
		tags: ['support', 'assistance', 'services'],
		popular: false
	},

	// Billing & Pricing
	{
		id: 13,
		category: 'billing',
		question: 'How does pricing work on your platform?',
		answer: 'Our pricing is transparent and straightforward: Event planners use the platform for free, speakers set their own fees and keep 85-90% of their booking fee, we earn a 10-15% commission only on successful bookings, no monthly fees, subscription costs, or hidden charges. Commission rates may vary based on speaker activity level and partnership tier.',
		tags: ['pricing', 'commission', 'fees'],
		popular: true
	},
	{
		id: 14,
		category: 'billing',
		question: 'How and when do speakers get paid?',
		answer: 'Payment process is secure and reliable: Payments are processed through our secure platform, speakers typically receive payment within 7-10 days after event completion, multiple payment methods available (bank transfer, PayPal, check), detailed payment reports and tax documentation provided, international payment support for global speakers.',
		tags: ['payments', 'speaker payments', 'processing'],
		popular: true
	},
	{
		id: 15,
		category: 'billing',
		question: 'Are there any setup or monthly fees?',
		answer: 'No setup fees, monthly fees, or subscription costs for anyone. Event planners use the platform completely free. Speakers only pay our commission on successful bookings. This performance-based model ensures we\'re aligned with your success.',
		tags: ['fees', 'setup costs', 'subscription'],
		popular: false
	},
	{
		id: 16,
		category: 'billing',
		question: 'Can I get an invoice for my bookings?',
		answer: 'Yes, we provide comprehensive invoicing: Detailed invoices for all transactions, customizable invoice templates, automatic invoice generation and delivery, payment tracking and receipt management, integration with popular accounting software, tax documentation and reporting support.',
		tags: ['invoicing', 'receipts', 'accounting'],
		popular: false
	},

	// Technical Support
	{
		id: 17,
		category: 'technical',
		question: 'What browsers are supported?',
		answer: 'Our platform works on all modern browsers: Chrome (recommended), Firefox, Safari, Microsoft Edge. We recommend using the latest browser versions for the best experience. Mobile browsers on iOS and Android are fully supported with responsive design.',
		tags: ['browsers', 'compatibility', 'technical requirements'],
		popular: false
	},
	{
		id: 18,
		category: 'technical',
		question: 'Is my data secure on your platform?',
		answer: 'Security is our top priority: All data encrypted in transit and at rest, GDPR and CCPA compliant privacy practices, regular security audits and penetration testing, secure payment processing with PCI compliance, two-factor authentication available, comprehensive backup and disaster recovery systems.',
		tags: ['security', 'privacy', 'data protection'],
		popular: true
	},
	{
		id: 19,
		category: 'technical',
		question: 'How do I reset my password?',
		answer: 'Password reset is simple: Click "Forgot Password" on the login page, enter your email address, check your email for reset instructions, follow the link to create a new password, log in with your new credentials. If you don\'t receive the email, check your spam folder or contact support.',
		tags: ['password', 'account access', 'login issues'],
		popular: false
	},
	{
		id: 20,
		category: 'technical',
		question: 'Can I integrate your platform with my existing systems?',
		answer: 'Yes, we offer integration options: API access for custom integrations, webhooks for real-time notifications, calendar sync with popular platforms, CRM integration capabilities, bulk data import/export features. Contact our technical team to discuss your specific integration needs.',
		tags: ['integrations', 'API', 'technical integration'],
		popular: false
	},

	// Platform Features
	{
		id: 21,
		category: 'platform',
		question: 'What makes your platform different from others?',
		answer: 'Our key differentiators include: Unbiased, comprehensive speaker database (not limited to exclusive rosters), natural language search that understands your needs, transparent pricing with no hidden fees, direct communication between speakers and event planners, high-quality vetting process for both speakers and events, performance-based model aligned with your success.',
		tags: ['differentiators', 'unique features', 'platform benefits'],
		popular: true
	},
	{
		id: 22,
		category: 'platform',
		question: 'Do you have speakers for international events?',
		answer: 'Absolutely! Our platform includes: Speakers from over 45 countries, experience with international and multicultural audiences, virtual presentation capabilities for global reach, travel-willing speakers for in-person international events, multilingual speakers for diverse audiences, cultural sensitivity and international business expertise.',
		tags: ['international', 'global speakers', 'multicultural'],
		popular: false
	},
	{
		id: 23,
		category: 'platform',
		question: 'How do you ensure speaker quality?',
		answer: 'We maintain quality through: Comprehensive application review process, verification of credentials and experience, reference checks and testimonial validation, ongoing performance monitoring and feedback, regular profile updates and quality assessments, removal of underperforming or inactive speakers.',
		tags: ['quality', 'vetting', 'standards'],
		popular: true
	},
	{
		id: 24,
		category: 'platform',
		question: 'Can I save and compare speakers?',
		answer: 'Yes! Our platform includes: Save speakers to your favorites list, create custom lists for different events, side-by-side speaker comparison tools, notes and rating system for your evaluations, share speaker lists with team members, export speaker information for presentations.',
		tags: ['favorites', 'comparison', 'organization'],
		popular: false
	}
];

/**
 * Get all FAQ categories
 * @returns {Array} Array of FAQ categories
 */
export function getFAQCategories() {
	return faqCategories;
}

/**
 * Get FAQs by category
 * @param {string} categoryId - Category ID ('all' for all FAQs)
 * @returns {Array} Array of FAQs in the category
 */
export function getFAQsByCategory(categoryId) {
	if (categoryId === 'all') {
		return faqData;
	}
	return faqData.filter(faq => faq.category === categoryId);
}

/**
 * Get popular FAQs
 * @param {number} limit - Maximum number of FAQs to return
 * @returns {Array} Array of popular FAQs
 */
export function getPopularFAQs(limit = 8) {
	return faqData.filter(faq => faq.popular).slice(0, limit);
}

/**
 * Search FAQs by keyword
 * @param {string} query - Search query
 * @param {string} categoryId - Optional category filter
 * @returns {Array} Array of matching FAQs
 */
export function searchFAQs(query, categoryId = 'all') {
	if (!query || query.trim().length === 0) {
		return getFAQsByCategory(categoryId);
	}

	const searchTerm = query.toLowerCase().trim();
	let faqs = categoryId === 'all' ? faqData : getFAQsByCategory(categoryId);

	return faqs.filter(faq => {
		return (
			faq.question.toLowerCase().includes(searchTerm) ||
			faq.answer.toLowerCase().includes(searchTerm) ||
			faq.tags.some(tag => tag.toLowerCase().includes(searchTerm))
		);
	});
}

/**
 * Get FAQ by ID
 * @param {number} faqId - FAQ ID
 * @returns {Object|null} FAQ object or null if not found
 */
export function getFAQById(faqId) {
	return faqData.find(faq => faq.id === faqId) || null;
}

/**
 * Get related FAQs based on tags
 * @param {number} currentFaqId - Current FAQ ID
 * @param {number} limit - Maximum number of related FAQs to return
 * @returns {Array} Array of related FAQs
 */
export function getRelatedFAQs(currentFaqId, limit = 3) {
	const currentFaq = getFAQById(currentFaqId);
	if (!currentFaq) return [];

	// Find FAQs with overlapping tags
	const relatedFaqs = faqData.filter(faq => {
		if (faq.id === currentFaqId) return false;
		
		return currentFaq.tags.some(tag => 
			faq.tags.includes(tag)
		);
	});

	// Sort by number of matching tags and return limited results
	return relatedFaqs
		.sort((a, b) => {
			const aMatches = a.tags.filter(tag => currentFaq.tags.includes(tag)).length;
			const bMatches = b.tags.filter(tag => currentFaq.tags.includes(tag)).length;
			return bMatches - aMatches;
		})
		.slice(0, limit);
}

/**
 * Get FAQ statistics
 * @returns {Object} FAQ statistics
 */
export function getFAQStatistics() {
	const stats = {
		totalFAQs: faqData.length,
		totalCategories: faqCategories.length - 1, // Exclude 'all'
		popularFAQs: faqData.filter(faq => faq.popular).length,
		categoryBreakdown: {}
	};

	// Count FAQs per category
	faqCategories.slice(1).forEach(category => {
		stats.categoryBreakdown[category.id] = getFAQsByCategory(category.id).length;
	});

	return stats;
}

/**
 * Get FAQ suggestions based on user context
 * @param {string} userType - 'speaker' or 'event-planner'
 * @returns {Array} Array of suggested FAQs
 */
export function getFAQSuggestions(userType) {
	const categoryMap = {
		'speaker': 'speakers',
		'event-planner': 'event-planners'
	};

	const category = categoryMap[userType];
	if (!category) return getPopularFAQs(5);

	return getFAQsByCategory(category).filter(faq => faq.popular);
}