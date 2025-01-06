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
        light: '#a0a9b8',
        dark: 'rgb(0,21,55)',
      },
    },
    fontSize: {
      '404xl' : '50rem',
    }
  },
  plugins: [],
} satisfies Config;
