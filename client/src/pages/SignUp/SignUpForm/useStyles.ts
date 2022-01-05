import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    maxHeight: 400,
    height: '450px',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(20),
    [theme.breakpoints.up('sm')]: {
      padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginBottom: theme.spacing(0),
    },
  },
  label: {
    '&.MuiFormLabel-root': {
      fontFamily: 'Roboto',
      fontWeight: 900,
      color: theme.palette.secondary.dark,
      fontSize: 16,
      paddingLeft: '5px',
    },
  },
  inputs: {
    '&.MuiInputBase-input': {
      [theme.breakpoints.up('sm')]: {
        fontSize: 20,
        fontFamily: theme.typography.fontFamily,
        height: '3rem',
        paddingLeft: '25px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
        fontFamily: theme.typography.fontFamily,
        height: '1rem',
        paddingLeft: '12px',
      },
    },
    marginTop: '1rem',
    width: 'inherit',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    '&.MuiButtonBase-root': {
      backgroundColor: theme.palette.primary.main,
    },
    '&.MuiButtonBase-root:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

export default useStyles;
