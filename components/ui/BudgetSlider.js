'use client';

import { useState, useEffect } from 'react';

const budgetRanges = [
	{ value: 5000, label: '$5,000' },
	{ value: 20000, label: '$20,000' },
	{ value: 50000, label: '$50,000' },
	{ value: 100000, label: '$100,000' },
	{ value: 150000, label: '$150,000' },
	{ value: 200000, label: '$200,000+' },
];

export default function BudgetSlider({ value = 22000, onChange }) {
	const [currentValue, setCurrentValue] = useState(value);

	useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	const handleSliderChange = (e) => {
		const newValue = parseInt(e.target.value);
		setCurrentValue(newValue);
		onChange?.(newValue);
	};

	const formatBudget = (amount) => {
		if (amount >= 200000) return '$200,000+';
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	return (
		<div className="w-full">
			<div className="mb-4 text-center">
				<h3 className="mb-2 font-poppins text-lg font-semibold">
					My speaker booking budget
				</h3>
				<div className="text-2xl font-bold text-purple-primary">
					{formatBudget(currentValue)}
				</div>
			</div>

			<div className="relative">
				{/* Slider track */}
				<div className="relative h-2 rounded-full bg-gray-700">
					<div
						className="absolute h-2 rounded-full bg-gradient-to-r from-purple-primary to-purple-400"
						style={{
							width: `${(currentValue / 200000) * 100}%`,
						}}
					/>
				</div>

				{/* Slider input */}
				<input
					type="range"
					min={5000}
					max={200000}
					step={5000}
					value={currentValue}
					onChange={handleSliderChange}
					className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent focus:outline-none"
					style={{
						background: 'transparent',
					}}
				/>

				{/* Custom slider thumb */}
				<div
					className="absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-4 border-purple-primary bg-white shadow-lg transition-transform hover:scale-110"
					style={{
						left: `calc(${(currentValue / 200000) * 100}% - 12px)`,
					}}
				/>
			</div>

			{/* Budget range labels */}
			<div className="mt-4 flex justify-between text-sm text-gray-400">
				{budgetRanges.map((range, index) => (
					<div
						key={range.value}
						className={`${
							index === 0 || index === budgetRanges.length - 1
								? ''
								: 'hidden sm:block'
						}`}
					>
						{range.label}
					</div>
				))}
			</div>

			<style jsx>{`
				input[type='range']::-webkit-slider-thumb {
					appearance: none;
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background: #ffffff;
					border: 4px solid #7e3cff;
					cursor: pointer;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
				}

				input[type='range']::-moz-range-thumb {
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background: #ffffff;
					border: 4px solid #7e3cff;
					cursor: pointer;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
				}
			`}</style>
		</div>
	);
}
