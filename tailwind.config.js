/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#70a5fd",
        blue: "#79a1f7",
        green: "#08c294",
        purple: "#ba9af7",

        pink: "#f7768e",
        orage: "#ff9e63",
        "bg-color": "#1a1b27",
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
