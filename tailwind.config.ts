import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2a9d8f",
          dark: "#1d6b62",
          light: "#9fd4cb",
        },
        background: "#f2f8f6",
        text: "#142220",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgb(21 34 32 / 0.12)",
      },
    },
  },
} satisfies Config;
