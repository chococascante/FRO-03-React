/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/types/generated/*",
  ],
};

module.exports = config;
