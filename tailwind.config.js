/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm-max': { max: '374.99px' },
      md: '768px',
      lg: '1440px',
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
        'my-lightblue': '#DAEFFF',
      },
    },
    gridTemplateAreas: {
      layout: ['aside head', 'aside main'],
    },
    gridTemplateColumns: {
      layout: '240px 1fr',
    },
    gridTemplateRows: {
      layout: '72px 1fr',
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
          maxWidth: '375px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '18px',
          paddingRight: '18px',
          '@screen md': {
            paddingLeft: '32px',
            paddingRight: '32px',
            maxWidth: '768px',
          },
          '@screen lg': {
            paddingLeft: '100px',
            paddingRight: '100px',
            maxWidth: '1440px',
          },
        },
        '.scroll-up-btn': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // opacity: '0',
          // visibility: 'hidden',
          zIndex: '49',
          position: 'fixed',
          bottom: '-54px',
          right: '5%',
          padding: '10px',
          border: 'none',
          width: '54px',
          height: '54px',
          backgroundColor: '#2355cc',
          transition: 'all 300ms ease-in-out',
          '&:hover': {
            backgroundColor: '#223f86',
          },
        },
      });
    },
    daisyui,
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
  daisyui: {
    themes: ['light'],
  },
};
