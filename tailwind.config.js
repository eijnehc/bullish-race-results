/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class-based toggle
  theme: {
    extend: {
      colors: {
        // Optional: customize dark mode colors if needed
        dark: {
          background: "#121212",
          text: "#ffffff",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: for better form styling
  ],
};
