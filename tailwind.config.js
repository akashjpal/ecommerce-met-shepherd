/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        amber: {
          300: '#FBBF24', // Ensuring this matches Tailwind's amber-300
          600: '#D97706', // Ensuring this matches Tailwind's amber-600
        },
        'yellow-600': '#FFCC00', // Custom placeholder color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-yellow-600::placeholder': {
          color: '#FFCC00', // Hex color for yellow
        },
      };
      addUtilities(newUtilities, ['responsive', 'focus']);
    },
  ],
};
