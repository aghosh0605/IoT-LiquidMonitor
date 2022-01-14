module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        background: {
          gray: '#f4f5f7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
