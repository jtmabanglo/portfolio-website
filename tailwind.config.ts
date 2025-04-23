import { urbanist } from "@/app/fonts";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        scp: ["var(--font-scp)"],
        funnel: ["var(--font-funnel)"],
        fira: ["var(--font-fira)"],
        dmsans: ["var(--font-dmsans)"],
        dmcode: ["var(--font-dmcode)"],
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
