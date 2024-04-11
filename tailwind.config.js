/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["poppins", "sans-serif"],

      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      ssm: "768px",
      sm: "852px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

