import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silverSand: '#C0C0C9',
        ghostWhite: '#FCFCFD',
        skyBlue: '#97CFFD',
        primaryBg: '#0B0E18',
        footerBg: '#101423',
        charcoalBlue: '#313856'
      },
      fontFamily: {
        primaryBold: ['Bold'],
        primaryExtraLight: ['ExtraLight'],
        primaryLight: ['Light'],
        primaryMedium: ['Medium'],
        primaryRegular: ['Regular'],
        primarySemiBold: ['SemiBold'],
        primaryThin: ['Thin'],
        secondaryBlack: ['PlayfairDisplay-Black'],
      },
      lineHeight: {
        primaryLineHeight: '48px'
      },
      backgroundImage: {
        footerBgImage: "url('/images/bg-footer.jpg')",
        heroBgImage: "url('/images/hero.jpg')",
      },
      boxShadow: {
        custom: '0px 4px 10px 0px #00000040'
      }
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      extraLarge: '1680px'
      // => @media (min-width: 1680px) { ... }
    },
    maxWidth: {
      maxWidthSection: '1920px'
    },
    scale: {
      scale2: '2'
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.customContainer': {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1920px'
        }
      });
    })
  ]
};
