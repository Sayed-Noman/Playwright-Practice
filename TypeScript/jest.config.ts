import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-playwright-preset',  // Use jest-playwright-preset for integration
  testEnvironment: 'node',           // Set the test environment to Node.js
  setupFilesAfterEnv: [
    '@playwright/test',              // Use Playwright matchers
    'expect-playwright',             // Ensure Playwright works with Jest's assertions
    '<rootDir>/jest.setup.ts'        // Jest setup file (for Playwright matchers)
  ],
  testTimeout: 30000,                // Increase Jest's default test timeout
  transform: {
    '^.+\\.ts$': 'ts-jest',          // Use ts-jest for handling TypeScript files
  },
  testMatch: ['**/tests/**/*.test.ts'], // Match only test files in the tests directory
};

export default config;
