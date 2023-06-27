/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        home: "url('/assets/img/BgHome-1.png')",
        home2: "url('/assets/img/BgHome-2.png')",
        home3: "url('/assets/img/BgHome-3.png')",
      },
      colors: {
        purple: "#EE2ED1",
        purpleFooter: "#4B0B7C",
        NavlinkGradient: "",
        bgDivisi: "#0A013D",
        bgGameDev: "rgba(221, 33, 123, 0.3)",
        whiteTransparent: "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        pStart: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
