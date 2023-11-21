module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Space Grotesk"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
