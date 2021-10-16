const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    // Disable PostCSS deprecation warning
    // @see https://github.com/storybookjs/storybook/issues/14440
    postcss: false,
  },
  // @see https://storybook.js.org/docs/react/configure/typescript
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      // Silence warning about loose value for this plugin
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  }),
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // MUI v5 with Storybook v6.x
        // @see https://mui.com/guides/migration-v4/#troubleshooting
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
      plugins: [
        ...config.resolve.plugins,
        // Resolve aliases from tsconfig.json
        // @see https://github.com/storybookjs/storybook/issues/6316
        new TsconfigPathsPlugin(),
      ],
    },
  }),
};
