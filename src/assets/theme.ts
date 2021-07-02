import { createMuiTheme } from '@material-ui/core';
import { green, lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: green,
    background: {
      default: '#f2f2f3',
      // default: 'rgba(0,0,0,.5)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Open Sans',
      'Roboto',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif',
    ].join(', '),
    fontWeightMedium: 600,
  },
  mixins: {
    toolbar: {
      minHeight: 44,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 54,
      },
      '@media (min-width:600px)': {
        minHeight: 54,
      },
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'capitalize',
      },
    },
  },
});

export default theme;
