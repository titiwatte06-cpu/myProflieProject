/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        linen: "#f7f0e4",
        cream: "#fff8ea",
        espresso: "#2f241f",
        coffee: "#6f5f52",
        teal: "#276b65",
        sage: "#9fb89b",
        clay: "#cf7356",
        honey: "#e0ad43",
        rust: "#a95036",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(47, 36, 31, 0.09)",
      },
    },
  },
  plugins: [],
};
