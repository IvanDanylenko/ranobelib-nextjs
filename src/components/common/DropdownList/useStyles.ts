import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    button: {
      padding: 0,
      justifyContent: 'flex-start',
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    danger: {
      color: theme.palette.error.main,
    },
  }),
);
