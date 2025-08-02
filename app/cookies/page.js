import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import CookieSettings from '@/components/features/CookieSettings';

export default function CookiePolicyPage() {
	const lastUpdated = 'December 20, 2024';

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-16 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Cookie Policy
						</h1>
						<p className="mx-auto max-w-3xl text-xl text-gray-300">
							This policy explains how Speaker Search uses cookies and similar 
							technologies to enhance your experience on our platform.
						</p>
						<p className="mt-4 text-sm text-gray-400">
							Last updated: {lastUpdated}
						</p>
					</div>

					{/* Table of Contents */}
					<div className="card p-8 mb-12">
						<h2 className="mb-6 font-poppins text-2xl font-bold">
							Table of Contents
						</h2>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<a href="#what-are-cookies" className="block text-purple-primary hover:underline">
									1. What Are Cookies?
								</a>
								<a href="#how-we-use-cookies" className="block text-purple-primary hover:underline">
									2. How We Use Cookies
								</a>
								<a href="#types-of-cookies" className="block text-purple-primary hover:underline">
									3. Types of Cookies
								</a>
								<a href="#third-party-cookies" className="block text-purple-primary hover:underline">
									4. Third-Party Cookies
								</a>
								<a href="#cookie-management" className="block text-purple-primary hover:underline">
									5. Managing Cookies
								</a>
							</div>
							<div className="space-y-2">
								<a href="#cookie-consent" className="block text-purple-primary hover:underline">
									6. Cookie Consent
								</a>
								<a href="#cookie-list" className="block text-purple-primary hover:underline">
									7. Detailed Cookie List
								</a>
								<a href="#updates" className="block text-purple-primary hover:underline">
									8. Policy Updates
								</a>
								<a href="#contact" className="block text-purple-primary hover:underline">
									9. Contact Us
								</a>
							</div>
						</div>
					</div>

					{/* Cookie Policy Content */}
					<div className="prose prose-invert max-w-none">
						<div className="space-y-12">

							{/* What Are Cookies */}
							<section id="what-are-cookies" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									1. What Are Cookies?
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Cookies are small text files that are stored on your device (computer, 
										tablet, or mobile) when you visit a website. They are widely used to 
										make websites work more efficiently and provide a better user experience.
									</p>
									<p>
										Cookies contain information about your browsing activity and preferences, 
										allowing websites to remember your settings and provide personalized content.
									</p>
									<p>
										In addition to cookies, we may use similar technologies such as:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li><strong>Web beacons:</strong> Small graphic images that track user behavior</li>
										<li><strong>Local storage:</strong> Browser storage for website preferences</li>
										<li><strong>Session storage:</strong> Temporary storage for the current browsing session</li>
										<li><strong>Pixels:</strong> Tiny tracking images embedded in web pages or emails</li>
									</ul>
								</div>
							</section>

							{/* How We Use Cookies */}
							<section id="how-we-use-cookies" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									2. How We Use Cookies
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Speaker Search uses cookies to enhance your experience on our platform. 
										We use cookies for the following purposes:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li><strong>Essential functionality:</strong> Enable core platform features and security</li>
										<li><strong>User preferences:</strong> Remember your settings and customizations</li>
										<li><strong>Authentication:</strong> Keep you logged in and secure your account</li>
										<li><strong>Performance monitoring:</strong> Understand how our platform is used</li>
										<li><strong>Analytics:</strong> Measure and improve our services</li>
										<li><strong>Personalization:</strong> Provide relevant content and recommendations</li>
										<li><strong>Advertising:</strong> Deliver relevant advertisements and measure their effectiveness</li>
									</ul>
									<p>
										By using our platform, you consent to our use of cookies as described 
										in this policy, unless you have disabled them through your browser settings.
									</p>
								</div>
							</section>

							{/* Types of Cookies */}
							<section id="types-of-cookies" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									3. Types of Cookies We Use
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Essential Cookies
										</h3>
										<p className="mb-3">
											These cookies are strictly necessary for our platform to function. 
											They cannot be disabled without affecting core functionality.
										</p>
										<div className="bg-dark-bg-secondary p-4 rounded-lg">
											<h4 className="font-semibold text-white mb-2">Examples:</h4>
											<ul className="list-disc pl-6 space-y-1">
												<li>User authentication and session management</li>
												<li>Security and fraud prevention</li>
												<li>Load balancing and performance optimization</li>
												<li>CSRF protection tokens</li>
												<li>Cookie consent preferences</li>
											</ul>
										</div>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Functional Cookies
										</h3>
										<p className="mb-3">
											These cookies enhance functionality and personalization but are 
											not essential for basic operation.
										</p>
										<div className="bg-dark-bg-secondary p-4 rounded-lg">
											<h4 className="font-semibold text-white mb-2">Examples:</h4>
											<ul className="list-disc pl-6 space-y-1">
												<li>Language and region preferences</li>
												<li>User interface customizations</li>
												<li>Search filters and sorting preferences</li>
												<li>Form data retention</li>
												<li>Accessibility settings</li>
											</ul>
										</div>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Performance Cookies
										</h3>
										<p className="mb-3">
											These cookies collect information about how you use our platform 
											to help us improve performance and user experience.
										</p>
										<div className="bg-dark-bg-secondary p-4 rounded-lg">
											<h4 className="font-semibold text-white mb-2">Examples:</h4>
											<ul className="list-disc pl-6 space-y-1">
												<li>Page load times and performance metrics</li>
												<li>Error tracking and debugging information</li>
												<li>Feature usage analytics</li>
												<li>A/B testing variations</li>
												<li>Conversion tracking</li>
											</ul>
										</div>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Marketing Cookies
										</h3>
										<p className="mb-3">
											These cookies track your browsing activity to deliver relevant 
											advertisements and measure marketing campaign effectiveness.
										</p>
										<div className="bg-dark-bg-secondary p-4 rounded-lg">
											<h4 className="font-semibold text-white mb-2">Examples:</h4>
											<ul className="list-disc pl-6 space-y-1">
												<li>Social media integration and sharing</li>
												<li>Targeted advertising and retargeting</li>
												<li>Campaign attribution and ROI measurement</li>
												<li>Cross-platform user identification</li>
												<li>Interest-based content recommendations</li>
											</ul>
										</div>
									</div>
								</div>
							</section>

							{/* Third-Party Cookies */}
							<section id="third-party-cookies" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									4. Third-Party Cookies
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<p>
										We work with trusted third-party service providers who may set cookies 
										on our platform to provide their services. These include:
									</p>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Analytics Services
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
											<li><strong>Hotjar:</strong> User experience and heatmap tracking</li>
											<li><strong>Mixpanel:</strong> Event tracking and user journey analysis</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Marketing and Advertising
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
											<li><strong>Facebook Pixel:</strong> Social media advertising and retargeting</li>
											<li><strong>LinkedIn Insight Tag:</strong> Professional networking and B2B advertising</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Support and Communication
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li><strong>Intercom:</strong> Customer support chat functionality</li>
											<li><strong>Mailchimp:</strong> Email marketing and newsletters</li>
											<li><strong>Calendly:</strong> Meeting scheduling integration</li>
										</ul>
									</div>

									<p>
										These third parties have their own privacy policies and cookie practices. 
										We recommend reviewing their policies to understand how they use cookies.
									</p>
								</div>
							</section>

							{/* Cookie Management */}
							<section id="cookie-management" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									5. Managing Your Cookie Preferences
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Browser Settings
										</h3>
										<p className="mb-3">
											You can control cookies through your browser settings. Here&apos;s how 
											to manage cookies in popular browsers:
										</p>
										<ul className="list-disc pl-6 space-y-2">
											<li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
											<li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
											<li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
											<li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Cookie Consent Tool
										</h3>
										<p>
											We provide a cookie consent banner when you first visit our platform. 
											You can update your preferences at any time by clicking the 
											&quot;Cookie Settings&quot; link in our footer.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Opt-Out Options
										</h3>
										<p className="mb-3">
											You can opt out of specific tracking services:
										</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">Browser Opt-out Add-on</a></li>
											<li>Google Ads: <a href="https://adssettings.google.com" className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">Ad Settings</a></li>
											<li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
											<li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" className="text-purple-primary hover:underline" target="_blank" rel="noopener noreferrer">Opt-out Tool</a></li>
										</ul>
									</div>

									<div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30">
										<h4 className="font-semibold text-yellow-400 mb-2">⚠️ Important Note:</h4>
										<p>
											Disabling certain cookies may affect the functionality of our platform. 
											Essential cookies cannot be disabled as they are necessary for security 
											and basic operation.
										</p>
									</div>
								</div>
							</section>

							{/* Cookie Consent */}
							<section id="cookie-consent" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									6. Cookie Consent
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										We respect your privacy choices and provide clear options for cookie consent:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li><strong>Initial Consent:</strong> Cookie banner appears on first visit</li>
										<li><strong>Granular Control:</strong> Choose specific cookie categories</li>
										<li><strong>Easy Management:</strong> Update preferences anytime</li>
										<li><strong>Clear Information:</strong> Detailed descriptions of each cookie type</li>
									</ul>
									<p>
										Your consent choices are stored locally and respected across all pages 
										of our platform. You can withdraw or modify your consent at any time.
									</p>
								</div>
							</section>

							{/* Detailed Cookie List */}
							<section id="cookie-list" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									7. Detailed Cookie List
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<p>
										Below is a detailed list of cookies we use on our platform:
									</p>

									<div className="overflow-x-auto">
										<table className="w-full border-collapse border border-gray-700">
											<thead>
												<tr className="bg-dark-bg-secondary">
													<th className="border border-gray-700 px-4 py-2 text-left font-semibold text-white">Cookie Name</th>
													<th className="border border-gray-700 px-4 py-2 text-left font-semibold text-white">Purpose</th>
													<th className="border border-gray-700 px-4 py-2 text-left font-semibold text-white">Duration</th>
													<th className="border border-gray-700 px-4 py-2 text-left font-semibold text-white">Type</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">session_token</td>
													<td className="border border-gray-700 px-4 py-2">User authentication and security</td>
													<td className="border border-gray-700 px-4 py-2">Session</td>
													<td className="border border-gray-700 px-4 py-2">Essential</td>
												</tr>
												<tr className="bg-gray-800/30">
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">csrf_token</td>
													<td className="border border-gray-700 px-4 py-2">Cross-site request forgery protection</td>
													<td className="border border-gray-700 px-4 py-2">Session</td>
													<td className="border border-gray-700 px-4 py-2">Essential</td>
												</tr>
												<tr>
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">user_preferences</td>
													<td className="border border-gray-700 px-4 py-2">Store user settings and preferences</td>
													<td className="border border-gray-700 px-4 py-2">1 year</td>
													<td className="border border-gray-700 px-4 py-2">Functional</td>
												</tr>
												<tr className="bg-gray-800/30">
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">_ga</td>
													<td className="border border-gray-700 px-4 py-2">Google Analytics - user identification</td>
													<td className="border border-gray-700 px-4 py-2">2 years</td>
													<td className="border border-gray-700 px-4 py-2">Performance</td>
												</tr>
												<tr>
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">_gid</td>
													<td className="border border-gray-700 px-4 py-2">Google Analytics - session identification</td>
													<td className="border border-gray-700 px-4 py-2">24 hours</td>
													<td className="border border-gray-700 px-4 py-2">Performance</td>
												</tr>
												<tr className="bg-gray-800/30">
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">_fbp</td>
													<td className="border border-gray-700 px-4 py-2">Facebook Pixel - advertising and tracking</td>
													<td className="border border-gray-700 px-4 py-2">3 months</td>
													<td className="border border-gray-700 px-4 py-2">Marketing</td>
												</tr>
												<tr>
													<td className="border border-gray-700 px-4 py-2 font-mono text-sm">cookie_consent</td>
													<td className="border border-gray-700 px-4 py-2">Store cookie consent preferences</td>
													<td className="border border-gray-700 px-4 py-2">1 year</td>
													<td className="border border-gray-700 px-4 py-2">Essential</td>
												</tr>
											</tbody>
										</table>
									</div>

									<p className="text-sm text-gray-400">
										This list may not be exhaustive as cookies can change over time. 
										We regularly update this policy to reflect current cookie usage.
									</p>
								</div>
							</section>

							{/* Updates */}
							<section id="updates" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									8. Policy Updates
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										We may update this Cookie Policy from time to time to reflect changes 
										in our practices or applicable laws. When we make changes, we will:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Update the &quot;Last Updated&quot; date at the top of this policy</li>
										<li>Notify you through our platform or via email for significant changes</li>
										<li>Request renewed consent where required by law</li>
									</ul>
									<p>
										We encourage you to review this policy periodically to stay informed 
										about our cookie practices.
									</p>
								</div>
							</section>

							{/* Contact */}
							<section id="contact" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									9. Contact Us
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										If you have questions about our use of cookies or this Cookie Policy, 
										please contact us:
									</p>
									<div className="bg-dark-bg-secondary p-6 rounded-lg">
										<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
											<div>
												<h4 className="font-semibold text-white mb-2">Email</h4>
												<a 
													href="mailto:privacy@speakersearch.com"
													className="text-purple-primary hover:underline"
												>
													privacy@speakersearch.com
												</a>
											</div>
											<div>
												<h4 className="font-semibold text-white mb-2">Phone</h4>
												<a 
													href="tel:+1-555-123-4567"
													className="text-purple-primary hover:underline"
												>
													+1 (555) 123-4567
												</a>
											</div>
											<div className="md:col-span-2">
												<h4 className="font-semibold text-white mb-2">Address</h4>
												<p>
													Speaker Search - Data Protection Officer<br />
													123 Business Plaza, Suite 400<br />
													San Francisco, CA 94105<br />
													United States
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>

						</div>
					</div>

					{/* Cookie Settings CTA */}
					<CookieSettings />
				</div>
			</main>
			<Footer />
		</>
	);
}