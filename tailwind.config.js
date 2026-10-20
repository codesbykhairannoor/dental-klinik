/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'SF Pro Display'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Text'",
          "'SF Pro'",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "3xl": "1.5rem",
        "2xl": "1.125rem",
        xl: "0.875rem",
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      colors: {
        apple: {
          blue: "#0071E3",
          hoverBlue: "#0077ED",
          activeBlue: "#0062C4",
          bg: "#F5F5F7",
          card: "#FFFFFF",
          text: "#1D1D1F",
          muted: "#86868B",
          border: "rgba(0, 0, 0, 0.08)",
          dark: "#161617",
          darkBg: "#000000",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#0071E3",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F7",
          foreground: "#1D1D1F",
        },
        muted: {
          DEFAULT: "#F5F5F7",
          foreground: "#86868B",
        },
        accent: {
          DEFAULT: "#F5F5F7",
          foreground: "#1D1D1F",
        },
        destructive: {
          DEFAULT: "#FF3B30",
          foreground: "#FFFFFF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#0071E3",
      },
      boxShadow: {
        apple: "0 4px 24px rgba(0, 0, 0, 0.04)",
        "apple-hover": "0 12px 36px rgba(0, 0, 0, 0.08)",
        "apple-card": "0 2px 12px rgba(0, 0, 0, 0.03)",
        "apple-float": "0 20px 48px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
