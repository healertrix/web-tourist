module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navblue: "#000955",
    },
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
