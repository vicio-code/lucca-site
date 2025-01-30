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
      fontSize: {
        base: '20px', // Default font size
        sm: '18px',   // Small font size
        lg: '24px',   // Large font size
        xl: '28px',   // Extra large font size
      },
    },
  },
  plugins: [],
} satisfies Config;
