import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    link: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  }),
);
