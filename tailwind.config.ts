import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surfaceStrong: "rgb(var(--surface-strong) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentMuted: "rgb(var(--accent-muted) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        stoneText: "rgb(var(--stone-text) / <alpha-value>)"
      },
      boxShadow: {
        glow:
          "0 32px 90px rgba(46, 98, 71, 0.22), 0 12px 30px rgba(9, 22, 17, 0.14)",
        card:
          "0 30px 80px rgba(11, 25, 19, 0.12), 0 8px 22px rgba(11, 25, 19, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.52)"
      },
      backgroundImage: {
        radialWarm:
          "radial-gradient(circle at top, rgba(46, 98, 71, 0.24), transparent 46%)",
        softGrid:
          "linear-gradient(rgba(14, 33, 25, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 33, 25, 0.035) 1px, transparent 1px)",
        paperVeil:
          "linear-gradient(180deg, rgba(250,252,249,0.78), rgba(237,243,238,0.2))"
      },
      fontFamily: {
        sans: [
          "\"Avenir Next\"",
          "\"Segoe UI\"",
          "\"Helvetica Neue\"",
          "sans-serif"
        ],
        serif: [
          "\"Iowan Old Style\"",
          "\"Palatino Linotype\"",
          "\"Book Antiqua\"",
          "Georgia",
          "serif"
        ]
      },
      maxWidth: {
        content: "84rem",
        prose: "48rem"
      },
      borderRadius: {
        luxe: "1.75rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 10s ease-in-out infinite"
      }
    }
  },
  plugins: [typography]
};

export default config;
