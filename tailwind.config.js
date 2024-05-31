/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      colors: {
        "midnight-blue": "#172339",
        "gunmetal-gray": "#49566d",
        "daisy-white": "#f3ede7",
        "pearl-white": "#faf8f6",
        "lavender-purple": "#a060ff",
        fuchsia: "#cb30e3",
        "salmon-orange": "#ffa84e",
      },
    },
  },
  plugins: [],
};
