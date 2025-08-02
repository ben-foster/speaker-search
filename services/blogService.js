/**
 * Blog Service
 * Manages blog posts, categories, and content
 */

// Blog categories
export const blogCategories = [
	{ id: 'all', name: 'All Posts', icon: '📚' },
	{ id: 'speaking-tips', name: 'Speaking Tips', icon: '🎤' },
	{ id: 'event-planning', name: 'Event Planning', icon: '📅' },
	{ id: 'industry-trends', name: 'Industry Trends', icon: '📈' },
	{ id: 'success-stories', name: 'Success Stories', icon: '⭐' },
	{ id: 'platform-updates', name: 'Platform Updates', icon: '🚀' }
];

// Blog authors
export const blogAuthors = [
	{
		id: 'sarah-johnson',
		name: 'Sarah Johnson',
		title: 'Head of Content',
		bio: 'Sarah has over 10 years of experience in event planning and speaker management. She leads our content strategy and shares insights from the industry.',
		avatar: '/authors/sarah-johnson.svg',
		social: {
			linkedin: 'https://linkedin.com/in/sarahjohnson',
			twitter: 'https://twitter.com/sarahjohnson'
		}
	},
	{
		id: 'mike-chen',
		name: 'Mike Chen',
		title: 'Senior Event Strategist',
		bio: 'Mike specializes in corporate event strategy and has helped organize over 500 successful events. He brings practical insights from the field.',
		avatar: '/authors/mike-chen.svg',
		social: {
			linkedin: 'https://linkedin.com/in/mikechen'
		}
	},
	{
		id: 'emily-rodriguez',
		name: 'Emily Rodriguez',
		title: 'Speaking Coach',
		bio: 'Emily is a professional speaking coach who has worked with hundreds of speakers to improve their presentation skills and career growth.',
		avatar: '/authors/emily-rodriguez.svg',
		social: {
			linkedin: 'https://linkedin.com/in/emilyrodriguez',
			twitter: 'https://twitter.com/emilyrodriguez'
		}
	},
	{
		id: 'platform-team',
		name: 'Platform Team',
		title: 'Product & Engineering',
		bio: 'Updates and insights from our product and engineering teams about new features, improvements, and platform developments.',
		avatar: '/authors/platform-team.svg',
		social: {}
	}
];

// Sample blog posts
export const blogPosts = [
	{
		id: 1,
		title: 'The Complete Guide to Virtual Speaking in 2025',
		slug: 'complete-guide-virtual-speaking-2025',
		excerpt: 'Master the art of virtual presentations with our comprehensive guide covering technology, engagement techniques, and best practices for online events.',
		content: `Virtual speaking has evolved dramatically since 2020, and 2025 brings new opportunities and challenges for speakers and event planners alike. This comprehensive guide covers everything you need to know about delivering impactful virtual presentations.

## The Current State of Virtual Events

Virtual events are no longer a temporary solution—they're a permanent fixture in the event landscape. Our platform data shows that 67% of events now include a virtual component, whether fully online or hybrid format.

### Technology Requirements

**Essential Equipment:**
- High-quality webcam (1080p minimum)
- Professional lighting setup
- Reliable internet connection (minimum 50 Mbps upload)
- Wireless microphone or headset
- Backup power source

**Software Considerations:**
- Platform familiarity (Zoom, Teams, custom event platforms)
- Presentation software optimization
- Screen sharing best practices
- Interactive polling and Q&A tools

## Engagement Strategies

Virtual audiences require different engagement techniques than in-person events:

### Pre-Event Preparation
- Send welcome materials 24-48 hours in advance
- Include technical setup instructions
- Provide agenda and interaction guidelines
- Test all technology with event organizers

### During the Presentation
- Use interactive polls every 10-15 minutes
- Encourage chat participation
- Implement breakout sessions for larger groups
- Share screen strategically to maintain visual interest

### Post-Event Follow-up
- Send presentation materials within 2 hours
- Include contact information and resources
- Offer one-on-one follow-up sessions
- Gather feedback for continuous improvement

## Pricing Considerations

Virtual speaking fees typically range from 50-80% of in-person rates, depending on:
- Production complexity
- Audience size and engagement level
- Recording and usage rights
- Follow-up materials and support

## Best Practices for Success

1. **Create a Professional Setup**: Invest in proper lighting and audio equipment
2. **Practice Platform Navigation**: Become fluent with the event technology
3. **Prepare for Technical Issues**: Have backup plans and support contacts
4. **Engage Early and Often**: Start building connection before your presentation
5. **Follow Up Promptly**: Capitalize on virtual networking opportunities

The future of speaking includes virtual components, and mastering these skills will set you apart in the competitive speaking market.`,
		category: 'speaking-tips',
		author: 'emily-rodriguez',
		publishedAt: '2024-12-15T10:00:00Z',
		updatedAt: '2024-12-15T10:00:00Z',
		readTime: 8,
		featured: true,
		tags: ['virtual speaking', 'online events', 'presentation skills', 'technology'],
		image: '/blog/virtual-speaking-guide.svg',
		status: 'published',
		views: 2547,
		likes: 89
	},
	{
		id: 2,
		title: 'How to Budget for Speakers: A Complete Event Planning Guide',
		slug: 'how-to-budget-speakers-event-planning-guide',
		excerpt: 'Learn how to effectively budget for speakers, understand pricing factors, and maximize your event ROI with strategic speaker investments.',
		content: `Budgeting for speakers is one of the most critical decisions in event planning. This guide helps you understand speaker pricing, budget allocation, and ROI optimization strategies.

## Understanding Speaker Fees

Speaker fees vary widely based on several factors:

### Experience and Expertise
- Emerging experts: $5,000 - $15,000
- Established professionals: $15,000 - $50,000
- Celebrity speakers: $50,000+
- Industry legends: $100,000+

### Event Type Impact
- Corporate conferences: Premium pricing
- Non-profit events: Often discounted rates
- Virtual events: 50-80% of in-person fees
- International events: Additional travel considerations

### Topic Demand
High-demand topics command premium fees:
- Artificial Intelligence & Technology
- Leadership & Strategy
- Digital Transformation
- Mental Health & Wellness

## Budget Allocation Strategy

**Total Event Budget Breakdown:**
- Speakers: 30-40% of total budget
- Venue & Catering: 40-50%
- Marketing & Production: 10-15%
- Miscellaneous: 5-10%

### Speaker Budget Distribution
- Keynote speakers: 60-70% of speaker budget
- Breakout speakers: 20-30%
- Panel moderators: 5-10%
- Contingency: 5% buffer

## Cost-Saving Strategies

1. **Book Early**: Secure better rates with advance booking
2. **Local Speakers**: Reduce travel costs with regional experts
3. **Multi-Event Deals**: Negotiate packages for multiple appearances
4. **Off-Peak Timing**: Avoid peak conference seasons
5. **Hybrid Options**: Combine in-person and virtual speakers

## ROI Measurement

Track these metrics to measure speaker investment success:
- Attendance rates and engagement levels
- Post-event satisfaction scores
- Lead generation and business impact
- Social media reach and brand awareness
- Long-term relationship building

## Negotiation Best Practices

**Preparation Tips:**
- Research comparable speaker fees
- Understand your event's value proposition
- Prepare alternative compensation options
- Know your maximum budget limits

**Negotiation Strategies:**
- Emphasize audience quality over quantity
- Offer additional value (recordings, marketing)
- Be transparent about budget constraints
- Maintain professional relationships

**Contract Considerations:**
- Cancellation policies and force majeure
- Travel and accommodation arrangements
- Recording and usage rights
- Payment terms and schedules

## Working with Speaker Platforms

Platforms like ours provide several budgeting advantages:
- Transparent pricing information
- Direct negotiation capabilities
- Verified speaker credentials
- Streamlined booking processes
- Contract support and templates

## Budget Planning Timeline

**6-12 Months Before:**
- Set overall event budget
- Identify key speaking slots
- Begin speaker research

**4-6 Months Before:**
- Finalize speaker selections
- Complete contract negotiations
- Confirm travel arrangements

**2-4 Months Before:**
- Final budget reconciliation
- Backup speaker identification
- Payment schedule execution

Remember: investing in the right speakers creates lasting value that extends far beyond your event date. Quality speakers drive attendance, enhance your brand, and generate ongoing business opportunities.`,
		category: 'event-planning',
		author: 'mike-chen',
		publishedAt: '2024-12-10T14:30:00Z',
		updatedAt: '2024-12-10T14:30:00Z',
		readTime: 12,
		featured: true,
		tags: ['event planning', 'budgeting', 'speaker fees', 'ROI'],
		image: '/blog/speaker-budgeting-guide.svg',
		status: 'published',
		views: 1823,
		likes: 67
	},
	{
		id: 3,
		title: 'Top 10 Speaking Topics That Will Dominate 2025',
		slug: 'top-speaking-topics-2025',
		excerpt: 'Discover the most in-demand speaking topics for 2025, backed by industry data and booking trends from our platform.',
		content: `Based on analysis of over 15,000 speaker bookings and industry surveys, here are the speaking topics that will define 2025.

## 1. Artificial Intelligence & Automation

AI continues to dominate speaking requests with 32% growth year-over-year. Focus areas include:
- Practical AI implementation for businesses
- Ethical AI and responsible development
- AI's impact on workforce and jobs
- AI in specific industries (healthcare, finance, education)

**Average Fee Range:** $25,000 - $75,000
**Peak Demand:** Q1 and Q3 technology conferences

## 2. Mental Health & Workplace Wellness

Mental health topics saw 45% growth, driven by post-pandemic awareness:
- Building resilient teams and organizations
- Work-life balance in remote environments
- Stress management and burnout prevention
- Creating psychologically safe workplaces

**Average Fee Range:** $15,000 - $45,000
**Peak Demand:** Year-round, especially wellness-focused events

## 3. Sustainability & Climate Action

Environmental topics grew 38% as organizations prioritize ESG initiatives:
- Sustainable business practices and operations
- Climate change adaptation strategies
- Green technology and renewable energy
- Circular economy principles

**Average Fee Range:** $20,000 - $60,000
**Peak Demand:** Earth Day season and Q4 planning events

## 4. Digital Transformation & Future of Work

Remote work and digital transformation remain critical:
- Hybrid work model optimization
- Digital leadership and culture
- Technology adoption and change management
- Future skills and workforce development

**Average Fee Range:** $18,000 - $55,000
**Peak Demand:** Corporate planning seasons

## 5. Diversity, Equity & Inclusion

DEI topics continue growing with 35% increase in bookings:
- Inclusive leadership and unconscious bias
- Building diverse and equitable teams
- Cultural competency and global perspectives
- Measuring and improving DEI outcomes

**Average Fee Range:** $15,000 - $50,000
**Peak Demand:** Black History Month, Pride Month, and corporate DEI initiatives

## 6. Cybersecurity & Data Privacy

Security concerns drive 29% growth in cybersecurity speaking topics:
- Cybersecurity for non-technical leaders
- Data privacy regulations and compliance
- Incident response and crisis management
- Emerging security threats and solutions

**Average Fee Range:** $20,000 - $65,000
**Peak Demand:** Following major security incidents and regulatory updates

## 7. Innovation & Creativity

Innovation topics grew 24% as organizations seek competitive advantages:
- Design thinking and creative problem-solving
- Innovation culture and processes
- Breakthrough thinking and disruption
- Collaboration and cross-functional innovation

**Average Fee Range:** $18,000 - $55,000
**Peak Demand:** Strategic planning seasons

## 8. Leadership Development

Leadership remains a perennial favorite with steady 22% growth:
- Adaptive leadership in uncertain times
- Next-generation leadership skills
- Leading through change and transformation
- Executive presence and communication

**Average Fee Range:** $20,000 - $70,000
**Peak Demand:** Leadership retreats and development programs

## 9. Customer Experience & Engagement

CX topics saw 26% growth as businesses focus on differentiation:
- Digital customer experience optimization
- Customer journey mapping and design
- Personalization and customer data
- Building customer-centric cultures

**Average Fee Range:** $16,000 - $48,000
**Peak Demand:** Customer conference season

## 10. Personal Branding & Professional Development

Individual development topics grew 24%:
- Building authentic personal brands
- Career navigation and advancement
- Professional networking and relationships
- Skills for the future economy

**Average Fee Range:** $12,000 - $40,000
**Peak Demand:** Professional development seasons

## Emerging Topics to Watch

- Quantum computing and its business applications
- Space economy and commercial space industry
- Biotech and personalized medicine
- Virtual reality and metaverse business applications
- Cryptocurrency and blockchain beyond finance

## Tips for Speakers

1. **Specialize**: Deep expertise in trending topics commands premium fees
2. **Stay Current**: Continuously update content with latest developments
3. **Prove ROI**: Develop metrics and case studies showing business impact
4. **Cross-Pollinate**: Combine multiple trending topics for unique positioning

The speaking industry continues to evolve rapidly. Staying ahead of these trends will help both speakers and event planners create more impactful and successful events.`,
		category: 'industry-trends',
		author: 'sarah-johnson',
		publishedAt: '2024-12-05T09:15:00Z',
		updatedAt: '2024-12-05T09:15:00Z',
		readTime: 10,
		featured: true,
		tags: ['industry trends', 'speaking topics', '2025 trends', 'market analysis'],
		image: '/blog/speaking-topics-2025.svg',
		status: 'published',
		views: 3241,
		likes: 124
	},
	{
		id: 4,
		title: 'Success Story: How TechCorp Transformed Their Annual Conference',
		slug: 'success-story-techcorp-annual-conference',
		excerpt: 'Learn how TechCorp used our platform to completely reimagine their annual conference, resulting in 40% higher attendance and exceptional feedback.',
		content: `TechCorp's transformation of their annual conference demonstrates the power of strategic speaker selection and modern event planning approaches.

## The Challenge

TechCorp, a Fortune 500 technology company, faced declining attendance at their annual user conference. Previous events felt stale, with repetitive content and limited audience engagement.

**Key Issues:**
- Attendance dropped 25% over three years
- Post-event satisfaction scores below 3.5/5
- Limited diversity in speaker lineup
- Outdated content not reflecting industry trends

## The Solution

TechCorp partnered with us to completely reimagine their speaker strategy:

### 1. Data-Driven Speaker Selection
We analyzed their audience demographics, interests, and feedback to identify optimal speakers. This included:
- Survey analysis of 2,000+ previous attendees
- Industry trend research and topic demand analysis
- Competitor event analysis for differentiation opportunities

### 2. Diverse Speaker Portfolio
The new lineup featured:
- 60% speakers from underrepresented groups
- Mix of industry veterans and emerging experts
- International perspectives from 15 countries
- Balance of technical and business-focused content

### 3. Innovative Content Formats
Beyond traditional keynotes, we implemented:
- Interactive workshops and hands-on labs
- Fireside chats and intimate conversations
- Lightning talks from rising stars
- Audience-driven Q&A sessions

## The Results

The transformed conference exceeded all expectations:

### Attendance Metrics
- **40% increase** in registration
- **95% attendance rate** (up from 78%)
- **62% first-time attendees**
- **International attendance doubled**

### Engagement Improvements
- **4.8/5 average satisfaction** (up from 3.4/5)
- **89% would recommend** to colleagues
- **3x increase** in social media mentions
- **Post-event survey completion rate: 78%**

### Business Impact
- **$2.3M in new business pipeline** attributed to conference
- **450+ qualified leads** generated
- **25% increase** in product demo requests
- **Enhanced brand perception** among target audience

## Key Success Factors

### 1. Audience-First Approach
Every speaker selection considered audience needs and interests rather than availability or cost alone.

### 2. Content Curation
We ensured content complemented rather than competed, creating a cohesive narrative throughout the event.

### 3. Speaker Support
Comprehensive speaker briefings and coaching resulted in higher-quality presentations and better audience connection.

### 4. Technology Integration
Seamless technology enhanced rather than hindered the speaker experience and audience engagement.

## Lessons Learned

### What Worked Best
- **Personal Stories**: Speakers who shared authentic experiences resonated most
- **Actionable Content**: Audiences preferred practical takeaways over theoretical discussions
- **Interactive Elements**: Audience participation significantly improved engagement
- **Diverse Perspectives**: Varied viewpoints created richer discussions

### Unexpected Insights
- **Emerging Speakers**: Rising experts often delivered more memorable presentations than established celebrities
- **Local Talent**: Regional speakers provided valuable industry-specific insights
- **Hybrid Format**: Virtual attendance options increased overall reach without cannibalizing in-person attendance

## Implementation Timeline

**6 Months Before:**
- Audience research and strategy development
- Initial speaker outreach and booking

**4 Months Before:**
- Content coordination and speaker briefings
- Marketing and promotion launch

**2 Months Before:**
- Final preparations and contingency planning
- Technology testing and speaker rehearsals

**Post-Event:**
- Comprehensive analysis and feedback collection
- Relationship building for future events

## ROI Analysis

**Investment Breakdown:**
- Speaker fees: $485,000
- Platform and coordination: $45,000
- Additional production: $125,000
- **Total Investment: $655,000**

**Measurable Returns:**
- Direct business pipeline: $2.3M
- Brand value and awareness: $850K (estimated)
- Customer retention impact: $1.2M (estimated)
- **Total ROI: 550%**

## Future Plans

Based on this success, TechCorp has committed to:
- Continuing the diverse speaker strategy
- Expanding to regional events using similar principles
- Developing an internal speaker development program
- Creating content series based on conference highlights

This transformation demonstrates that strategic speaker selection, supported by data and audience insights, can dramatically improve event outcomes and business impact.

**"The conference completely changed how our industry views TechCorp. We're now seen as thought leaders rather than just another vendor."** - Maria Santos, VP of Marketing, TechCorp`,
		category: 'success-stories',
		author: 'mike-chen',
		publishedAt: '2024-11-28T11:20:00Z',
		updatedAt: '2024-11-28T11:20:00Z',
		readTime: 15,
		featured: false,
		tags: ['success story', 'case study', 'conference planning', 'ROI'],
		image: '/blog/techcorp-success-story.svg',
		status: 'published',
		views: 987,
		likes: 43
	},
	{
		id: 5,
		title: 'New Feature: AI-Powered Speaker Matching',
		slug: 'new-feature-ai-powered-speaker-matching',
		excerpt: 'Discover our latest AI-powered speaker matching feature that helps event planners find the perfect speakers faster than ever before.',
		content: `We're excited to announce our newest feature: AI-Powered Speaker Matching, designed to revolutionize how event planners discover and connect with speakers.

## What is AI-Powered Speaker Matching?

Our new AI system analyzes multiple data points to provide highly accurate speaker recommendations:

### Data Points Analyzed
- Event type, size, and industry
- Audience demographics and interests
- Budget constraints and preferences
- Geographic and timing requirements
- Success metrics from similar events

### Machine Learning Capabilities
- Natural language processing of event descriptions
- Pattern recognition from successful bookings
- Continuous learning from user feedback
- Predictive modeling for event success

## How It Works

### 1. Event Description Input
Simply describe your event in natural language:
*"We need an AI expert for our 500-person financial services conference in Chicago this spring, focusing on practical implementation rather than theory."*

### 2. AI Analysis
Our system processes your requirements and considers:
- Speaker expertise alignment
- Industry-specific experience
- Presentation style preferences
- Availability and logistics

### 3. Curated Recommendations
Receive ranked recommendations with:
- Match confidence scores
- Detailed reasoning for each suggestion
- Comparable alternatives
- Booking probability indicators

## Key Benefits

### For Event Planners
- **Faster Discovery**: Find relevant speakers 75% faster
- **Better Matches**: 40% improvement in satisfaction scores
- **Reduced Risk**: AI identifies potential compatibility issues
- **Cost Optimization**: Budget-aware recommendations

### For Speakers
- **Higher Quality Inquiries**: Better-matched opportunities
- **Increased Bookings**: Improved conversion rates
- **Profile Optimization**: AI-driven visibility recommendations
- **Market Insights**: Understanding of demand patterns

## Feature Highlights

### Smart Filters
- Automatic suggestion of relevant filters
- Dynamic filter adjustment based on availability
- Seasonal and trend-aware recommendations

### Predictive Analytics
- Success probability for each speaker-event match
- Historical performance data integration
- Risk assessment and mitigation suggestions

### Continuous Learning
- Feedback integration for improved recommendations
- Outcome tracking for algorithm refinement
- User preference learning over time

## Real-World Results

Early beta testing showed impressive improvements:

### Efficiency Gains
- **75% reduction** in time to find suitable speakers
- **60% fewer** back-and-forth communications
- **45% faster** booking confirmation process

### Quality Improvements
- **4.7/5 average** match satisfaction rating
- **85% booking rate** for AI recommendations
- **92% repeat usage** rate among beta users

## Privacy and Data Security

We prioritize data protection:
- All personal data encrypted and anonymized
- GDPR and CCPA compliant processing
- User control over data sharing preferences
- Transparent algorithm decision-making

## Getting Started

### For Existing Users
AI-Powered Speaker Matching is automatically available in your dashboard. Simply start a new search to experience the enhanced recommendations.

### For New Users
Sign up for a free account to access:
- AI-powered speaker recommendations
- Advanced search and filtering tools
- Booking management and communication tools
- Analytics and performance tracking

## Advanced Features

### Custom Weighting
Adjust importance of different matching factors:
- Expertise relevance: 40%
- Industry experience: 25%
- Presentation style: 20%
- Logistics and cost: 15%

### Similarity Search
Find speakers similar to ones you've previously booked or are considering.

### Trend Integration
AI considers current industry trends and seasonal patterns in recommendations.

## Future Roadmap

We're continuously improving the AI system:

### Q1 2025
- Multi-language support for international events
- Integration with calendar systems
- Enhanced mobile experience

### Q2 2025
- Video analysis for presentation style matching
- Automated contract generation
- ROI prediction modeling

### Q3 2025
- Voice-activated search capabilities
- Integration with popular event management tools
- Advanced analytics and reporting

## Technical Details

### Infrastructure
- Cloud-based processing for scalability
- Real-time recommendation updates
- 99.9% system uptime guarantee

### APIs and Integration
- RESTful API for custom integrations
- Webhook support for real-time updates
- SDK available for developers

## User Feedback

*"The AI recommendations saved us weeks of research. Every suggested speaker was a perfect fit for our event."* - Jennifer Martinez, Event Director

*"I'm getting much better inquiries now. The AI seems to understand exactly what type of events I'm best suited for."* - Dr. Robert Kim, Technology Speaker

*"This feature has transformed how we approach speaker selection. The confidence scores help us make decisions faster."* - Alex Thompson, Conference Producer

## Support and Training

We offer comprehensive support:
- Video tutorials and documentation
- Live training sessions for teams
- Dedicated customer success managers
- 24/7 technical support

Ready to experience AI-Powered Speaker Matching? Log in to your account or sign up today to discover how artificial intelligence can transform your event planning process.`,
		category: 'platform-updates',
		author: 'platform-team',
		publishedAt: '2024-12-20T16:45:00Z',
		updatedAt: '2024-12-20T16:45:00Z',
		readTime: 12,
		featured: false,
		tags: ['platform update', 'AI', 'new features', 'speaker matching'],
		image: '/blog/ai-speaker-matching.svg',
		status: 'published',
		views: 1456,
		likes: 78
	}
];

/**
 * Get all blog categories
 * @returns {Array} Array of blog categories
 */
export function getBlogCategories() {
	return blogCategories;
}

/**
 * Get all blog authors
 * @returns {Array} Array of blog authors
 */
export function getBlogAuthors() {
	return blogAuthors;
}

/**
 * Get author by ID
 * @param {string} authorId - Author ID
 * @returns {Object|null} Author object or null if not found
 */
export function getBlogAuthor(authorId) {
	return blogAuthors.find(author => author.id === authorId) || null;
}

/**
 * Get all published blog posts
 * @param {number} limit - Maximum number of posts to return
 * @returns {Array} Array of published blog posts
 */
export function getBlogPosts(limit = null) {
	const published = blogPosts.filter(post => post.status === 'published');
	const sorted = published.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
	return limit ? sorted.slice(0, limit) : sorted;
}

/**
 * Get blog posts by category
 * @param {string} categoryId - Category ID ('all' for all posts)
 * @param {number} limit - Maximum number of posts to return
 * @returns {Array} Array of blog posts in the category
 */
export function getBlogPostsByCategory(categoryId, limit = null) {
	let posts = getBlogPosts();
	
	if (categoryId !== 'all') {
		posts = posts.filter(post => post.category === categoryId);
	}
	
	return limit ? posts.slice(0, limit) : posts;
}

/**
 * Get featured blog posts
 * @param {number} limit - Maximum number of posts to return
 * @returns {Array} Array of featured blog posts
 */
export function getFeaturedBlogPosts(limit = 3) {
	return getBlogPosts().filter(post => post.featured).slice(0, limit);
}

/**
 * Get blog post by slug
 * @param {string} slug - Post slug
 * @returns {Object|null} Blog post object or null if not found
 */
export function getBlogPostBySlug(slug) {
	return blogPosts.find(post => post.slug === slug && post.status === 'published') || null;
}

/**
 * Search blog posts
 * @param {string} query - Search query
 * @param {string} categoryId - Optional category filter
 * @returns {Array} Array of matching blog posts
 */
export function searchBlogPosts(query, categoryId = 'all') {
	if (!query || query.trim().length === 0) {
		return getBlogPostsByCategory(categoryId);
	}

	const searchTerm = query.toLowerCase().trim();
	let posts = getBlogPostsByCategory(categoryId);

	return posts.filter(post => {
		return (
			post.title.toLowerCase().includes(searchTerm) ||
			post.excerpt.toLowerCase().includes(searchTerm) ||
			post.content.toLowerCase().includes(searchTerm) ||
			post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
		);
	});
}

/**
 * Get related blog posts
 * @param {number} currentPostId - Current post ID
 * @param {number} limit - Maximum number of related posts to return
 * @returns {Array} Array of related blog posts
 */
export function getRelatedBlogPosts(currentPostId, limit = 3) {
	const currentPost = blogPosts.find(post => post.id === currentPostId);
	if (!currentPost) return [];

	// Find posts with same category or overlapping tags
	const relatedPosts = getBlogPosts().filter(post => {
		if (post.id === currentPostId) return false;
		
		return (
			post.category === currentPost.category ||
			currentPost.tags.some(tag => post.tags.includes(tag))
		);
	});

	// Sort by relevance (same category first, then by tag overlap)
	return relatedPosts
		.sort((a, b) => {
			const aScore = (a.category === currentPost.category ? 2 : 0) +
				currentPost.tags.filter(tag => a.tags.includes(tag)).length;
			const bScore = (b.category === currentPost.category ? 2 : 0) +
				currentPost.tags.filter(tag => b.tags.includes(tag)).length;
			return bScore - aScore;
		})
		.slice(0, limit);
}

/**
 * Get popular blog posts based on views
 * @param {number} limit - Maximum number of posts to return
 * @returns {Array} Array of popular blog posts
 */
export function getPopularBlogPosts(limit = 5) {
	return getBlogPosts()
		.sort((a, b) => b.views - a.views)
		.slice(0, limit);
}

/**
 * Get recent blog posts
 * @param {number} limit - Maximum number of posts to return
 * @returns {Array} Array of recent blog posts
 */
export function getRecentBlogPosts(limit = 5) {
	return getBlogPosts().slice(0, limit);
}

/**
 * Get blog statistics
 * @returns {Object} Blog statistics
 */
export function getBlogStatistics() {
	const posts = getBlogPosts();
	
	return {
		totalPosts: posts.length,
		totalCategories: blogCategories.length - 1, // Exclude 'all'
		totalAuthors: blogAuthors.length,
		totalViews: posts.reduce((sum, post) => sum + post.views, 0),
		totalLikes: posts.reduce((sum, post) => sum + post.likes, 0),
		averageReadTime: Math.round(posts.reduce((sum, post) => sum + post.readTime, 0) / posts.length),
		categoryBreakdown: blogCategories.slice(1).reduce((acc, category) => {
			acc[category.id] = getBlogPostsByCategory(category.id).length;
			return acc;
		}, {})
	};
}

/**
 * Format blog post for display
 * @param {Object} post - Blog post object
 * @returns {Object} Formatted blog post
 */
export function formatBlogPost(post) {
	const author = getBlogAuthor(post.author);
	const category = blogCategories.find(cat => cat.id === post.category);
	
	return {
		...post,
		authorInfo: author,
		categoryInfo: category,
		publishedDate: new Date(post.publishedAt).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}),
		updatedDate: new Date(post.updatedAt).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	};
}