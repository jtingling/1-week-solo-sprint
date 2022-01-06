import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '5vh',
    height: '100vh',
    backgroundColor: theme.palette.secondary.main,
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  formWrapper: {
    '&.MuiPaper-root': {
      boxShadow: theme.shadows[10],
      marginTop: theme.spacing(35),
    },

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: 800,
  },
  form: {
    maxWidth: 450,
    width: '100%',
    height: 800,
    margin: 0,
  },
  welcome: {
    '&.MuiTypography-root': {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 900,
      marginTop: theme.spacing(10),
    },
    fontSize: 26,
    color: theme.palette.secondary.dark,
    fontWeight: 900,
    textAlign: 'center',
  },
  caption: {
    '&.MuiTypography-root': {
      fontSize: 16,
      fontWeight: 800,
      marginTop: 0,
    },
    '&.MuiButton-root': {
      width: 20,
      fontSize: 16,
      fontWeight: 800,
      color: theme.palette.primary.main,
      padding: 0,
      textTransform: 'none',
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
    '&.MuiButton-root:hover': {
      backgroundColor: 'transparent',
    },
    padding: '10px',
    maxWidth: 750,
    width: '100%',
    color: theme.palette.secondary.dark,
    textAlign: 'center',
  },
}));

export default useStyles;
