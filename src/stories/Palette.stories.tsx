import { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { PaletteOptions, PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import { ConditionalKeys } from 'type-fest';
import { get } from 'lodash';
import theme from '@/theme';

export default {
  title: 'UI/Palette',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

const paletteOptions: ConditionalKeys<PaletteOptions, PaletteColorOptions | undefined>[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
];

const paletteColors: (keyof PaletteColor)[] = ['light', 'main', 'dark'];

export const Palette: Story = () => {
  return (
    <Container maxWidth="md">
      {paletteOptions.map((color) => (
        <Fragment key={color}>
          <Typography variant="body1" gutterBottom sx={{ textTransform: 'capitalize' }}>
            {color}
          </Typography>
          <Grid container mb={2} spacing={2}>
            {paletteColors.map((variant) => (
              <Grid container key={variant} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    bgcolor: `${color}.${variant}`,
                    width: 48,
                    height: 48,
                    mr: 1,
                    borderRadius: 1,
                  }}
                />
                <Box>
                  <Typography>
                    {color}.{variant}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {get(theme, ['palette', color, variant])}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Fragment>
      ))}
    </Container>
  );
};
