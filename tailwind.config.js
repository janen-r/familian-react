module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      dropShadow: ["hover"],
      backdropBlur: {
        xs: '2px',
      },
      // animation: {
      //   // 'animation-bounce-once': 'bounce 1s ease-in-out 5'
      // },
      colors: {
        /* I will implement tht theming later, its just getting started..
        'buttonRed': '#f87171',
        'buttonBlue': '#4051B5',
        */
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}