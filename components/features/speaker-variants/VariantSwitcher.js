import Link from 'next/link';

export default function VariantSwitcher({ currentVariant, speakerId }) {
	const variants = [
		{ number: 1, name: 'Image Gallery', color: 'from-purple-600 to-purple-700' },
		{ number: 2, name: 'Single Featured Image', color: 'from-purple-600 to-purple-700' },
	];

	return (
		<div className="fixed top-20 right-4 z-40 bg-dark-bg-secondary/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-gray-800">
			<div className="text-xs text-gray-400 mb-2 text-center font-medium">
				Design Variant
			</div>
			<div className="flex flex-col gap-1">
				{variants.map((variant) => (
					<Link
						key={variant.number}
						href={`/speakers/${speakerId}/${variant.number}`}
						className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
							currentVariant === variant.number
								? `bg-gradient-to-r ${variant.color} text-white shadow-lg scale-105`
								: 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white'
						}`}
					>
						<span className="flex items-center gap-2">
							<span className="font-bold">{variant.number}</span>
							<span className="hidden sm:inline">{variant.name}</span>
						</span>
						{currentVariant === variant.number && (
							<div className="absolute inset-0 rounded-lg bg-white/10 animate-pulse" />
						)}
					</Link>
				))}
			</div>
		</div>
	);
}