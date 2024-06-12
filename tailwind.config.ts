import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const primary = {
  DEFAULT: "#ffff",
  100: "#efefef",
  200: "#dedede",
  600: "#9A9895",
  700: "#737373",
};

const destructive = {
  DEFAULT: "#ce2525",
  dark: "#b92121",
};

const config: Config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      fontSize: {
        "heading-1": ["52px", { lineHeight: "56px", fontWeight: "700" }],
        "heading-2": ["26px", { lineHeight: "36px", fontWeight: "700" }],
        "heading-3": ["24px", { lineHeight: "33px", fontWeight: "700" }],
        "heading-4": ["20px", { lineHeight: "28px", fontWeight: "500" }],
      },
      colors: {
        primary,
        destructive,
      },
    },
  },
  plugins: [],
};
export default config;
