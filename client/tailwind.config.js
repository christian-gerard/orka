/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spacing-forward': 'spacing 1s ease-in-out forwards',
        'spacing-reverse': 'spacing-reverse 0.5s ease-in-out forwards',
      },
      keyframes: {
        spacing: {
          '0%': { letterSpacing: '0.8em' },
          '100%': { letterSpacing: '1.5em' },
        },
        'spacing-reverse': {
          '0%': { letterSpacing: '1.5em' },
          '100%': { letterSpacing: '0.8em' },
        },
        'menu-open': {
          '0%': { width: '1.5em' },
          '100%': { letterSpacing: '20%' },
        },
        'menu-close': {
          '0%': { letterSpacing: '1.5em' },
          '100%': { letterSpacing: '0.8em' },
        },
        
      },
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'ocean': '#6D99B5'
    }
  },
  plugins: [],
}

