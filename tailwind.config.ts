import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f6",
          100: "#d6deeb",
          200: "#aebdd6",
          300: "#7e95bb",
          400: "#4f6b9a",
          500: "#324c78",
          600: "#23375c",
          700: "#182746",
          800: "#101a33",
          900: "#0a1124",
          950: "#060b18"
        },
        signal: {
          pass: "#2BA37A",
          fail: "#C1502E",
          accent: "#C9A24B"
        },
        paper: "#F7F8FA",
        mist: "#E4E8EE"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      },
      letterSpacing: {
        tightish: "-0.015em",
        widebit: "0.08em"
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,17,36,0.06), 0 8px 24px -8px rgba(10,17,36,0.12)"
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      keyframes: {
        "check-draw": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "check-draw": "check-draw 0.5s ease forwards",
        "fade-up": "fade-up 0.6s ease forwards"
      }
    }
  },
  plugins: []
};
export default config;
