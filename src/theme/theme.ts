import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

// Create a theme instance
let theme = createTheme({
  palette,
  typography,
  components,
});

// @see https://mui.com/customization/typography
theme = responsiveFontSizes(theme);

export default theme;
