/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkSaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        mainParagraph: "hsla(0, 0%, 100%, 0.75)",
        statHeadings: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
      backgroundImage: {
        desktopImage: "url('./images/image-header-desktop.jpg')",
        mobileImage: "url('./images/image-header-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
