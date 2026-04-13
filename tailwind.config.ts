import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        "surface-elevated": "#1A1A1A",
        gold: "#C9A96E",
        "gold-accent": "#D4AF7A",
        "gold-dark": "#A8895A",
        "text-primary": "#FFFFFF",
        "text-secondary": "#E5E7EB",
        "text-muted": "#9CA3AF",
        "border-dark": "#2A2A2A",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        josefin: ["var(--font-josefin)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #A8895A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
