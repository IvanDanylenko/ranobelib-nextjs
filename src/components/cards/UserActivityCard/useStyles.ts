import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    rank: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(14),
    },
    small: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.text.secondary,
    },
    fullHeight: {
      height: '100%',
    },
  }),
);
