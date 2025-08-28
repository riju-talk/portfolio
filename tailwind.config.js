
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
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        tron: {
          dark: "#0a0f0a",
          darker: "#050805",
          green: "#22c55e",
          lime: "#84cc16",
          olive: "#65a30d",
          emerald: "#10b981",
          cyan: "#06b6d4",
          turquoise: "#14b8a6",
          blue: "#3b82f6",
          navy: "#1e3a8a",
          teal: "#0d9488",
          mint: "#6ee7b7",
        },
        gray: {
          950: "#030712",
        }
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-green": "pulseGreen 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
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
        pulseGreen: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        glow: {
          from: {
            "box-shadow": "0 0 20px rgba(34, 197, 94, 0.2)",
          },
          to: {
            "box-shadow": "0 0 30px rgba(34, 197, 94, 0.4)",
          },
        },
      },
    },
  },
  plugins: [],
};
