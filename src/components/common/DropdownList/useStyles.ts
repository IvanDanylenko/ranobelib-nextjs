import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    list: {
      maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      overflowY: 'auto',
      '@media (min-width:600px)': {
        maxHeight: `calc(100vh - 54px)`,
      },
    },
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
