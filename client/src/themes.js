import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const themeLight = createTheme({
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#D0D0D0'
      },
      background: {
        default: blueGrey[50],
        paper: '#fff',
        paperBorder: '#aeacad'
      }
    },
    typography: {
      "fontFamily": "Helvetica",
    },
  });

  export const themeDark = createTheme({
    palette: {
      primary: {
        main: '#272727'
      },
      secondary: {
        main: '#EC4040'
      },
      background: {
        default: "#222222",
        paper: '#263238',
        paperBorder: '#000'
      },
      text: {
        primary: "#ffffff",
        secondary: "#f5f5f5",
      },
    },
    typography: {
      "fontFamily": "Helvetica",
    },
  });
