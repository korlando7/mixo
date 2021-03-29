module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['dist']
};