/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px',
      lg: '1920px',
    },
    fontFamily: {
      istok: [
        'IstokWeb-Regular',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      proza: {
        DEFAULT: [
          'ProzaLibre-Regular',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        medium: ['ProzaLibre-Medium', 'sans-serif'],
        semibold: ['ProzaLibre-SemiBold', 'sans-serif'],
        bold: ['ProzaLibre-Bold', 'sans-serif'],
      },
    },
    extend: {
      colors: {
        'my-black': '#222222',
        'my-black1': '#1E1E1E',
        'my-black2': '#1A1A1A',
        'my-black3': '#393939',
        'my-black4': '#212121',
        'my-black5': '#1C1C1C',
        'my-gray': '#7C7C7C',
        'my-yellow': '#FFD437',
        'my-yellow-back': '#FFF6D5',
        'my-blue': '#2355CC',
        'my-lightblue': '#F4FAFF',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          minWidth: '320px',
          maxWidth: '390px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          '@screen md': {
            paddingLeft: '20px',
            paddingRight: '20px',
            maxWidth: '744px',
          },
          '@screen lg': {
            paddingLeft: '162px',
            paddingRight: '162px',
            maxWidth: '1920px',
          },
        },
      });
    },
  ],
};
