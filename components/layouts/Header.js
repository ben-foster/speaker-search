'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/how-it-works', label: 'How it works' },
		{ href: '/speakers', label: 'For Speakers' },
	];

	return (
		<header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-800 bg-dark-bg-primary/95 backdrop-blur-md">
			<nav className="container-custom">
				<div className="flex h-20 items-center justify-between">
					<Logo />

					{/* Desktop Navigation */}
					<div className="hidden items-center space-x-8 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="p-2 text-gray-400 hover:text-white focus:outline-none md:hidden"
						aria-label="Toggle mobile menu"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="border-t border-gray-800 py-4 md:hidden">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block py-3 text-gray-300 transition-colors duration-200 hover:text-white"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</nav>
		</header>
	);
}
