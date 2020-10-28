/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(png|css)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
