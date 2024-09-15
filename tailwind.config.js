/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "blue": "#0147FF",
      "blueh": "#016dff",
      "white": "#ffffff",
      "grey": "#282828",
      "g200": "#e5e7eb"
    },
    extend: {
      spacing:{
        "825": "825px",
        "1200": "1200px",
        "1120": "1120px",
        "602": "602px",
      },
      lineHeight:{
        "86": "86px",
      }
    },
  },
  plugins: [],
}

