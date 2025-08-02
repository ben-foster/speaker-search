'use client';

import { useState } from 'react';
import { 
	contactFields, 
	validateContactForm, 
	submitContactForm 
} from '@/services/contactService';

export default function ContactForm() {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitResult, setSubmitResult] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		
		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: null }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		// Validate form
		const validationErrors = validateContactForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setIsSubmitting(true);
		try {
			const result = await submitContactForm(formData);
			setSubmitResult(result);
			if (result.success) {
				setFormData({});
				setErrors({});
			}
		} catch (error) {
			setSubmitResult({
				success: false,
				message: 'There was an error submitting your message. Please try again.'
			});
		}
		setIsSubmitting(false);
	};

	const renderField = (field) => {
		const { name, label, type, required, placeholder, options, minLength, maxLength } = field;
		const value = formData[name] || '';
		const error = errors[name];

		const commonProps = {
			name,
			id: name,
			value,
			onChange: handleInputChange,
			className: `w-full px-4 py-3 bg-dark-bg-secondary border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors ${
				error ? 'border-red-500' : 'border-gray-700'
			}`,
			placeholder
		};

		switch (type) {
			case 'select':
				return (
					<div key={name} className="mb-6">
						<label htmlFor={name} className="block text-sm font-medium text-gray-200 mb-2">
							{label}
							{required && <span className="text-red-400 ml-1">*</span>}
						</label>
						<select {...commonProps}>
							<option value="">Select an option...</option>
							{options.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						{error && <p className="mt-1 text-sm text-red-400">{error}</p>}
					</div>
				);

			case 'textarea':
				return (
					<div key={name} className="mb-6">
						<label htmlFor={name} className="block text-sm font-medium text-gray-200 mb-2">
							{label}
							{required && <span className="text-red-400 ml-1">*</span>}
						</label>
						<textarea
							{...commonProps}
							rows={6}
							minLength={minLength}
							maxLength={maxLength}
						/>
						<div className="flex justify-between items-center mt-1">
							{error && <p className="text-sm text-red-400">{error}</p>}
							{maxLength && (
								<p className="text-sm text-gray-500 ml-auto">
									{value.length}/{maxLength}
								</p>
							)}
						</div>
					</div>
				);

			default:
				return (
					<div key={name} className="mb-6">
						<label htmlFor={name} className="block text-sm font-medium text-gray-200 mb-2">
							{label}
							{required && <span className="text-red-400 ml-1">*</span>}
						</label>
						<input
							{...commonProps}
							type={type}
							required={required}
						/>
						{error && <p className="mt-1 text-sm text-red-400">{error}</p>}
					</div>
				);
		}
	};

	// Show success message
	if (submitResult?.success) {
		return (
			<div className="text-center">
				<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
					<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h3 className="font-semibold text-white text-xl mb-3">
					Message Sent Successfully!
				</h3>
				<p className="text-gray-300 mb-4">
					{submitResult.message}
				</p>
				{submitResult.ticketId && (
					<p className="text-sm text-gray-400 mb-4">
						Reference ID: <span className="font-mono text-purple-primary">{submitResult.ticketId}</span>
					</p>
				)}
				{submitResult.expectedResponse && (
					<p className="text-sm text-gray-400 mb-6">
						Expected response time: {submitResult.expectedResponse}
					</p>
				)}
				{submitResult.note && (
					<p className="text-xs text-yellow-400 mb-6">
						{submitResult.note}
					</p>
				)}
				<button
					onClick={() => setSubmitResult(null)}
					className="btn-secondary"
				>
					Send Another Message
				</button>
			</div>
		);
	}

	// Show error message
	if (submitResult && !submitResult.success) {
		return (
			<div className="text-center">
				<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 text-red-400">
					<svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
				<h3 className="font-semibold text-white text-xl mb-3">
					Submission Failed
				</h3>
				<p className="text-gray-300 mb-6">
					{submitResult.message}
				</p>
				<button
					onClick={() => setSubmitResult(null)}
					className="btn-primary"
				>
					Try Again
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{contactFields.general.map(renderField)}

			<div className="pt-4">
				<button
					type="submit"
					disabled={isSubmitting}
					className={`w-full btn-primary flex items-center justify-center ${
						isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
					}`}
				>
					{isSubmitting ? (
						<>
							<svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
							</svg>
							Sending Message...
						</>
					) : (
						<>
							Send Message
							<svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
						</>
					)}
				</button>
			</div>

			<p className="text-xs text-gray-500 text-center">
				By submitting this form, you agree to our{' '}
				<a href="/privacy" className="text-purple-primary hover:underline">
					Privacy Policy
				</a>{' '}
				and{' '}
				<a href="/terms" className="text-purple-primary hover:underline">
					Terms of Service
				</a>.
			</p>
		</form>
	);
}