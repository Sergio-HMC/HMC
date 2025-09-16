/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#204975",
          prussian: "#142E4A",
          steel: "#8D99AE",
          cornsilk: "#FAF4D3",
          tea: "#C2EFB3"
        }
      },
      fontFamily: { sans: ["Lato","ui-sans-serif","system-ui","Arial","sans-serif"] },
      boxShadow: { card: "0 8px 24px rgba(0,0,0,0.08)" }
    }
  },
  plugins: [],
};