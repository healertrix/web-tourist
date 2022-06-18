module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navblue: "#000955",
      btnblue: "#110F78",
    },
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
