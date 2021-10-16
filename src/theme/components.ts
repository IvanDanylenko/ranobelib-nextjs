import { Components } from '@mui/material/styles';

const components: Components = {
  MuiTypography: {
    defaultProps: {
      variant: 'body2',
    },
    styleOverrides: {
      caption: {
        textTransform: 'uppercase',
      },
    },
  },
};

export default components;
