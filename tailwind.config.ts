import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      animation: {
        'scroll': 'scroll 7s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 8s linear infinite',
        'spin-slow-delay': 'spin 8s linear infinite',
        'spin-slower-delay': 'spin 4s linear infinite',
      },
      
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      variants: {
        scrollbar: ['rounded'],
      },
      // fonts
      fontFamily: {
        openSans: ['var(--font-openSans)'],
        sourceSans: ['var(--font-sourceSans)'],
        roughScript: ['var(--font-roughScript)'],
        meowScript: ['var(--font-meowScript)'],
        intrudingCat: ['IntrudingCat', 'cursive'],
        kindsans: ['var(--font-kind-sans)', 'sans-serif'],
        hendrigo: ['var(--font-hendrigo)', 'sans-serif'],



      },
      colors: {
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        clay: {
          light: "#ecf2ec",
          "light-hover": "#e2ece2",
          "light-active": "#c3d4c4",

          normal: "#3f7043",
          "normal-hover": "#39713a",
          "normal-active": "#326433",

          dark: "#215c30",
          "dark-hover": "#2d4b26",
          "dark-active": "#1c381d",

          darker: "#162c18",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};

export default config;
