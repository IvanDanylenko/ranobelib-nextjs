import {
  lighten,
  makeStyles,
  StyleRules,
  StyleRulesCallback,
  Theme,
} from '@material-ui/core/styles';

export default makeStyles(
  (theme): StyleRules => ({
    root: {
      minWidth: 24,
      height: 35,
      lineHeight: 1.4,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginLeft: Math.floor(theme.spacing(1) / 2),
      marginRight: Math.floor(theme.spacing(1) / 2),
      '&:hover': {
        backgroundColor: lighten(theme.palette.primary.main, 0.2),
      },
    },
    rootIcon: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      '& $startIcon': {
        margin: theme.spacing(0),
      },
    },
    outlined: {
      borderColor: theme.palette.common.white,
    },
    label: {
      color: theme.palette.common.white,
      textTransform: 'capitalize',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
    startIcon: {},
    endIcon: {
      marginLeft: Math.floor(theme.spacing(1) / 2),
    },
    regular: {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.fontSize,
    },
  }),
);
