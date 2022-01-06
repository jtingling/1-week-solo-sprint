import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    '&.MuiFormLabel-root': {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 900,
      color: theme.palette.secondary.dark,
      fontSize: 16,
      paddingLeft: '5px',
    },
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
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
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

export default useStyles;
