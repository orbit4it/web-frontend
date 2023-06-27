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
				divisi: "url('/assets/img/BgHome.png')"
			},
			colors: {
				purple: '#EE2ED1',
				purpleFooter: '#4B0B7C',
				NavlinkGradient: '',
				warnaDivisi: '#0A013D',
				warnaExpand: '#21DD6C4D',
				whiteTransparent: 'rgba(225, 225, 225, 0.3)',
			},
			fontFamily: {
				serat: ["Montserrat", "sans-serif"],
			}
		},
	},

	plugins: [],
};
