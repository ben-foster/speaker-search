import Link from 'next/link';

const footerLinks = {
	company: [
		{ href: '/about', label: 'About' },
		{ href: '/how-it-works', label: 'How it works' },
		{ href: '/contact', label: 'Contact' },
	],
	resources: [
		{ href: '/blog', label: 'Blog' },
		{ href: '/resources', label: 'Resources' },
		{ href: '/faq', label: 'FAQ' },
	],
	legal: [
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/cookies', label: 'Cookies' },
	],
	social: [
		{ href: '#', label: 'Twitter', icon: 'twitter' },
		{ href: '#', label: 'LinkedIn', icon: 'linkedin' },
		{ href: '#', label: 'Facebook', icon: 'facebook' },
	],
};

export default function Footer() {
	return (
		<footer className="border-t border-gray-800 bg-dark-bg-secondary">
			<div className="container-custom py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
					{/* Logo and Description */}
					<div className="md:col-span-2">
						<div className="mb-4 flex items-center space-x-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-primary">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									className="h-6 w-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="12"
										cy="9"
										r="3"
										fill="currentColor"
									/>
									<path
										d="M12 14C9 14 7 15.5 7 17.5V18H17V17.5C17 15.5 15 14 12 14Z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<span className="font-poppins text-xl font-bold">
								Speaker Search
							</span>
						</div>
						<p className="max-w-xs text-sm text-gray-400">
							The most comprehensive speaker database with natural
							language search. Find and book the perfect speaker
							for your event.
						</p>
					</div>

					{/* Links Sections */}
					<div>
						<h3 className="mb-4 font-semibold">Company</h3>
						<ul className="space-y-2">
							{footerLinks.company.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-gray-400 transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold">Resources</h3>
						<ul className="space-y-2">
							{footerLinks.resources.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-gray-400 transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-4 font-semibold">Legal</h3>
						<ul className="space-y-2">
							{footerLinks.legal.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-gray-400 transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
					<p className="mb-4 text-sm text-gray-400 md:mb-0">
						© 2025 Speaker Search. All rights reserved.
					</p>

					{/* Social Links */}
					<div className="flex space-x-4">
						{footerLinks.social.map((link) => (
							<a
								key={link.icon}
								href={link.href}
								className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-200 hover:bg-purple-primary/20 hover:text-purple-primary"
								aria-label={link.label}
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									{link.icon === 'twitter' && (
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									)}
									{link.icon === 'linkedin' && (
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									)}
									{link.icon === 'facebook' && (
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									)}
								</svg>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
