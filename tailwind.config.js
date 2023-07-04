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
        homeFull: "url('/assets/img/BgHome.png')",
        home: "url('/assets/img/BgHome-1.png')",
        home2: "url('/assets/img/BgHome-2.png')",
        home3: "url('/assets/img/BgHome-3.png')",
        about: "url('/assets/img/BgAbout-1.png')",
        about2: "url('/assets/img/BgAbout-2.png')",
        about3: "url('/assets/img/BgAbout-3.png')",
        struktur: "url('/assets/img/BgStruktur-1.png')",
        struktur2: "url('/assets/img/BgStruktur-2.png')",
        division: "url('/assets/img/BgHome.png')",
      },
      colors: {
        purple: '#EE2ED1',
        purpleFooter: '#4B0B7C',
        NavlinkGradient: '',
        primary: '#0A013D',
        secondary: '#EE2ED1',
        tertiary: '#EF2ED2',
        purple: '#EE2ED1',
        purpleFooter: '#4B0B7C',
        darkPurp: '#0A013D',
        bgGameDev: 'rgba(221, 33, 123, 0.3)',
        whiteTransparent: 'rgba(255, 255, 255, 0.3)',
        warning: '#ffc107',
        danger: '#dc3545',
      },
      fontFamily: {
        pStart: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};
