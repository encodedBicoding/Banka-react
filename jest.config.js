module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/testSetup.js'],
  'moduleNameMapper': {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  'testRegex': '((\\.|/*.)(test))\\.js?$',
  collectCoverage: true,
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  }
};
  
