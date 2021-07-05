import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0, 0.5),
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightRegular,
    },
    userAvatar: {
      cursor: 'pointer',
    },
  }),
);
