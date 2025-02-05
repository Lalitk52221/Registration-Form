/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
    // backgroundImage: {
    //   "gradient-to-top": "linear-gradient(60deg, #29323c 0%, #485563 100%);",
    // },
    // keyframes: {
    //   trail: {
    //     '0%': { transform: 'scale(1)', opacity: 0.5 },
    //     '50%': { transform: 'scale(1.5)', opacity: 1 },
    //     '100%': { transform: 'scale(1)', opacity: 0.5 },
    //   },
    // },
    // animation: {
    //   trail: 'trail 0.5s ease-in-out',
    // },
  },
  plugins: [],
};
