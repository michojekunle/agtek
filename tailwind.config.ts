import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bright_red: 'hsl(12, 88%, 59%)',
        dark_blue: 'hsl(228, 39%, 23%)',
        dark_grayish_blue: 'hsl(227, 12%, 61%)',
        very_dark_blue: 'hsl(233, 12%, 13%)',
        very_pale_red: 'hsl(13, 100%, 96%)',
        very_light_gray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
export default config
