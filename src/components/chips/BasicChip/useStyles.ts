import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    chip: {
      borderRadius: 4,
    },
    clickable: {
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.grey[300],
      },
    },
  }),
);
