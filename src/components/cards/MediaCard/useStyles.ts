import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    link: {
      display: 'block',
      padding: `${theme.spacing(1.5, 2)} !important`,
      margin: `${theme.spacing(0)} !important`,
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
    },
    title: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium,
    },
    subtitle: {
      fontSize: theme.typography.pxToRem(13),
      color: theme.palette.text.secondary,
    },
    icon: {
      marginLeft: theme.spacing(0.5),
    },
  }),
);
