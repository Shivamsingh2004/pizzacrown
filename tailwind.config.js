/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#171311",
          light: "#1D1815",
        },
        surface: "#251B17",
        gold: {
          DEFAULT: "#D6A24A",
          light: "#F0C76A",
        },
        cream: "#FFF5E6",
        crimson: {
          DEFAULT: "#B83232",
          deep: "#7E2020",
        },
        ink: {
          DEFAULT: "#FFF8EF",
          muted: "#B9ADA1",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(214, 162, 74, 0.35)",
        card: "0 12px 40px -12px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(214,162,74,0.14), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(4deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
