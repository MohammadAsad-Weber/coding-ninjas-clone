/** @type {import('tailwindcss').Config} **/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    // Extended CSS
    extend: {

      // Keyframes for custom animations
      keyframes: {
        left_right: {
          '0%': { backgroundPosition: 'left' },
          '50%': { backgroundPosition: 'right' },
          '100%': { backgroundPosition: 'left' },
        },
        text: {
          'from': { backgroundPosition: 'left' },
          'to': { backgroundPosition: 'right' },
        },
      },

      // Background Images
      backgroundImage: {
        'advantage': "url('/src/assets/SVGs/advantage_bg.svg')",
        'wings': "url('/src/assets/SVGs/wings.svg')",
        'wings-sm': "url('src/assets/SVGs/wings_sm.svg')",
      },

      // Custom Animations
      animation: {
        left_right: 'left_right 10s infinite',
        text: 'text 15s linear infinite both',
      },
    },
  },
  plugins: [],
}

