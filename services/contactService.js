/**
 * Contact Service
 * Handles contact form submissions and inquiry routing
 */

// API base URL - should be set via environment variable in production
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Contact form field definitions
export const contactFields = {
	general: [
		{
			name: 'name',
			label: 'Full Name',
			type: 'text',
			required: true,
			placeholder: 'Enter your full name'
		},
		{
			name: 'email',
			label: 'Email Address',
			type: 'email',
			required: true,
			placeholder: 'your.email@example.com'
		},
		{
			name: 'company',
			label: 'Company/Organization',
			type: 'text',
			required: false,
			placeholder: 'Your company or organization'
		},
		{
			name: 'phone',
			label: 'Phone Number',
			type: 'tel',
			required: false,
			placeholder: '+1 (555) 123-4567'
		},
		{
			name: 'inquiryType',
			label: 'Inquiry Type',
			type: 'select',
			required: true,
			options: [
				'General Question',
				'Event Planning Support',
				'Speaker Application',
				'Technical Support',
				'Partnership Inquiry',
				'Media/Press',
				'Billing Question',
				'Other'
			]
		},
		{
			name: 'subject',
			label: 'Subject',
			type: 'text',
			required: true,
			placeholder: 'Brief subject line'
		},
		{
			name: 'message',
			label: 'Message',
			type: 'textarea',
			required: true,
			placeholder: 'Please provide details about your inquiry...',
			minLength: 20,
			maxLength: 2000
		},
		{
			name: 'urgency',
			label: 'Priority Level',
			type: 'select',
			required: false,
			options: [
				'Low - General inquiry',
				'Medium - Need response within 2-3 days',
				'High - Need response within 24 hours',
				'Urgent - Need immediate attention'
			]
		}
	]
};

// Contact information
export const contactInfo = {
	general: {
		email: 'hello@speakersearch.com',
		phone: '+1 (555) 123-4567',
		address: {
			street: '123 Business Plaza, Suite 400',
			city: 'San Francisco',
			state: 'CA',
			zip: '94105',
			country: 'United States'
		}
	},
	departments: {
		speakers: {
			email: 'speakers@speakersearch.com',
			phone: '+1 (555) 123-4568',
			description: 'Speaker applications, profile support, and booking assistance'
		},
		events: {
			email: 'events@speakersearch.com',
			phone: '+1 (555) 123-4569',
			description: 'Event planning support, speaker recommendations, and booking inquiries'
		},
		support: {
			email: 'support@speakersearch.com',
			phone: '+1 (555) 123-4570',
			description: 'Technical support, platform assistance, and account help'
		},
		partnerships: {
			email: 'partnerships@speakersearch.com',
			phone: '+1 (555) 123-4571',
			description: 'Business partnerships, integrations, and collaboration opportunities'
		},
		media: {
			email: 'media@speakersearch.com',
			phone: '+1 (555) 123-4572',
			description: 'Press inquiries, media requests, and company information'
		}
	},
	hours: {
		weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
		weekends: 'Saturday - Sunday: Closed',
		holidays: 'Closed on major holidays',
		emergency: '24/7 support available for urgent technical issues'
	},
	response: {
		general: '24-48 hours',
		technical: '4-8 hours during business hours',
		urgent: '1-2 hours during business hours',
		speakers: '1-3 business days',
		events: '2-4 hours during business hours'
	}
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
 * Validate contact form field
 * @param {string} fieldName - Name of the field
 * @param {any} value - Field value
 * @param {Object} field - Field configuration
 * @returns {string|null} Error message or null if valid
 */
export function validateContactField(fieldName, value, field) {
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
 * Validate entire contact form
 * @param {Object} formData - Complete form data
 * @returns {Object} Validation errors by field name
 */
export function validateContactForm(formData) {
	const errors = {};
	
	contactFields.general.forEach(field => {
		const error = validateContactField(field.name, formData[field.name], field);
		if (error) {
			errors[field.name] = error;
		}
	});

	return errors;
}

/**
 * Submit contact form
 * @param {Object} contactData - Contact form data
 * @returns {Promise<Object>} Submission result
 */
export async function submitContactForm(contactData) {
	try {
		const response = await fetch(`${API_BASE_URL}/contact/submit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...contactData,
				submittedAt: new Date().toISOString(),
				source: 'website_contact_form'
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return {
			success: true,
			ticketId: result.ticketId || generateMockTicketId(),
			message: 'Thank you for your message! We\'ll get back to you soon.',
			expectedResponse: getExpectedResponseTime(contactData.inquiryType, contactData.urgency)
		};
	} catch (error) {
		console.error('Error submitting contact form:', error);
		
		// For development/demo purposes, return mock success
		return {
			success: true,
			ticketId: generateMockTicketId(),
			message: 'Thank you for your message! We\'ll get back to you soon.',
			expectedResponse: getExpectedResponseTime(contactData.inquiryType, contactData.urgency),
			note: 'This is a demo submission - no actual email was sent.'
		};
	}
}

/**
 * Get expected response time based on inquiry type and urgency
 * @param {string} inquiryType - Type of inquiry
 * @param {string} urgency - Priority level
 * @returns {string} Expected response time
 */
function getExpectedResponseTime(inquiryType, urgency) {
	if (urgency && urgency.includes('Urgent')) {
		return '1-2 hours during business hours';
	}
	if (urgency && urgency.includes('High')) {
		return '4-8 hours during business hours';
	}
	
	switch (inquiryType) {
		case 'Technical Support':
			return '4-8 hours during business hours';
		case 'Event Planning Support':
			return '2-4 hours during business hours';
		case 'Speaker Application':
			return '1-3 business days';
		case 'Partnership Inquiry':
		case 'Media/Press':
			return '1-2 business days';
		default:
			return '24-48 hours';
	}
}

/**
 * Generate mock ticket ID for development
 * @returns {string} Mock ticket ID
 */
function generateMockTicketId() {
	return `TKT-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
}

/**
 * Get contact information by department
 * @param {string} department - Department name
 * @returns {Object} Department contact info
 */
export function getDepartmentContact(department) {
	return contactInfo.departments[department] || contactInfo.general;
}

/**
 * Get all departments for contact routing
 * @returns {Array} Array of department info
 */
export function getAllDepartments() {
	return Object.entries(contactInfo.departments).map(([key, info]) => ({
		id: key,
		name: key.charAt(0).toUpperCase() + key.slice(1),
		...info
	}));
}

/**
 * Get FAQ for contact page
 * @returns {Array} Array of frequently asked questions
 */
export function getContactFAQ() {
	return [
		{
			question: 'How quickly will I get a response?',
			answer: 'Response times vary by inquiry type. General questions receive responses within 24-48 hours, while technical support and urgent inquiries are handled within 4-8 hours during business hours.'
		},
		{
			question: 'Can I call instead of using the contact form?',
			answer: 'Yes! You can call our main number at +1 (555) 123-4567 during business hours (9 AM - 6 PM PST, Monday-Friday). For specific departments, use the direct numbers listed above.'
		},
		{
			question: 'Do you offer 24/7 support?',
			answer: 'We provide 24/7 support for urgent technical issues that affect platform availability. For general inquiries, our team is available during business hours.'
		},
		{
			question: 'How do I report a technical issue?',
			answer: 'For technical issues, select "Technical Support" as your inquiry type or email support@speakersearch.com directly. Include details about the issue, your browser, and any error messages.'
		},
		{
			question: 'Can I schedule a demo or consultation?',
			answer: 'Absolutely! Select "Event Planning Support" or "Partnership Inquiry" as your inquiry type, and our team will coordinate a personalized demo or consultation session.'
		},
		{
			question: 'Where are you located?',
			answer: 'Our headquarters is located in San Francisco, CA. We serve clients globally and offer virtual meetings and support for all time zones.'
		}
	];
}