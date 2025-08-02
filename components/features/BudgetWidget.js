'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BudgetWidget() {
	const [budget, setBudget] = useState('');
	const router = useRouter();

	const parseBudgetInput = (input) => {
		// Remove common characters and convert to lowercase
		const cleaned = input.toLowerCase().replace(/[\$,\s]/g, '');

		// Handle range inputs like "5k-15k" or "10000-20000"
		if (cleaned.includes('-')) {
			const [min, max] = cleaned.split('-');
			const minValue = convertToNumber(min);
			const maxValue = convertToNumber(max);
			// Use the maximum value for budget filtering
			return maxValue || minValue || 50000;
		}

		// Handle single values
		return convertToNumber(cleaned) || 50000;
	};

	const convertToNumber = (str) => {
		if (!str) return null;

		// Handle 'k' suffix (thousands)
		if (str.includes('k')) {
			const num = parseFloat(str.replace('k', ''));
			return num * 1000;
		}

		// Handle 'm' suffix (millions)
		if (str.includes('m')) {
			const num = parseFloat(str.replace('m', ''));
			return num * 1000000;
		}

		// Handle regular numbers
		const num = parseFloat(str);
		return isNaN(num) ? null : num;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (budget.trim()) {
			const numericBudget = parseBudgetInput(budget);
			router.push(`/search?budget=${numericBudget}`);
		}
	};

	return (
		<section className="py-20">
			<div className="container-custom">
				<div className="mx-auto max-w-4xl">
					<div className="card relative overflow-hidden p-8 md:p-12">
						{/* Background decoration */}
						<div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-purple-primary/10 blur-3xl" />

						<div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
							<div className="text-center md:text-left">
								<div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-purple-primary/20">
									<svg
										className="h-12 w-12 text-purple-primary"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.93.66 1.64 2.08 1.64 1.51 0 2.1-.72 2.1-1.44 0-.66-.36-1.18-1.8-1.54l-1.26-.32c-1.83-.47-2.83-1.42-2.83-2.94 0-1.78 1.44-2.92 3.11-3.27V5h2.67v1.95c1.62.38 2.81 1.49 2.92 3.31h-1.96c-.1-.93-.65-1.64-1.96-1.64-1.25 0-1.91.64-1.91 1.36 0 .68.39 1.13 1.63 1.44l1.36.36c1.97.52 2.86 1.44 2.86 2.94 0 1.82-1.46 2.99-3.22 3.37z" />
									</svg>
								</div>

								<h2 className="mb-2 font-poppins text-2xl font-bold md:text-3xl">
									Who can I afford to book?
								</h2>

								<p className="text-gray-300">
									Not sure where to start? Enter your
									estimated budget range, and we&apos;ll show
									you a selection of the best available
									speakers.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<input
										type="text"
										value={budget}
										onChange={(e) =>
											setBudget(e.target.value)
										}
										placeholder="e.g. 10k or 5k-15k"
										className="input-primary text-center text-lg"
									/>
									<p className="mt-2 text-center text-sm text-gray-400">
										Examples: 10k, $15,000, 5k-15k, or 25000
									</p>
								</div>

								<button
									type="submit"
									className="btn-primary w-full text-lg"
								>
									Let&apos;s go!
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
