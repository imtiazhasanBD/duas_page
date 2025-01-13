/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customLiteBlue: "#F3F4F6", 
        customGreen: "#1FA45B", 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
