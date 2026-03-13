import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Deep Navy
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1E293B", // Slate
          foreground: "#F8FAFC",
        },
        accent: {
          DEFAULT: "#C5A059", // Muted Gold
          foreground: "#FFFFFF",
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#334155",
          muted: "#64748B",
        },
        muted: "#E2E8F0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -1px rgba(15, 23, 42, 0.03)",
        hover: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;