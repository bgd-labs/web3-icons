import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "brand-100": "#FCF9F5",
        "brand-200": "#F8F4F6",
        "brand-300": "#f2f0f8",
        "brand-400": "#d9d7dc",
        "brand-500": "#c5c3d0",
        "brand-600": "#9a98a3",
        "brand-700": "#6f6d76",
        "brand-800": "#444342",
        "brand-900": "#1d1d1b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
