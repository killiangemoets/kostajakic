import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "heading-1": ["40px", { lineHeight: "50px", fontWeight: "700" }],
        "heading-2": ["33px", { lineHeight: "40px", fontWeight: "700" }],
        "heading-3": ["27px", { lineHeight: "33px", fontWeight: "700" }],
        "heading-4": ["23px", { lineHeight: "28px", fontWeight: "600" }],
        "heading-5": ["19px", { lineHeight: "23px", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
export default config;
