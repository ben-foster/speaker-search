'use client';

export default function CookieSettings() {
	const handleCookieSettings = () => {
		// This would trigger the cookie consent modal
		// For now, we'll just show an alert
		alert('Cookie consent modal would open here');
	};

	return (
		<div className="card p-8 text-center mt-12">
			<h2 className="mb-4 font-poppins text-2xl font-bold">
				Manage Your Cookie Preferences
			</h2>
			<p className="mb-6 text-gray-300 max-w-2xl mx-auto">
				Want to update your cookie settings? You can manage your preferences 
				and control which cookies are allowed on your device.
			</p>
			<button 
				className="btn-primary mr-4"
				onClick={handleCookieSettings}
			>
				Cookie Settings
			</button>
			<a 
				href="/privacy"
				className="btn-secondary"
			>
				Privacy Policy
			</a>
		</div>
	);
}