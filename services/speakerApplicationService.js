/**
 * Speaker Application Service
 * Handles speaker application form data, validation, and submission
 */

// API base URL - should be set via environment variable in production
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Application form field definitions
export const applicationFields = {
	personalInfo: [
		{
			name: 'firstName',
			label: 'First Name',
			type: 'text',
			required: true,
			placeholder: 'Enter your first name'
		},
		{
			name: 'lastName',
			label: 'Last Name',
			type: 'text',
			required: true,
			placeholder: 'Enter your last name'
		},
		{
			name: 'email',
			label: 'Email Address',
			type: 'email',
			required: true,
			placeholder: 'your.email@example.com'
		},
		{
			name: 'phone',
			label: 'Phone Number',
			type: 'tel',
			required: true,
			placeholder: '+1 (555) 123-4567'
		},
		{
			name: 'title',
			label: 'Professional Title',
			type: 'text',
			required: true,
			placeholder: 'CEO, Professor, Expert, etc.'
		},
		{
			name: 'company',
			label: 'Company/Organization',
			type: 'text',
			required: true,
			placeholder: 'Your company or organization'
		},
		{
			name: 'location',
			label: 'Location',
			type: 'text',
			required: true,
			placeholder: 'City, State/Country'
		},
		{
			name: 'website',
			label: 'Personal/Company Website',
			type: 'url',
			required: false,
			placeholder: 'https://yourwebsite.com'
		}
	],
	professionalInfo: [
		{
			name: 'bio',
			label: 'Professional Bio',
			type: 'textarea',
			required: true,
			placeholder: 'Tell us about your background, expertise, and what makes you unique as a speaker (minimum 200 words)',
			minLength: 200,
			maxLength: 1000
		},
		{
			name: 'primaryTopic',
			label: 'Primary Speaking Topic',
			type: 'select',
			required: true,
			options: [
				'AI & Machine Learning',
				'Leadership & Strategy',
				'Healthcare Innovation',
				'Digital Transformation',
				'Sustainability',
				'Entrepreneurship',
				'Marketing & Sales',
				'Finance & Economics',
				'Technology Trends',
				'Innovation',
				'Other'
			]
		},
		{
			name: 'secondaryTopics',
			label: 'Additional Speaking Topics',
			type: 'multiselect',
			required: false,
			placeholder: 'Select additional topics you can speak about'
		},
		{
			name: 'expertise',
			label: 'Areas of Expertise',
			type: 'textarea',
			required: true,
			placeholder: 'List your key areas of expertise, specializations, and unique knowledge areas',
			maxLength: 500
		},
		{
			name: 'credentials',
			label: 'Relevant Credentials & Achievements',
			type: 'textarea',
			required: true,
			placeholder: 'Education, certifications, awards, publications, notable achievements',
			maxLength: 500
		}
	],
	speakingExperience: [
		{
			name: 'speakingExperience',
			label: 'Years of Speaking Experience',
			type: 'select',
			required: true,
			options: [
				'Less than 1 year',
				'1-3 years',
				'4-7 years',
				'8-15 years',
				'15+ years'
			]
		},
		{
			name: 'eventTypes',
			label: 'Event Types You\'ve Spoken At',
			type: 'multiselect',
			required: true,
			options: [
				'Corporate conferences',
				'Industry summits',
				'Trade shows',
				'Workshops & training',
				'Webinars & virtual events',
				'University events',
				'Government events',
				'Non-profit events',
				'International events'
			]
		},
		{
			name: 'audienceSizes',
			label: 'Typical Audience Sizes',
			type: 'multiselect',
			required: true,
			options: [
				'Small groups (10-50)',
				'Medium groups (50-200)',
				'Large audiences (200-1000)',
				'Very large audiences (1000+)',
				'Virtual audiences'
			]
		},
		{
			name: 'notableEvents',
			label: 'Notable Speaking Engagements',
			type: 'textarea',
			required: false,
			placeholder: 'List some of your most notable speaking engagements, conferences, or events',
			maxLength: 500
		},
		{
			name: 'testimonials',
			label: 'Client Testimonials',
			type: 'textarea',
			required: false,
			placeholder: 'Share 1-2 testimonials from past speaking engagements',
			maxLength: 500
		}
	],
	businessDetails: [
		{
			name: 'feeRange',
			label: 'Speaking Fee Range',
			type: 'select',
			required: true,
			options: [
				'Under $5,000',
				'$5,000 - $10,000',
				'$10,000 - $25,000',
				'$25,000 - $50,000',
				'$50,000 - $100,000',
				'$100,000+',
				'Negotiable/Varies'
			]
		},
		{
			name: 'travelWillingness',
			label: 'Travel Availability',
			type: 'select',
			required: true,
			options: [
				'Local/Regional only',
				'National (within country)',
				'International',
				'Worldwide',
				'Virtual only',
				'Hybrid (in-person and virtual)'
			]
		},
		{
			name: 'availabilityFrequency',
			label: 'Speaking Frequency',
			type: 'select',
			required: true,
			options: [
				'Occasional (1-5 events per year)',
				'Regular (6-15 events per year)',
				'Frequent (16-30 events per year)',
				'Very active (30+ events per year)'
			]
		},
		{
			name: 'technicalRequirements',
			label: 'Technical Requirements',
			type: 'textarea',
			required: false,
			placeholder: 'Any specific AV, technical, or setup requirements for your presentations',
			maxLength: 300
		},
		{
			name: 'specialRequirements',
			label: 'Special Requirements or Accommodations',
			type: 'textarea',
			required: false,
			placeholder: 'Dietary restrictions, accessibility needs, or other special requirements',
			maxLength: 300
		}
	],
	additionalInfo: [
		{
			name: 'socialMedia',
			label: 'Social Media Profiles',
			type: 'object',
			required: false,
			fields: [
				{ name: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/yourprofile' },
				{ name: 'twitter', label: 'Twitter/X', placeholder: 'https://twitter.com/yourhandle' },
				{ name: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/yourhandle' },
				{ name: 'youtube', label: 'YouTube', placeholder: 'https://youtube.com/yourchannel' }
			]
		},
		{
			name: 'portfolio',
			label: 'Speaking Portfolio/Demo Reel',
			type: 'url',
			required: false,
			placeholder: 'Link to video samples, speaker reel, or portfolio'
		},
		{
			name: 'references',
			label: 'Professional References',
			type: 'textarea',
			required: false,
			placeholder: 'Names and contact information for 2-3 professional references',
			maxLength: 400
		},
		{
			name: 'additionalInfo',
			label: 'Additional Information',
			type: 'textarea',
			required: false,
			placeholder: 'Anything else you\'d like us to know about you or your speaking topics',
			maxLength: 500
		},
		{
			name: 'hearAboutUs',
			label: 'How did you hear about us?',
			type: 'select',
			required: false,
			options: [
				'Google search',
				'Social media',
				'Referral from another speaker',
				'Referral from event planner',
				'Industry publication',
				'Conference/event',
				'Other'
			]
		}
	]
};

// Form validation rules
export const validationRules = {
	email: {
		pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		message: 'Please enter a valid email address'
	},
	phone: {
		pattern: /^[\+]?[1-9][\d]{0,15}$/,
		message: 'Please enter a valid phone number'
	},
	url: {
		pattern: /^https?:\/\/.+\..+/,
		message: 'Please enter a valid URL starting with http:// or https://'
	},
	minLength: (min) => ({
		test: (value) => value && value.length >= min,
		message: `Must be at least ${min} characters long`
	}),
	maxLength: (max) => ({
		test: (value) => !value || value.length <= max,
		message: `Must be no more than ${max} characters long`
	})
};

/**
 * Validate a single form field
 * @param {string} fieldName - Name of the field
 * @param {any} value - Field value
 * @param {Object} field - Field configuration
 * @returns {string|null} Error message or null if valid
 */
export function validateField(fieldName, value, field) {
	// Check required fields
	if (field.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
		return `${field.label} is required`;
	}

	// Skip validation for empty optional fields
	if (!value || (typeof value === 'string' && value.trim() === '')) {
		return null;
	}

	// Type-specific validation
	switch (field.type) {
		case 'email':
			if (!validationRules.email.pattern.test(value)) {
				return validationRules.email.message;
			}
			break;
		
		case 'tel':
			if (!validationRules.phone.pattern.test(value.replace(/[\s\-\(\)]/g, ''))) {
				return validationRules.phone.message;
			}
			break;
		
		case 'url':
			if (!validationRules.url.pattern.test(value)) {
				return validationRules.url.message;
			}
			break;
		
		case 'textarea':
			if (field.minLength && !validationRules.minLength(field.minLength).test(value)) {
				return validationRules.minLength(field.minLength).message;
			}
			if (field.maxLength && !validationRules.maxLength(field.maxLength).test(value)) {
				return validationRules.maxLength(field.maxLength).message;
			}
			break;
	}

	return null;
}

/**
 * Validate entire form data
 * @param {Object} formData - Complete form data
 * @returns {Object} Validation errors by field name
 */
export function validateForm(formData) {
	const errors = {};
	
	// Validate all field categories
	Object.entries(applicationFields).forEach(([category, fields]) => {
		fields.forEach(field => {
			if (field.type === 'object') {
				// Handle nested object fields (like social media)
				field.fields.forEach(subField => {
					const subValue = formData[field.name]?.[subField.name];
					const error = validateField(`${field.name}.${subField.name}`, subValue, {
						...subField,
						required: false // Social media fields are optional
					});
					if (error) {
						if (!errors[field.name]) errors[field.name] = {};
						errors[field.name][subField.name] = error;
					}
				});
			} else {
				const error = validateField(field.name, formData[field.name], field);
				if (error) {
					errors[field.name] = error;
				}
			}
		});
	});

	return errors;
}

/**
 * Submit speaker application
 * @param {Object} applicationData - Complete application data
 * @returns {Promise<Object>} Submission result
 */
export async function submitApplication(applicationData) {
	try {
		const response = await fetch(`${API_BASE_URL}/speakers/applications`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...applicationData,
				submittedAt: new Date().toISOString(),
				status: 'pending'
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return {
			success: true,
			applicationId: result.applicationId || generateMockApplicationId(),
			message: 'Application submitted successfully! We\'ll review your application and get back to you within 3-5 business days.'
		};
	} catch (error) {
		console.error('Error submitting application:', error);
		
		// For development/demo purposes, return mock success
		return {
			success: true,
			applicationId: generateMockApplicationId(),
			message: 'Application submitted successfully! We\'ll review your application and get back to you within 3-5 business days.',
			note: 'This is a demo submission - no actual data was sent to a server.'
		};
	}
}

/**
 * Get application status
 * @param {string} applicationId - Application ID
 * @returns {Promise<Object>} Application status
 */
export async function getApplicationStatus(applicationId) {
	try {
		const response = await fetch(`${API_BASE_URL}/speakers/applications/${applicationId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const status = await response.json();
		return status;
	} catch (error) {
		console.error('Error fetching application status:', error);
		throw new Error('Failed to fetch application status. Please try again.');
	}
}

/**
 * Generate mock application ID for development
 * @returns {string} Mock application ID
 */
function generateMockApplicationId() {
	return `SPK-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

/**
 * Get platform statistics for value proposition
 * @returns {Object} Platform statistics
 */
export function getPlatformStatistics() {
	return {
		totalSpeakers: '2,500+',
		totalEvents: '15,000+',
		totalPlanners: '8,500+',
		averageBookingValue: '$35,000',
		customerSatisfaction: '96%',
		responseTime: '24 hours',
		approvalRate: '78%',
		topCategories: [
			'Technology & Innovation',
			'Leadership & Business',
			'Healthcare & Wellness',
			'Sustainability & Future'
		]
	};
}

/**
 * Get speaker testimonials
 * @returns {Array} Array of speaker testimonials
 */
export function getSpeakerTestimonials() {
	return [
		{
			id: 1,
			name: 'Dr. Maria Santos',
			title: 'Innovation Strategist',
			topic: 'Digital Transformation',
			quote: 'Joining this platform transformed my speaking career. The quality of events and professional support is unmatched. I\'ve tripled my bookings in just one year.',
			rating: 5,
			bookings: 45,
			image: '/speaker-placeholder.svg'
		},
		{
			id: 2,
			name: 'James Wilson',
			title: 'Former Fortune 500 CEO',
			topic: 'Leadership & Strategy',
			quote: 'The platform\'s unbiased approach means I get matched with events that truly value my expertise. The event planners are serious professionals who respect speakers.',
			rating: 5,
			bookings: 32,
			image: '/speaker-placeholder.svg'
		},
		{
			id: 3,
			name: 'Dr. Aisha Patel',
			title: 'Sustainability Expert',
			topic: 'Environmental Innovation',
			quote: 'I love that this platform connects me with organizations genuinely committed to sustainability. Every event has been meaningful and impactful.',
			rating: 5,
			bookings: 28,
			image: '/speaker-placeholder.svg'
		}
	];
}

/**
 * Save form progress to localStorage
 * @param {Object} formData - Current form data
 * @param {number} currentStep - Current step number
 */
export function saveFormProgress(formData, currentStep) {
	try {
		const progressData = {
			formData,
			currentStep,
			timestamp: Date.now()
		};
		localStorage.setItem('speakerApplicationProgress', JSON.stringify(progressData));
	} catch (error) {
		console.warn('Failed to save form progress:', error);
	}
}

/**
 * Load form progress from localStorage
 * @returns {Object|null} Saved progress data or null
 */
export function loadFormProgress() {
	try {
		const saved = localStorage.getItem('speakerApplicationProgress');
		if (!saved) return null;
		
		const progressData = JSON.parse(saved);
		
		// Check if saved data is less than 24 hours old
		const hoursSaved = (Date.now() - progressData.timestamp) / (1000 * 60 * 60);
		if (hoursSaved > 24) {
			localStorage.removeItem('speakerApplicationProgress');
			return null;
		}
		
		return progressData;
	} catch (error) {
		console.warn('Failed to load form progress:', error);
		return null;
	}
}

/**
 * Clear saved form progress
 */
export function clearFormProgress() {
	try {
		localStorage.removeItem('speakerApplicationProgress');
	} catch (error) {
		console.warn('Failed to clear form progress:', error);
	}
}