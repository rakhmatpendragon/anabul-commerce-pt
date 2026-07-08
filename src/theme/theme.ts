import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9f402d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4a654e',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ba1a1a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fcf9f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#1b1c1c',
      secondary: '#56423e',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Quicksand", sans-serif',
    h1: {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
