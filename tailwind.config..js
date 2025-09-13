// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    // Add other file types and paths where Tailwind classes are used
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EE6C4D",
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [
    // Tailwind CSS plugins
  ],
};