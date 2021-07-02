import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    padding: theme.spacing(3, 2),
  },
  registerLinkRoot: {
    transition: theme.transitions.create(['color']),
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
  },
}));
