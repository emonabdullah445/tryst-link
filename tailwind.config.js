/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1075px",
          xl: "1075px",
          "2xl": "1075px",
        },
      },
      fontFamily: {
        Assistant: ["Assistant", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-red": "#d7282f",
        "custom-red2": "#b52227",
        "custom-rose": "#f74356",
        "custom-gray": "#eeeeee",
        "custom-gray2": "#fcfcfc",
        "custom-gray3": "#1b1f29",
        "custom-gray4": "#333333",
        "custom-gray5": "#414141",
        "custom-gray5": "#414141",
        "custom-gray6": "#414141",
      },
    },
  },
  plugins: [],
};
