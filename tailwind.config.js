import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-bg": "pulse-bg 0.3s linear forwards",
      },
      keyframes: {
        "pulse-bg": {
          "0%": { backgroundColor: "var(--tw-gradient-from)" },
          "50%": { backgroundColor: "var(--tw-gradient-to)" },
          "100%": { backgroundColor: "var(--tw-gradient-from)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
