/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        xs: '1px'
      },
      colors: {
        background: "#fff0f3",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily: {
        fBody: ['var(--font-shantellSans)']
      },
      textColor: {
        primary: '#2F4858',
        link: '#000000'
      },
      borderColor: {
        primary: '#B0A6B4'
      }
    },
  },
  plugins: [],
};
