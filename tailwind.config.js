/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  mode: "jit",
  theme: {
    extend: {
      colors: {
        redOrange: "#FF4500",
        redOrange2: "#ff1900",
        redOrange3: "#fc5619",
        jumpBlue: "#2d1aff",
        jumpBlue2: "#1020b5",
        jumpBlue3: "#0267ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inconsolata: ["Inconsolata", "Roboto"],
        outline: ["Bungee Outline", "cursive"],
        roboto: ["Roboto", "verdana"],
      },
      keyframes: {
        fullSpin: {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(-1px, -1px) scale(1)",
          },
        },
        toggleIcon: {
          "0%": { transform: "scaleX(0.6) scaleY(0.1)", opacity: "0" },
          "0%": { transform: "scaleX(0.7) scaleY(0.2)", opacity: "0.3" },
          "33%": { transform: "scaleX(0.8) scaleY(0.4)", opacity: "0.6" },
          "66%": { transform: "scaleX(1) scaleY(1)" },
        },
        ringTilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rorate(-1deg)" },
        },
      },
      animation: {
        fullSpin: "fullSpin 3s linear infinite",
        blobing: "blob 7s infinite",
        toggleIcon: "toggleIcon 0.5s",
        ringTilt: "ringTilt 10s infinite linear",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
