import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function TermsOfServicePage() {
	const lastUpdated = 'December 20, 2024';

	return (
		<>
			<Header />
			<main className="min-h-screen bg-dark-bg-primary text-white">
				<div className="container mx-auto px-6 pt-28 pb-16">
					{/* Hero Section */}
					<div className="mb-16 text-center">
						<h1 className="mb-6 font-poppins text-4xl font-bold md:text-6xl">
							Terms of Service
						</h1>
						<p className="mx-auto max-w-3xl text-xl text-gray-300">
							Please read these terms carefully before using our platform. 
							By using Speaker Search, you agree to these terms and conditions.
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
								<a href="#acceptance" className="block text-purple-primary hover:underline">
									1. Acceptance of Terms
								</a>
								<a href="#description" className="block text-purple-primary hover:underline">
									2. Description of Service
								</a>
								<a href="#user-accounts" className="block text-purple-primary hover:underline">
									3. User Accounts
								</a>
								<a href="#user-conduct" className="block text-purple-primary hover:underline">
									4. User Conduct
								</a>
								<a href="#speaker-terms" className="block text-purple-primary hover:underline">
									5. Speaker Terms
								</a>
								<a href="#event-planner-terms" className="block text-purple-primary hover:underline">
									6. Event Planner Terms
								</a>
								<a href="#payments" className="block text-purple-primary hover:underline">
									7. Payments and Fees
								</a>
							</div>
							<div className="space-y-2">
								<a href="#intellectual-property" className="block text-purple-primary hover:underline">
									8. Intellectual Property
								</a>
								<a href="#privacy" className="block text-purple-primary hover:underline">
									9. Privacy
								</a>
								<a href="#disclaimers" className="block text-purple-primary hover:underline">
									10. Disclaimers
								</a>
								<a href="#limitation-liability" className="block text-purple-primary hover:underline">
									11. Limitation of Liability
								</a>
								<a href="#indemnification" className="block text-purple-primary hover:underline">
									12. Indemnification
								</a>
								<a href="#termination" className="block text-purple-primary hover:underline">
									13. Termination
								</a>
								<a href="#general" className="block text-purple-primary hover:underline">
									14. General Provisions
								</a>
							</div>
						</div>
					</div>

					{/* Terms of Service Content */}
					<div className="prose prose-invert max-w-none">
						<div className="space-y-12">

							{/* Acceptance */}
							<section id="acceptance" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									1. Acceptance of Terms
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										These Terms of Service ("Terms") constitute a legally binding agreement between 
										you and Speaker Search ("Company," "we," "us," or "our") regarding your use 
										of our platform and services.
									</p>
									<p>
										By accessing or using our platform, you agree to be bound by these Terms. 
										If you do not agree to these Terms, please do not use our services.
									</p>
									<p>
										We may modify these Terms at any time. Your continued use of the platform 
										after any such changes constitutes your acceptance of the new Terms.
									</p>
								</div>
							</section>

							{/* Description of Service */}
							<section id="description" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									2. Description of Service
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Speaker Search is an online platform that connects professional speakers 
										with event planners. Our services include:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Speaker profile creation and management</li>
										<li>Event opportunity matching and recommendations</li>
										<li>Communication tools between speakers and event planners</li>
										<li>Booking management and coordination</li>
										<li>Payment processing and transaction support</li>
										<li>Educational resources and industry insights</li>
									</ul>
									<p>
										We reserve the right to modify, suspend, or discontinue any part of our 
										services at any time with or without notice.
									</p>
								</div>
							</section>

							{/* User Accounts */}
							<section id="user-accounts" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									3. User Accounts
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Account Creation
										</h3>
										<p>
											To use certain features of our platform, you must create an account. 
											You agree to provide accurate, current, and complete information and 
											to update your information as necessary.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Account Security
										</h3>
										<p>You are responsible for:</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Maintaining the confidentiality of your account credentials</li>
											<li>All activities that occur under your account</li>
											<li>Notifying us immediately of any unauthorized access</li>
											<li>Ensuring your account information is accurate and up-to-date</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Account Eligibility
										</h3>
										<p>
											You must be at least 18 years old and have the legal capacity to 
											enter into contracts. By creating an account, you represent and 
											warrant that you meet these requirements.
										</p>
									</div>
								</div>
							</section>

							{/* User Conduct */}
							<section id="user-conduct" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									4. User Conduct
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>You agree not to use our platform to:</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Violate any applicable laws or regulations</li>
										<li>Infringe upon intellectual property rights</li>
										<li>Transmit harmful, threatening, or offensive content</li>
										<li>Impersonate another person or entity</li>
										<li>Attempt to gain unauthorized access to our systems</li>
										<li>Interfere with or disrupt our services</li>
										<li>Collect personal information without consent</li>
										<li>Use automated systems to access our platform</li>
										<li>Engage in fraudulent or deceptive practices</li>
										<li>Spam or send unsolicited communications</li>
									</ul>
									<p>
										We reserve the right to investigate violations and take appropriate action, 
										including account suspension or termination.
									</p>
								</div>
							</section>

							{/* Speaker Terms */}
							<section id="speaker-terms" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									5. Speaker Terms
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Profile Information
										</h3>
										<p>As a speaker, you agree to:</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Provide accurate and truthful information in your profile</li>
											<li>Keep your availability calendar updated</li>
											<li>Respond promptly to booking inquiries</li>
											<li>Maintain professional standards in all communications</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Fee Structure
										</h3>
										<p>
											Speakers retain 85-90% of their booking fees, with Speaker Search 
											taking a 10-15% commission on successful bookings. Commission rates 
											may vary based on speaker tier and booking volume.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Speaking Engagements
										</h3>
										<p>When you accept a speaking engagement, you agree to:</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Deliver the agreed-upon presentation professionally</li>
											<li>Arrive prepared and on time</li>
											<li>Fulfill all contractual obligations</li>
											<li>Maintain confidentiality when required</li>
										</ul>
									</div>
								</div>
							</section>

							{/* Event Planner Terms */}
							<section id="event-planner-terms" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									6. Event Planner Terms
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Platform Usage
										</h3>
										<p>Event planners may use our platform free of charge. You agree to:</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Provide accurate event information</li>
											<li>Communicate professionally with speakers</li>
											<li>Honor confirmed bookings and contracts</li>
											<li>Make timely payments as agreed</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Event Information
										</h3>
										<p>
											You are responsible for providing complete and accurate information 
											about your events, including dates, venues, audience size, and 
											specific requirements.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Speaker Relations
										</h3>
										<p>
											You agree to treat speakers professionally and provide necessary 
											event details, technical requirements, and logistics information 
											in a timely manner.
										</p>
									</div>
								</div>
							</section>

							{/* Payments */}
							<section id="payments" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									7. Payments and Fees
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Payment Processing
										</h3>
										<p>
											All payments are processed through our secure payment system. 
											We use third-party payment processors and are PCI DSS compliant.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Commission Structure
										</h3>
										<p>
											Speaker Search earns revenue through commissions on successful 
											bookings. Our commission is included in the total booking fee 
											and is not an additional charge to event planners.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Refunds and Cancellations
										</h3>
										<p>
											Refund and cancellation policies are determined by individual 
											agreements between speakers and event planners. We facilitate 
											these arrangements but are not responsible for disputes.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Tax Responsibility
										</h3>
										<p>
											Users are responsible for their own tax obligations. We provide 
											transaction records and tax documentation as required by law.
										</p>
									</div>
								</div>
							</section>

							{/* Intellectual Property */}
							<section id="intellectual-property" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									8. Intellectual Property
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Platform Content
										</h3>
										<p>
											The Speaker Search platform, including its design, features, and 
											content, is owned by us and protected by intellectual property laws. 
											You may not copy, modify, or redistribute our platform without permission.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											User Content
										</h3>
										<p>
											You retain ownership of content you upload to our platform. By 
											uploading content, you grant us a non-exclusive, worldwide license 
											to use, display, and distribute your content for platform operations.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Copyright Infringement
										</h3>
										<p>
											We respect intellectual property rights and will respond to valid 
											copyright infringement notices in accordance with the Digital 
											Millennium Copyright Act (DMCA).
										</p>
									</div>
								</div>
							</section>

							{/* Privacy */}
							<section id="privacy" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									9. Privacy
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										Your privacy is important to us. Our Privacy Policy explains how we 
										collect, use, and protect your information. By using our platform, 
										you consent to our privacy practices as described in our Privacy Policy.
									</p>
									<p>
										We implement appropriate security measures to protect your personal 
										information and comply with applicable data protection laws, including 
										GDPR and CCPA.
									</p>
								</div>
							</section>

							{/* Disclaimers */}
							<section id="disclaimers" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									10. Disclaimers
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										OUR PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES 
										OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
										WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND 
										NON-INFRINGEMENT.
									</p>
									<p>
										We do not guarantee:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Uninterrupted or error-free operation of our platform</li>
										<li>The accuracy or reliability of user-generated content</li>
										<li>Successful bookings or satisfaction with services</li>
										<li>The quality or performance of speakers or events</li>
									</ul>
									<p>
										We are not a party to agreements between speakers and event planners 
										and do not guarantee the performance of either party.
									</p>
								</div>
							</section>

							{/* Limitation of Liability */}
							<section id="limitation-liability" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									11. Limitation of Liability
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPEAKER SEARCH SHALL NOT BE 
										LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
										PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
										DATA, OR USE.
									</p>
									<p>
										Our total liability for any claims arising from your use of our 
										platform shall not exceed the amount you paid to us in the twelve 
										months preceding the claim.
									</p>
									<p>
										Some jurisdictions do not allow the exclusion or limitation of 
										certain damages, so these limitations may not apply to you.
									</p>
								</div>
							</section>

							{/* Indemnification */}
							<section id="indemnification" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									12. Indemnification
								</h2>
								<div className="space-y-4 text-gray-300 leading-relaxed">
									<p>
										You agree to indemnify, defend, and hold harmless Speaker Search, 
										its officers, directors, employees, and agents from any claims, 
										damages, or expenses arising from:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>Your use of our platform</li>
										<li>Your violation of these Terms</li>
										<li>Your violation of any third-party rights</li>
										<li>Content you upload or share on our platform</li>
										<li>Your interactions with other users</li>
									</ul>
									<p>
										This indemnification obligation survives termination of your account 
										or these Terms.
									</p>
								</div>
							</section>

							{/* Termination */}
							<section id="termination" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									13. Termination
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											By You
										</h3>
										<p>
											You may terminate your account at any time by contacting us or 
											using the account deletion feature in your profile settings.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											By Us
										</h3>
										<p>
											We may suspend or terminate your account if you violate these 
											Terms, engage in fraudulent activity, or for any other reason 
											at our sole discretion.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Effect of Termination
										</h3>
										<p>
											Upon termination, your access to our platform will cease, but 
											your obligations under these Terms will survive. We may retain 
											certain information as required by law or for legitimate business purposes.
										</p>
									</div>
								</div>
							</section>

							{/* General Provisions */}
							<section id="general" className="card p-8">
								<h2 className="mb-6 font-poppins text-2xl font-bold">
									14. General Provisions
								</h2>
								<div className="space-y-6 text-gray-300 leading-relaxed">
									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Governing Law
										</h3>
										<p>
											These Terms are governed by the laws of the State of California, 
											without regard to conflict of law principles.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Dispute Resolution
										</h3>
										<p>
											Any disputes arising from these Terms or your use of our platform 
											shall be resolved through binding arbitration in accordance with 
											the rules of the American Arbitration Association.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Severability
										</h3>
										<p>
											If any provision of these Terms is found to be unenforceable, 
											the remaining provisions will remain in full force and effect.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Entire Agreement
										</h3>
										<p>
											These Terms, together with our Privacy Policy, constitute the 
											entire agreement between you and Speaker Search regarding your 
											use of our platform.
										</p>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white mb-3">
											Contact Information
										</h3>
										<p>
											For questions about these Terms, please contact us at:
										</p>
										<div className="bg-dark-bg-secondary p-4 rounded-lg mt-4">
											<p>
												<strong>Email:</strong> <a href="mailto:legal@speakersearch.com" className="text-purple-primary hover:underline">legal@speakersearch.com</a><br />
												<strong>Phone:</strong> <a href="tel:+1-555-123-4567" className="text-purple-primary hover:underline">+1 (555) 123-4567</a><br />
												<strong>Address:</strong> 123 Business Plaza, Suite 400, San Francisco, CA 94105
											</p>
										</div>
									</div>
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