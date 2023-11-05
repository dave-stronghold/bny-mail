const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/index.html","./src/renderer/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // darkMode: "true",
  plugins: [nextui({
    themes: {
      light: {},
      dark: {},
    },
  }),],
}

