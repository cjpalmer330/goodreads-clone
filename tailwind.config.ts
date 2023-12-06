import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'darkNeon': "url('/public/bgImage.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config

