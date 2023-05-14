module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svg.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: [
    '**/__tests__/**/?(*.)+(test|tests).[t]s?(x)',
    '**/?(*.)+(test|tests).[t]s?(x)',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation)/',
    'jest-runner',
  ],
};
