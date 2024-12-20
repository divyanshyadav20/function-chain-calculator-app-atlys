import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          10: "#DFDFDF",
          20: "#D3D3D3",
          30: "#A5A5A5",
          40: "#585757",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
