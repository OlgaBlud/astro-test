/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InstrumentSans", "system-ui", "sans-serif"],
        display: ["RedHatDisplay", "sans-serif"],
      },
      colors: {
        "custom-blue": "#2e406a",
      },
    },
  },
  plugins: [],
};
