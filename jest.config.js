module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    // Handle assets import
    // @see https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

    // Resolve module aliases as in tsconfig.json
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // @see https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  // Jest docs recommend to move most used extensions to the left
  // @see https://jestjs.io/docs/next/configuration#modulefileextensions-arraystring
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
};
