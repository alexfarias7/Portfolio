/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      colors: {
        blue0: "#E2E5F4",
        blue1: "#C7CDE9",
        blue2: "#959CBF",
        blue3: "#5D6280",
        blue4: "#282B3F",
        blue5: "#1C1E2C",
        blue6: "#141625",
        blue7: "#0E0F1F",
        blue8: "#080A19",
        blue9: "#050615",

        purple0: "#F1ECFE",
        purple1: "#ECE8FD",
        purple2: "#E4DAFE",
        purple3: "#D4C7FC",
        purple4: "#C7B8FA",
        purple5: "#B2A0F7",
        purple6: "#8674D4",
        purple7: "#6050B1",
        purple8: "#40338F",
        purple9: "#291E76",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        firamono: ["Fira Mono", "monospace"],
        tinos: ["Tinos", "serif"],
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)",
      },

      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
  },
  plugins: [],
};
