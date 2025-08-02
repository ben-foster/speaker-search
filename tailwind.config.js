/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				purple: {
					primary: '#7e3cff',
				},
				dark: {
					bg: {
						primary: '#10091f',
						secondary: '#1a0e31',
					},
				},
				gray: {
					light: '#fbfbfb',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
