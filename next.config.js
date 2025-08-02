/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'], // Add your API domain here
		formats: ['image/avif', 'image/webp'],
	},
	compress: true,
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
