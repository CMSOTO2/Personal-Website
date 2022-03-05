module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@themesberg/flowbite/plugin"),
    // ...
  ],
};
