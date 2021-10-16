import faker from 'faker';
import { isPlainObject, pickBy } from 'lodash';
import { Story, Meta } from '@storybook/react';
import {
  Stack,
  Grid,
  Typography,
  Divider,
  TypographyProps,
  TypographyVariant,
} from '@mui/material';
import theme from '@/theme';

export default {
  title: 'UI/Typography',
  component: Typography,
} as Meta;

const innerText = faker.commerce.productDescription();

// Pick all typography variants from theme (Assuming only they are plain objects)
const variantOptions = Object.keys(pickBy(theme.typography, isPlainObject)) as TypographyVariant[];

const alignOptions = ['inherit', 'left', 'center', 'right', 'justify'] as const;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Sandbox = Template.bind({});
Sandbox.args = {
  variant: 'body2',
  align: 'inherit',
  noWrap: false,
  children: innerText,
};
Sandbox.argTypes = {
  variant: {
    options: variantOptions,
    description: 'Typography variants',
    control: { type: 'select' },
    table: {
      defaultValue: { summary: 'body2' },
    },
  },
  align: {
    options: alignOptions,
    control: { type: 'select' },
    description: 'Align text',
    table: {
      defaultValue: { summary: 'inherit' },
    },
  },
  noWrap: {
    description: 'Truncate long text, works for block and inline-block elements',
    table: {
      defaultValue: { summary: 'false' },
    },
  },
  children: {
    name: 'inner text',
    description: 'Text inside',
    control: { type: 'text' },
  },
};

const AllTemplate: Story<{ variants: TypographyVariant[] }> = ({ variants }) => (
  <Stack spacing={2} divider={<Divider />}>
    {variantOptions.map(
      (variant) =>
        variants.includes(variant) && (
          <Grid container key={variant} direction="row">
            <Grid item md={2}>
              <Typography variant={variant}>{variant}</Typography>
            </Grid>
            <Grid item md={10}>
              <Typography key={variant} variant={variant} noWrap>
                {innerText}
              </Typography>
            </Grid>
          </Grid>
        ),
    )}
  </Stack>
);

export const All = AllTemplate.bind({});
All.parameters = {
  controls: {
    expanded: false,
  },
};
All.args = {
  variants: [],
};
All.argTypes = {
  variants: {
    name: 'Show variants',
    options: variantOptions,
    control: {
      type: 'inline-check',
    },
  },
};
