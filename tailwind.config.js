/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        "bg-color": "#222",
        "gray-1": "#bbb",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        rubik: "var(--font-rubik)",
      },
    },
  },
  plugins: [],
};
