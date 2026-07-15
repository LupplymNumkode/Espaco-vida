import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#4B0B6B",
          dark: "#2D083F",
        },
        violet: "#7C3DA3",
        mint: {
          DEFAULT: "#23B7AE",
          dark: "#1A9E96",
        },
        plum: "#25182F",
        surface: "#F8FBFC",
        // `muted` mantém `text-muted`/`bg-muted` (DEFAULT) e ganha `text-muted-foreground`
        muted: {
          DEFAULT: "#74687D",
          foreground: "#74687D",
        },
        lilac: "#F4EFF8",
        teal: {
          soft: "#DFF8F5",
          light: "#EEFDFB",
        },
        // Tokens semânticos usados por componentes shadcn (ex.: animated-testimonials)
        foreground: "#25182F",
        secondary: {
          // Mint claro da marca — botões de navegação visíveis sobre o fundo lilás
          DEFAULT: "#DFF8F5",
          foreground: "#25182F",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-ev": "linear-gradient(135deg, #4B0B6B 0%, #7C3DA3 100%)",
        "gradient-purple": "linear-gradient(135deg, #2D083F 0%, #4B0B6B 55%, #5E1680 100%)",
        "gradient-mint": "linear-gradient(135deg, #23B7AE, #5DD4CC)",
      },
      boxShadow: {
        "soft": "0 14px 40px rgba(75, 11, 107, 0.08)",
        "ev": "0 24px 70px rgba(75, 11, 107, 0.12)",
        "strong": "0 44px 130px rgba(75, 11, 107, 0.18)",
        "purple": "0 18px 44px rgba(75, 11, 107, 0.26)",
        "mint": "0 16px 38px rgba(35, 183, 174, 0.25)",
      },
      container: {
        center: true,
        padding: "22px",
        screens: {
          "2xl": "1180px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
