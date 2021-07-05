import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    cardHeader: {
      padding: theme.spacing(1.5, 2),
      borderBottom: `2px solid ${theme.palette.primary.light}`,
    },
    cardContent: {
      padding: theme.spacing(1.5, 2),
      '&:last-child': {
        paddingBottom: theme.spacing(1.5),
      },
    },
    cardContentDivided: {
      '& > *:not(:last-child)': {
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      },
    },
    headerText: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
);
