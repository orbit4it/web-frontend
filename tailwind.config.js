/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				home: "url('/assets/img/BgHome.png')",
			},
			colors: {
				primary: '#0A013D',
				secondary: '#EE2ED1',
				tertiary: '#EF2ED2',
				purple: '#EE2ED1',
				purpleFooter: '#4B0B7C',
				NavlinkGradient: '',
			},
		},
	},

	plugins: [],
};
