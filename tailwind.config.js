/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        countup: {
          "0%": { transform: "translateY(15px)", opacity: "0.2" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        bell: {
          "15%": { transform: "rotate(25deg)" },
          "20%": { transform: "rotate(-25deg)" },
          "25%": { transform: "rotate(25deg)" },
          "50%": { transform: "rotate(-25deg)" },
          "75%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        countup: "countup 600ms cubic-bezier(0.37, -0.8, 0.26, 1.45)",
        bell: "bell 1s",
      },
    },
  },
  plugins: [],
};
