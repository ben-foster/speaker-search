import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function PrivacyPolicyPage() {
	const lastUpdated = 'December 20, 2024';

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-16 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Privacy Policy
						</h1>
						<p className="mx-auto max-w-3xl text-xl text-gray-300">
							Your privacy is important to us. This policy explains how we collect, 
							use, and protect your personal information.
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
								<a href="#information-collection" className="block text-purple-primary hover:underline">
									1. Information We Collect
								</a>
								<a href="#information-use" className="block text-purple-primary hover:underline">
									2. How We Use Your Information
								</a>
								<a href="#information-sharing" className="block text-purple-primary hover:underline">
									3. Information Sharing
								</a>
								<a href="#data-security" className="block text-purple-primary hover:underline">
									4. Data Security
								</a>
								<a href="#cookies" className="block text-purple-primary hover:underline">
									5. Cookies and Tracking
								</a>
							</div>
							<div className="space-y-2">
								<a href="#user-rights" className="block text-purple-primary hover:underline">
									6. Your Rights
								</a>
								<a href="#data-retention" className="block text-purple-primary hover:underline">
									7. Data Retention
								</a>
								<a href="#international-transfers" className="block text-purple-primary hover:underline">
									8. International Transfers
								</a>
								<a href="#children-privacy" className="block text-purple-primary hover:underline">
									9. Children&apos;s Privacy
								</a>
								<a href="#contact-us" className="block text-purple-primary hover:underline">
									10. Contact Us
								</a>
							</div>
						</div>
					</div>

					{/* Privacy Policy Content */}
					<div className="prose prose-invert max-w-none">
						<div className="space-y-12">

							{/* Introduction */}
							<section className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									Introduction
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Speaker Search (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
										This Privacy Policy explains how we collect, use, disclose, and safeguard your 
										information when you visit our website and use our services.
									</p>
									<p>
										By using our platform, you consent to the data practices described in this policy. 
										If you do not agree with the practices described in this policy, please do not 
										access or use our services.
									</p>
								</div>
							</section>

							{/* Information Collection */}
							<section id="information-collection" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									1. Information We Collect
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Personal Information
										</h3>
										<p className="mb-3">
											We may collect personal information that you voluntarily provide, including:
										</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Name, email address, and phone number</li>
											<li>Professional information (job title, company, industry)</li>
											<li>Speaking experience and expertise areas</li>
											<li>Payment and billing information</li>
											<li>Profile photos and professional materials</li>
											<li>Communication preferences</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Automatically Collected Information
										</h3>
										<p className="mb-3">
											When you use our platform, we automatically collect:
										</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>IP address and location data</li>
											<li>Browser type and version</li>
											<li>Operating system and device information</li>
											<li>Pages visited and time spent on our platform</li>
											<li>Referral sources and search terms</li>
											<li>User interactions and platform usage patterns</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Cookies and Similar Technologies
										</h3>
										<p>
											We use cookies, web beacons, and similar tracking technologies to enhance 
											your experience and collect information about your usage patterns. See our 
											Cookie Policy for detailed information.
										</p>
									</div>
								</div>
							</section>

							{/* Information Use */}
							<section id="information-use" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									2. How We Use Your Information
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>We use the collected information for the following purposes:</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Providing and maintaining our platform services</li>
										<li>Processing transactions and managing payments</li>
										<li>Matching speakers with relevant event opportunities</li>
										<li>Communicating with users about bookings and platform updates</li>
										<li>Improving our services through data analysis</li>
										<li>Preventing fraud and ensuring platform security</li>
										<li>Complying with legal obligations</li>
										<li>Marketing our services (with your consent)</li>
										<li>Responding to customer support inquiries</li>
									</ul>
								</div>
							</section>

							{/* Information Sharing */}
							<section id="information-sharing" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									3. Information Sharing
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											With Other Users
										</h3>
										<p>
											Speaker profiles and relevant information are shared with event planners 
											to facilitate bookings. Event planner information may be shared with 
											speakers during the booking process.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											With Service Providers
										</h3>
										<p className="mb-3">
											We may share information with trusted third-party service providers who 
											assist us in operating our platform:
										</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Payment processing companies</li>
											<li>Cloud hosting and data storage providers</li>
											<li>Analytics and marketing platforms</li>
											<li>Customer support tools</li>
											<li>Email and communication services</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Legal Requirements
										</h3>
										<p>
											We may disclose your information when required by law, court order, or 
											government authority, or to protect our rights, property, or safety.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Business Transfers
										</h3>
										<p>
											In the event of a merger, acquisition, or sale of assets, your information 
											may be transferred to the new entity.
										</p>
									</div>
								</div>
							</section>

							{/* Data Security */}
							<section id="data-security" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									4. Data Security
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										We implement appropriate technical and organizational security measures to 
										protect your personal information against unauthorized access, alteration, 
										disclosure, or destruction.
									</p>
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Security Measures Include:
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li>Encryption of data in transit and at rest</li>
											<li>Regular security audits and vulnerability assessments</li>
											<li>Access controls and authentication systems</li>
											<li>Employee training on data protection</li>
											<li>Secure payment processing (PCI DSS compliant)</li>
											<li>Regular data backups and disaster recovery procedures</li>
										</ul>
									</div>
									<p>
										However, no method of transmission over the internet or electronic storage 
										is 100% secure. While we strive to protect your information, we cannot 
										guarantee absolute security.
									</p>
								</div>
							</section>

							{/* Cookies */}
							<section id="cookies" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									5. Cookies and Tracking Technologies
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										We use cookies and similar tracking technologies to enhance your experience 
										and collect information about your usage patterns.
									</p>
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Types of Cookies We Use:
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
											<li><strong>Performance Cookies:</strong> Help us understand how users interact with our platform</li>
											<li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
											<li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
										</ul>
									</div>
									<p>
										You can control cookie settings through your browser preferences. However, 
										disabling certain cookies may affect platform functionality. For detailed 
										information, see our Cookie Policy.
									</p>
								</div>
							</section>

							{/* User Rights */}
							<section id="user-rights" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									6. Your Rights
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Depending on your location, you may have the following rights regarding 
										your personal information:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li><strong>Access:</strong> Request access to your personal information</li>
										<li><strong>Rectification:</strong> Request correction of inaccurate information</li>
										<li><strong>Erasure:</strong> Request deletion of your personal information</li>
										<li><strong>Portability:</strong> Request transfer of your data to another service</li>
										<li><strong>Restriction:</strong> Request limitation of processing your information</li>
										<li><strong>Objection:</strong> Object to processing of your information</li>
										<li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
									</ul>
									<p>
										To exercise these rights, please contact us using the information provided 
										in the &quot;Contact Us&quot; section. We will respond to your request within the 
										timeframe required by applicable law.
									</p>
								</div>
							</section>

							{/* Data Retention */}
							<section id="data-retention" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									7. Data Retention
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										We retain your personal information for as long as necessary to fulfill the 
										purposes outlined in this Privacy Policy, comply with legal obligations, 
										resolve disputes, and enforce our agreements.
									</p>
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Retention Periods:
										</h3>
										<ul className="list-disc pl-6 space-y-2">
											<li><strong>Account Information:</strong> Until account deletion or 3 years after last activity</li>
											<li><strong>Transaction Records:</strong> 7 years for tax and accounting purposes</li>
											<li><strong>Communication Records:</strong> 3 years for customer service purposes</li>
											<li><strong>Marketing Data:</strong> Until you opt out or 2 years of inactivity</li>
											<li><strong>Security Logs:</strong> 1 year for security and fraud prevention</li>
										</ul>
									</div>
									<p>
										When we delete your information, we will do so in a secure manner to prevent 
										unauthorized recovery.
									</p>
								</div>
							</section>

							{/* International Transfers */}
							<section id="international-transfers" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									8. International Data Transfers
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Your information may be transferred to and processed in countries other than 
										your country of residence. We ensure that such transfers comply with 
										applicable data protection laws.
									</p>
									<p>
										For transfers from the European Economic Area (EEA) to countries without 
										adequate data protection laws, we implement appropriate safeguards such as:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Standard Contractual Clauses approved by the European Commission</li>
										<li>Adequacy decisions by the European Commission</li>
										<li>Binding Corporate Rules where applicable</li>
									</ul>
								</div>
							</section>

							{/* Children's Privacy */}
							<section id="children-privacy" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									9. Children&apos;s Privacy
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Our platform is not intended for children under 16 years of age. We do not 
										knowingly collect personal information from children under 16.
									</p>
									<p>
										If we become aware that we have collected personal information from a child 
										under 16 without parental consent, we will take steps to delete that 
										information promptly.
									</p>
									<p>
										If you believe we have collected information from a child under 16, please 
										contact us immediately.
									</p>
								</div>
							</section>

							{/* Changes to Policy */}
							<section className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									Changes to This Privacy Policy
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										We may update this Privacy Policy from time to time. We will notify you of 
										any changes by posting the new Privacy Policy on this page and updating the 
										&quot;Last Updated&quot; date.
									</p>
									<p>
										For material changes, we will provide additional notice, such as sending an 
										email notification or displaying a prominent notice on our platform.
									</p>
									<p>
										Your continued use of our platform after any changes indicates your 
										acceptance of the updated Privacy Policy.
									</p>
								</div>
							</section>

							{/* Contact Us */}
							<section id="contact-us" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									10. Contact Us
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										If you have any questions about this Privacy Policy or our privacy practices, 
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
													Speaker Search<br />
													123 Business Plaza, Suite 400<br />
													San Francisco, CA 94105<br />
													United States
												</p>
											</div>
										</div>
									</div>
									<p>
										For data protection inquiries from the European Union, you may also contact 
										our EU representative or lodge a complaint with your local data protection 
										authority.
									</p>
								</div>
							</section>

						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}