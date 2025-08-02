'use client';

export default function FilterPills({ filters = [], onRemoveFilter }) {
	if (!filters.length) return null;

	return (
		<div className="flex flex-wrap gap-2">
			{filters.map((filter) => (
				<div
					key={filter.id}
					className="flex items-center gap-2 rounded-full border border-purple-primary/30 bg-purple-primary/10 px-3 py-1 text-sm"
				>
					<span className="text-purple-primary">{filter.label}</span>
					<button
						onClick={() => onRemoveFilter?.(filter.id)}
						className="flex h-4 w-4 items-center justify-center rounded-full text-purple-primary/70 hover:bg-purple-primary/20 hover:text-purple-primary"
						aria-label={`Remove ${filter.label} filter`}
					>
						<svg
							className="h-3 w-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			))}
		</div>
	);
}
