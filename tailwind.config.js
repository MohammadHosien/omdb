/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#C23225",
          glass: "#73050561",
          dark:'#6b1d15'
        },
      },
    },
  },
  plugins: [],
};
