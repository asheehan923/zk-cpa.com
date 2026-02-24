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
        // Logo-derived palette
        // Darkest shade from logo gradient (deep cobalt blue)
        brand: {
          dark:    "#1A35BF",   // darkest — deep cobalt (logo bottom-left)
          DEFAULT: "#2244D0",   // mid blue
          light:   "#3A6AE8",   // lighter blue
          cyan:    "#00AEEF",   // wordmark cyan
          sky:     "#00C2E8",   // lightest — bright cyan (logo right side)
          pale:    "#E8F6FD",   // very light tint for backgrounds
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
