import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

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
      marginTop: theme.spacing(50),
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: 500,
    borderRadius: theme.shape.borderRadius,
  },
  form: {
    maxWidth: 450,
    width: '100%',
    height: 500,
    margin: 0,
  },
  welcome: {
    '&.MuiTypography-root': {
      fontFamily: 'Roboto',
      fontWeight: 900,
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    fontSize: 22,
    color: theme.palette.secondary.dark,
    fontWeight: 900,
    textAlign: 'center',
  },
}));

export default useStyles;
