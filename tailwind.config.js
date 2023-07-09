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
        homeMobile: "url('/assets/img/BgHome-mobile.png')",
        home: "url('/assets/img/bg-home.png')",
        'home-mobile': "url('/assets/img/bg-home-mobile.png')",
        about: "url('/assets/img/BgAbout-1.png')",
        about2: "url('/assets/img/BgAbout-2.png')",
        about3: "url('/assets/img/BgAbout-3.png')",
        struktur: "url('/assets/img/BgStruktur-1.png')",
        struktur2: "url('/assets/img/BgStruktur-2.png')",
        division: "url('/assets/img/BgHome.png')",
        'bulan-castle': "url('/assets/img/BulanCastle.png')",
        cave: "url('/assets/img/cave.png')",
      },
      colors: {
        primary: '#0A013D',
        secondary: '#EF2ED2',
        purple: '#4B0B7C',
        'd-primary': '#1C2039',
        'd-secondary': '#262B49',
        'dark-blue': '#1A1944',
        'dark-purple': '#16021B',
        warning: '#ffc107',
        danger: '#dc3545',
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
