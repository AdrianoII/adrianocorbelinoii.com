/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=retro]"],
      }
    }, {
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=luxury]"],
        "base-100": "#1f2937",
        // "base-100": "#111827",
      }
    }],
  },
  darkMode: ['class', '[data-theme="dark"]']
}
