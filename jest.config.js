module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./client/setUpTests.js'],
  collectCoverageFrom: ['./client/*.test.{js,jsx}'],
  moduleNameMapper: {
    '.scss$': 'scss-stub.js',
  },
};
