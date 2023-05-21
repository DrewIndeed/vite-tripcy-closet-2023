/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#ffffff",
        bg2: "#f6f5f0",
        typo1: "#332f2a",
        typo2: "#8b8a87",
        typo3: "#a39a8f",
        sup1: "#fffff3",
        sup2: "#efe7da",
        sup3: "#c1b6a3",
        out1: "#d7b891",
        out2: "#8c8477",
        out3: "#605b52",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("prettier-plugin-tailwindcss"),
  ],
};
