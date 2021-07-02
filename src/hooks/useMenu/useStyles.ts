import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0, 0.5),
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
    },
    iconButton: {
      minWidth: theme.spacing(3),
      '& $startIcon': {
        margin: 0,
      },
    },
    startIcon: {},
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: theme.typography.pxToRem(18),
      },
    },
  }),
);
