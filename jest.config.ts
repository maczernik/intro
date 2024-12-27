import type { Config } from 'jest';

const jestConfig: Config = {
  cache: true,
  displayName: 'Fleet',
  clearMocks: true,
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    // Keep include as first item in the array then exclude. Otherwise, it will not work.
    '**/*.ts',
    '!**/*.config.ts',
    '!**/*.harness.ts',
    '!**/*.mock.ts',
    '!**/*.model.ts',
    '!**/*.routes.ts',
    '!**/*-routing.module.ts',
    '!**/*.stub.ts',
    '!**/*.stories.ts',
    '!src/build-config/*',
    '!src/main.ts',
    '!src/testing/*',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: [
    'lcov',
    [
      'text',
      { skipFull: true },
    ],
  ],
  maxWorkers: '33%',
  preset: 'jest-preset-angular',
  randomize: true,
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  setupFiles: [
  ],
  transform: {
    '^.+\\.(html|js|svg|ts)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!.*(.mjs$|tslib))',
  ],
  testEnvironment: 'jsdom',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  modulePaths: ['<rootDir>'],
};

export default jestConfig;
