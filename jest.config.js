module.exports = {
  type: 'module',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'jest-transform',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/',
  ],
  esModuleInterop: true,
  extensionsToTreatAsEsm: ['.js', '.jsx'],
};
