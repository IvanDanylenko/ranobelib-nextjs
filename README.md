# Homats shop

## Getting Started

#### First, install all packages:

```sh
# Install dependencies
# Recommended Node Version: 14.18.1
yarn install

# Enable husky
yarn husky install
```

Husky is configured to run next commands before each commit:

- Check staged files for `Eslint` errors and fix them if possible
- Format staged files with `Prettier`

#### Configure Eslint

To make eslint errors visible in VSCode, you need to install [the ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

It's recommended to tell VSCode to auto-fix eslint errors on save. To do so, create a `.vscode/settings.json` file with the following content:

```sh
# .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#### Configure Prettier

To configure VSCode to actually format our code on save according to our prettier configuration file we need to install [VSCode's prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
Then, you can tell VSCode to format the code on save, by editing our `.vscode/settings.json` file:

```sh
# .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Add those two lines:
  "editor.formatOnSave": true, // Tell VSCode to format files on save
  "editor.defaultFormatter": "esbenp.prettier-vscode" // Tell VSCode to use Prettier as default file formatter
}
```

#### Start project

To start project for development:

```sh
yarn dev
```

To start project for production:

```sh
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Storybook

Storybook is great tool to document components for reuse and automatically visually test your components to prevent bugs.

To start storybook:

```sh
yarn storybook
```

To build static storybook:

```sh
yarn build-storybook
```

Storybook will create a static web application in `/storybook-static` directory. This can be served by any web server. Try it out locally by running:

```sh
npx http-server ./storybook-static
```

### Testing

To test our project we use `jest` test runner.
To run tests use command:

```sh
yarn test
```
