
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          blue: "#60a5fa",
          green: "#34d399",
          teal: "#2dd4bf",
          slate: "#94a3b8",
        },
        minimal: {
          bg: "#0a0e14",
          surface: "#141b24",
          border: "#1e2936",
        },
        navy: {
          50: "#e8ecf0",
          100: "#c5d1dc",
          200: "#9fb4c8",
          300: "#7996b3",
          400: "#5b7c99",
          500: "#4a6b87",
          600: "#3e5a72",
          700: "#32495d",
          800: "#263748",
          900: "#1a2633",
        },
        olive: {
          50: "#f4f5ed",
          100: "#e5e7d4",
          200: "#d5d9b9",
          300: "#c5cb9e",
          400: "#b5bd83",
          500: "#9ca372",
          600: "#88905f",
          700: "#6f754c",
          800: "#565a39",
          900: "#3d4026",
        }
      },
      fontWeight: {
        thin: "200",
        extralight: "250",
        light: "300",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
};
