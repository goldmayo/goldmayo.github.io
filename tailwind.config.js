/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,md,mdx}`,
    `./src/components/**/*.{js,jsx,ts,tsx,md,mdx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx,md,mdx}`,
    `./contents/**/*.{js,jsx,ts,tsx,md,mdx}`,
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: { min: "0px", max: "599px" },
      tablet: { min: "600px", max: "1023px" },
      laptop: { min: "1024px", max: "1439px" },
      desktop: { min: "1440px", max: "1919px" },
      ultra: { min: "1920px" },
    },
    fontSize: {
      headline1: ["3rem"],
      headline2: ["2.25rem"],
      headline3: ["2rem"],
      headline4: ["1.5rem"],
      subtitle: ["1.5rem"],
      subtitle2: ["1.25rem"],
      body: ["1rem"],
      small: ["0.875rem"],
      button: ["0.625rem"],
    },
    extend: {
      // fontFamily: {

      // },
      spacing: {},
      colors: {
        primary: "#00E1A6",
        secondary: "#FF526F",
        tertiary: "#F8F7F9",
        link: "#5e87c9",
        headline: "#00214D",
        text: "#00214D",
        paragraph: "#1B2E46",
        "background-primary": "#F3F5F7",
        "background-secondary": "#FFFFFF",

        "primary-dark": "#FFB84C",
        "secondary-dark": "#00AA93",
        // "tertiary-dark": "#F8F7F9",
        "headline-dark": "#FFFFFF",
        "text-dark": "#FFFFFF",
        "paragraph-dark": "#95A1B2",
        "background-primary-dark": "#242629",
        "background-secondary-dark": "#151519",

        "monoscale-1": "#333333",
        "monoscale-2": "#4F4F4F",
        "monoscale-3": "#828282",
        "monoscale-4": "#BDBDBD",
        "monoscale-5": "#E0E0E0",
        "mono-white": "#ffffff",
        "mono-black": "#000000",
      },
    },
  },
  plugins: [],
};
