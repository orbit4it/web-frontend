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
				home: "url('/assets/img/BgHome-1.png')",
				home2: "url('/assets/img/BgHome-2.png')",
				home3: "url('/assets/img/BgHome-3.png')",
				about: "url('/assets/img/BgAbout-1.png')",
				about2: "url('/assets/img/BgAbout-2.png')",
			},
			colors: {
				purple: '#EE2ED1',
				purpleFooter: '#4B0B7C',
				NavlinkGradient: '',
			},
		},
	},

	plugins: [],
};
