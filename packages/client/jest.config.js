import dotenv from 'dotenv';

dotenv.config();

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss|png|svg|jpg)$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
};
