import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#f14140' },
    secondary: { main: '#ededed', light: '#ffffff', dark: '#000000' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
