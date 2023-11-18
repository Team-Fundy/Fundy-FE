/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      width: {
        abc: '32rem',
      },
      colors: {
        'purpleblue': '#685BFE',
        'white-op5': 'rgba(255, 255, 255, 0)',
      },
      keyframes: {
        intro: {
          from: { transform: "rotateY(0deg) scale(2.0)" },
          to: { transform: "rotateY(360deg) scale(1.0)" },
        },
        leftTransition: {
          '0%': {
            transform: 'translateX(0%) ',
          },
          '100%': {
            transform: 'translateX(-26%)',
          },
        },
      },
      animation: {
        intro: "intro 4s ease-in-out",
        leftTransition: "leftTransition 9s linear infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};