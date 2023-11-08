/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '1/2': '50%',
      '45%': '45%',
    },
    colors: {
      LightCyan: 'hsl(193, 38%, 86%)',
      NeonGreen: 'hsl(150, 100%, 66%)',
      GrayishBlue: 'hsl(217, 19%, 38%)',
      DarkGrayishBlue: 'hsl(217, 19%, 24%)',
      DarkBlue: 'hsl(218, 23%, 16%)',
    },
    extend: {
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif']

    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
}