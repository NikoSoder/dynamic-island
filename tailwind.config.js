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
          "25%": { transform: "rotate(25deg)" },
          "50%": { transform: "rotate(-25deg)" },
          "75%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        timerBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        listeningBar: {
          "0%": { transform: "scaleY(0.8)" },
          "100%": { transform: "scaleY(0.3)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        trail: {
          "0%": { transform: "translateY(20px)", opacity: "0.2" },
          "50%": { filter: "blur(4px)" },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
      animation: {
        countup: "countup 600ms cubic-bezier(0.37, -0.8, 0.26, 1.45)",
        bell: "bell 1s",
        timerBar: "timerBar 213s linear infinite",
        listeningBarLong: "listeningBar 700ms ease-in-out infinite",
        listeningBarShort: "listeningBar 500ms ease-in-out infinite",
        fadeIn: "fadeIn 1s 200ms backwards",
        trail: "trail 500ms cubic-bezier(0.37, -0.8, 0.26, 1.45)",
      },
    },
    plugins: [],
  },
};
