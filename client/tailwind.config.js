/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        "primary-100": "#00b4db",
        "primary-200": "#0083b0",

        // Secondary accent colors
        "secondary-100": "#00c96b",
        "secondary-200": "#009e4e",

        // Optional neutrals for text/background
        "neutral-100": "#f5f5f5",
        "neutral-500": "#6b7280",
        "neutral-900": "#1f2937"
      }
    },
  },
  plugins: [],
}