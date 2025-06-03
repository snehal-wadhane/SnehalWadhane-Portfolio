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
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        lynch: '#646b93',
        'pickled-bluewood': '#1e2039',
        snuff: '#ece4f1',
        'london-hue': '#b393bb',
        waterloo: '#7d7ca1',
        prelude: '#d4b4db',
        comet: '#5b6484',
        spindle: '#bbd6ee',
        fedora: '#7c747c',
        'spun-pearl': '#acacb4',
        'coral_red': '#FF6F61',
        'dark_teals': '#2c3e50',
        'gl': ' #FFD700',
        'sph': '#F4A261',
        'selectedtxt': '#EEE8AA',
        'fav': '#fdd3e7'
      },
      animation: {
        text: 'text 4s ease infinite',

      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
