/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import gridAreas from "@savvywombat/tailwindcss-grid-areas";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm-max": { max: "374.99px" },
      // від 768, від 1440 ...
      sm: "320px",
      md: "768px",
      tablet: { min: "768px", max: "1439.98px" },
      lg: "1440px",
      extralg: "1920px",
    },
    fontFamily: {
      istok: [
        "IstokWeb-Regular",
        "sans-serif",
      ],
      proza: {
        DEFAULT: [
          "ProzaLibre-Regular",
          "sans-serif",
        ],
        medium: ["ProzaLibre-Medium", "sans-serif"],
        semibold: ["ProzaLibre-SemiBold", "sans-serif"],
        bold: ["ProzaLibre-Bold", "sans-serif"],
      },
    },
    extend: {
      colors: {
        "my-black": "#222222",
        "my-black1": "#1E1E1E",
        "my-black2": "#1A1A1A",
        "my-black3": "#393939",
        "my-black4": "#212121",
        "my-black5": "#1C1C1C",
        "my-gray": "#7C7C7C",
        "my-yellow": "#FFD437",
        "my-yellow-back": "#FFF6D5",
        "my-blue": "#2355CC",
        "hover-blue": "#223f86",
        "my-lightblue": "#DAEFFF",
      },
    },
    gridTemplateAreas: {
      layout: ["aside head", "aside main"],
    },
    gridTemplateColumns: {
      layout: "200px 1fr",
    },
    gridTemplateRows: {
      layout: "84px 1fr",
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "18px",
          paddingRight: "18px",
          "@screen md": {
            paddingLeft: "32px",
            paddingRight: "32px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "100px",
            paddingRight: "100px",
            maxWidth: "1440px",
          },
        },
      });
    },
    daisyui,
    gridAreas,
  ],
  daisyui: {
    themes: ["light"],
  },
};
