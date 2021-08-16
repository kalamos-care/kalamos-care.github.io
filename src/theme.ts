// import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import GTHaptikMediumWoff2 from './assets/fonts/GT-Haptik-Medium-2.woff2';
import "@fontsource/arimo";


const gthaptikmedium = {
  fontFamily: 'GT-Haptik-Medium',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('GT-Haptik-Medium'),
    url(${GTHaptikMediumWoff2}) format('woff2')
  `,
};

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#67568c',
        main: '#463366',
        dark: '#301e4e',
      },
      secondary: {
        main: '#ff6e6c',
      },
      text: {
        primary: "#1f1235",
        secondary: "#1b1425",
      }
    },
    typography: {
      button: {
        fontFamily: "GT-Haptik-Medium",
      },
      h1: {
        fontFamily: "GT-Haptik-Medium",
      },
      h2: {
        fontFamily: "GT-Haptik-Medium",
      },
      h3: {
        fontFamily: "GT-Haptik-Medium",
      },
      h4: {
        fontFamily: "GT-Haptik-Medium",
      },
      h5: {
        fontFamily: "GT-Haptik-Medium",
      },
      h6: {
        fontFamily: "GT-Haptik-Medium",
      },
      fontFamily: [
        'Arimo',
        'sans-serif',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [gthaptikmedium],
        },
      },
    },
  });

  export default theme;