/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        twBlue: "var(--blue)",
        twBlueSky: "var(--blueSky)",
        twRedLight: "var(--redLight)",
        twRed: "var(--red)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        bgNavbar: "var(--bgNavbar)",
        textNavbar: "var(--textNavbar)",
        primaryColor: "var(--primaryColor)",
        secondColor: "var(--secondColor)",
        thirdColor: "var(--thirdColor)",
        frColor: "var(--frColor)",
      },
    },
  },
  plugins: [],
};
