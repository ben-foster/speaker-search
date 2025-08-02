'use client';

import { useState, useEffect } from 'react';
import {
	applicationFields,
	validateForm,
	submitApplication,
	saveFormProgress,
	loadFormProgress,
	clearFormProgress
} from '@/services/speakerApplicationService';

const FORM_STEPS = [
	{
		id: 'personalInfo',
		title: 'Personal Information',
		description: 'Tell us about yourself and your professional background'
	},
	{
		id: 'professionalInfo',
		title: 'Professional Background',
		description: 'Share your expertise and areas of specialization'
	},
	{
		id: 'speakingExperience',
		title: 'Speaking Experience',
		description: 'Details about your speaking history and achievements'
	},
	{
		id: 'businessDetails',
		title: 'Business Details',
		description: 'Fee ranges, availability, and requirements'
	},
	{
		id: 'additionalInfo',
		title: 'Additional Information',
		description: 'Social media, portfolio, and other details'
	}
];

export default function SpeakerApplicationForm({ onSuccess, onCancel }) {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		socialMedia: {}
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [touched, setTouched] = useState({});

	// Load saved progress on component mount
	useEffect(() => {
		const savedProgress = loadFormProgress();
		if (savedProgress) {
			setFormData(savedProgress.formData);
			setCurrentStep(savedProgress.currentStep);
		}
	}, []);

	// Auto-save progress
	useEffect(() => {
		const timer = setTimeout(() => {
			if (Object.keys(formData).length > 1) { // More than just socialMedia object
				saveFormProgress(formData, currentStep);
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [formData, currentStep]);

	const currentStepData = FORM_STEPS[currentStep];
	const currentFields = applicationFields[currentStepData.id];

	const handleInputChange = (fieldName, value, isNestedField = false, parentField = null) => {
		setFormData(prev => {
			if (isNestedField) {
				return {
					...prev,
					[parentField]: {
						...prev[parentField],
						[fieldName]: value
					}
				};
			}
			return {
				...prev,
				[fieldName]: value
			};
		});

		// Clear error when user starts typing
		if (errors[fieldName] || (isNestedField && errors[parentField]?.[fieldName])) {
			setErrors(prev => {
				if (isNestedField) {
					return {
						...prev,
						[parentField]: {
							...prev[parentField],
							[fieldName]: undefined
						}
					};
				}
				return {
					...prev,
					[fieldName]: undefined
				};
			});
		}
	};

	const handleFieldBlur = (fieldName, isNestedField = false, parentField = null) => {
		const touchedKey = isNestedField ? `${parentField}.${fieldName}` : fieldName;
		setTouched(prev => ({
			...prev,
			[touchedKey]: true
		}));
	};

	const validateCurrentStep = () => {
		const stepErrors = {};
		let hasErrors = false;

		currentFields.forEach(field => {
			if (field.type === 'object') {
				field.fields.forEach(subField => {
					const value = formData[field.name]?.[subField.name];
					const error = validateField(subField.name, value, {
						...subField,
						required: false // Social media fields are optional
					});
					if (error) {
						if (!stepErrors[field.name]) stepErrors[field.name] = {};
						stepErrors[field.name][subField.name] = error;
						hasErrors = true;
					}
				});
			} else {
				const error = validateField(field.name, formData[field.name], field);
				if (error) {
					stepErrors[field.name] = error;
					hasErrors = true;
				}
			}
		});

		setErrors(stepErrors);
		return !hasErrors;
	};

	const validateField = (fieldName, value, field) => {
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
				const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailPattern.test(value)) {
					return 'Please enter a valid email address';
				}
				break;
			
			case 'tel':
				const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
				if (!phonePattern.test(value.replace(/[\s\-\(\)]/g, ''))) {
					return 'Please enter a valid phone number';
				}
				break;
			
			case 'url':
				const urlPattern = /^https?:\/\/.+\..+/;
				if (!urlPattern.test(value)) {
					return 'Please enter a valid URL starting with http:// or https://';
				}
				break;
			
			case 'textarea':
				if (field.minLength && value.length < field.minLength) {
					return `Must be at least ${field.minLength} characters long`;
				}
				if (field.maxLength && value.length > field.maxLength) {
					return `Must be no more than ${field.maxLength} characters long`;
				}
				break;
		}

		return null;
	};

	const handleNext = () => {
		if (validateCurrentStep()) {
			if (currentStep < FORM_STEPS.length - 1) {
				setCurrentStep(prev => prev + 1);
			}
		}
	};

	const handlePrevious = () => {
		if (currentStep > 0) {
			setCurrentStep(prev => prev - 1);
		}
	};

	const handleSubmit = async () => {
		const allErrors = validateForm(formData);
		setErrors(allErrors);

		if (Object.keys(allErrors).length === 0) {
			setIsSubmitting(true);
			try {
				const result = await submitApplication(formData);
				if (result.success) {
					clearFormProgress();
					onSuccess(result.applicationId);
				}
			} catch (error) {
				console.error('Submission error:', error);
				// Handle error (show error message)
			}
			setIsSubmitting(false);
		}
	};

	const renderField = (field) => {
		const value = formData[field.name] || '';
		const error = errors[field.name];
		const isRequired = field.required;

		if (field.type === 'object') {
			return (
				<div key={field.name} className="space-y-4 rounded-lg border border-gray-700 p-4">
					<h3 className="font-medium text-purple-primary">{field.label}</h3>
					{field.fields.map(subField => {
						const subValue = formData[field.name]?.[subField.name] || '';
						const subError = errors[field.name]?.[subField.name];
						const touchedKey = `${field.name}.${subField.name}`;
						
						return (
							<div key={subField.name}>
								<label className="mb-1 block text-sm text-gray-400">
									{subField.label}
								</label>
								<input
									type="url"
									value={subValue}
									onChange={(e) => handleInputChange(subField.name, e.target.value, true, field.name)}
									onBlur={() => handleFieldBlur(subField.name, true, field.name)}
									placeholder={subField.placeholder}
									className={`w-full rounded-lg border px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary/20 ${
										subError && touched[touchedKey]
											? 'border-red-500 bg-red-500/10'
											: 'border-gray-700 bg-dark-bg-secondary focus:border-purple-primary'
									}`}
								/>
								{subError && touched[touchedKey] && (
									<p className="mt-1 text-sm text-red-400">{subError}</p>
								)}
							</div>
						);
					})}
				</div>
			);
		}

		const touchedKey = field.name;
		const showError = error && touched[touchedKey];

		return (
			<div key={field.name}>
				<label className="mb-1 block text-sm text-gray-400">
					{field.label}
					{isRequired && <span className="ml-1 text-red-400">*</span>}
				</label>
				
				{field.type === 'textarea' ? (
					<div>
						<textarea
							value={value}
							onChange={(e) => handleInputChange(field.name, e.target.value)}
							onBlur={() => handleFieldBlur(field.name)}
							placeholder={field.placeholder}
							rows={field.name === 'bio' ? 6 : 4}
							className={`w-full rounded-lg border px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary/20 ${
								showError
									? 'border-red-500 bg-red-500/10'
									: 'border-gray-700 bg-dark-bg-secondary focus:border-purple-primary'
							}`}
						/>
						{field.maxLength && (
							<p className="mt-1 text-right text-xs text-gray-500">
								{value.length}/{field.maxLength} characters
							</p>
						)}
					</div>
				) : field.type === 'select' ? (
					<select
						value={value}
						onChange={(e) => handleInputChange(field.name, e.target.value)}
						onBlur={() => handleFieldBlur(field.name)}
						className={`w-full rounded-lg border px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary/20 ${
							showError
								? 'border-red-500 bg-red-500/10'
								: 'border-gray-700 bg-dark-bg-secondary focus:border-purple-primary'
						}`}
					>
						<option value="">Select {field.label}</option>
						{field.options.map(option => (
							<option key={option} value={option} className="bg-dark-bg-secondary">
								{option}
							</option>
						))}
					</select>
				) : field.type === 'multiselect' ? (
					<div className="space-y-2">
						{(field.options || applicationFields.professionalInfo.find(f => f.name === 'primaryTopic')?.options || []).map(option => {
							const selectedValues = value ? value.split(',') : [];
							const isSelected = selectedValues.includes(option);
							
							return (
								<label key={option} className="flex items-center space-x-3 cursor-pointer">
									<input
										type="checkbox"
										checked={isSelected}
										onChange={(e) => {
											const currentValues = value ? value.split(',').filter(v => v) : [];
											const newValues = e.target.checked
												? [...currentValues, option]
												: currentValues.filter(v => v !== option);
											handleInputChange(field.name, newValues.join(','));
										}}
										className="rounded border-gray-700 bg-dark-bg-secondary text-purple-primary focus:ring-purple-primary"
									/>
									<span className="text-gray-300">{option}</span>
								</label>
							);
						})}
					</div>
				) : (
					<input
						type={field.type}
						value={value}
						onChange={(e) => handleInputChange(field.name, e.target.value)}
						onBlur={() => handleFieldBlur(field.name)}
						placeholder={field.placeholder}
						className={`w-full rounded-lg border px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-primary/20 ${
							showError
								? 'border-red-500 bg-red-500/10'
								: 'border-gray-700 bg-dark-bg-secondary focus:border-purple-primary'
						}`}
					/>
				)}
				
				{showError && (
					<p className="mt-1 text-sm text-red-400">{error}</p>
				)}
			</div>
		);
	};

	return (
		<div className="container mx-auto px-6 pt-28 pb-16">
			{/* Header */}
			<div className="mb-8">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="font-poppins text-3xl font-bold md:text-4xl">
							Speaker Application
						</h1>
						<p className="mt-2 text-gray-300">
							Step {currentStep + 1} of {FORM_STEPS.length}: {currentStepData.title}
						</p>
					</div>
					<button
						onClick={onCancel}
						className="text-gray-400 hover:text-white"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			{/* Progress Bar */}
			<div className="mb-8">
				<div className="flex items-center justify-between mb-2">
					{FORM_STEPS.map((step, index) => (
						<div
							key={step.id}
							className={`flex items-center ${
								index < FORM_STEPS.length - 1 ? 'flex-1' : ''
							}`}
						>
							<div
								className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
									index <= currentStep
										? 'bg-purple-primary text-white'
										: 'bg-gray-700 text-gray-400'
								}`}
							>
								{index + 1}
							</div>
							{index < FORM_STEPS.length - 1 && (
								<div
									className={`flex-1 h-1 mx-2 ${
										index < currentStep ? 'bg-purple-primary' : 'bg-gray-700'
									}`}
								/>
							)}
						</div>
					))}
				</div>
				<p className="text-sm text-gray-400">{currentStepData.description}</p>
			</div>

			{/* Form */}
			<div className="card p-8">
				<div className="space-y-6">
					{currentFields.map(renderField)}
				</div>

				{/* Navigation */}
				<div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
					<button
						onClick={handlePrevious}
						disabled={currentStep === 0}
						className="flex items-center rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-purple-primary hover:text-purple-primary disabled:opacity-50 disabled:cursor-not-allowed"
					>
						<svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						Previous
					</button>

					{currentStep === FORM_STEPS.length - 1 ? (
						<button
							onClick={handleSubmit}
							disabled={isSubmitting}
							className="flex items-center rounded-lg bg-purple-primary px-8 py-3 font-medium text-white transition-colors hover:bg-purple-600 disabled:opacity-50"
						>
							{isSubmitting ? (
								<>
									<svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
										<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
										<path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
									</svg>
									Submitting...
								</>
							) : (
								<>
									Submit Application
									<svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</>
							)}
						</button>
					) : (
						<button
							onClick={handleNext}
							className="flex items-center rounded-lg bg-purple-primary px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
						>
							Next
							<svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					)}
				</div>
			</div>

			{/* Auto-save indicator */}
			<p className="mt-4 text-center text-sm text-gray-500">
				💾 Your progress is automatically saved
			</p>
		</div>
	);
}