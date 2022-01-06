import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.authHeader}>
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Button component={Link} to={linkTo} color="inherit" className={classes.accBtn} variant="contained">
        {btnText}
      </Button>
    </Box>
  );
};

export default AuthFooter;
