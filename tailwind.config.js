/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        over: '1800px',
      },
      backgroundImage: {
        homeFull: "url('/assets/img/BgHome.png')",
        homeMobile: "url('/assets/img/BgHome-mobile.png')",
        home: "url('/assets/img/BgHome.png')",
        'home-mobile': "url('/assets/img/BgHomeMobile.png')",
        about: "url('/assets/img/BgAbout.png')",
        'about-mobile': "url('/assets/img/BgAboutMobile.png')",
        flyship: "url('/assets/img/BgFlyShip.png')",
        division: "url('/assets/img/BgHome.png')",
        'bulan-castle': "url('/assets/img/BulanCastle.png')",
        cave: "url('/assets/img/BgCave.png')",
        space: "url('/assets/img/BgInfoLomba.jpg')"
      },
      colors: {
        primary: '#0A013D',
        secondary: '#EF2ED2',
        purple: '#4B0B7C',
        'd-primary': '#1C2039',
        'd-secondary': '#262B49',
        'dark-blue': '#1A1944',
        'dark-purple': '#16021B',
        profileCard: '#262B49',
        textDashboard: '#E3E3E3',
        warning: '#ffc107',
        danger: '#dc3545',
        cardDashboard: '#262B49',
        darkBlue: '#1A1944',
        cardMateri: 'rgba(109, 221, 214, 0.72)',
        'web-dev': '#54FFC1',
        'game-dev': '#F330FF',
        'design-graphic': '#812DFF',
        cinematography: '#643AFF',
        'it-support': '#FF3131',
      },
      fontFamily: {
        pStart: ['"Press Start 2P"', 'cursive'],
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
