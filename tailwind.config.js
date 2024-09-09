import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.3rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },

    extend: {
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
        "8xl": "var(--font-size-8xl)",
        "9xl": "var(--font-size-9xl)",
      },
      backgroundImage: {
        "gradient-a": "url('/gradientbg.jpg')",
        "s-services": "url('/home/ServicesSection/imgServiceSection.jpg')",
        "a-services": "url('/home/ProjectSection/imgServiceSection.jpg')",
      },
      minHeight: {
        "mobile-menu": "92dvh",
        "mobile-nav": "100dvh",
      },
      height: {
        "mobile-menu": "calc(var(--vh,1vh)*92)",
        "mobile-nav": "calc(var(--vh,1vh)*100)",
      },
      screens: {
        mn: "320px",
        nm: "480px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
