
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
