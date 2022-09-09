export default {
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svg$': '<rootDir>/src/svgTransform.js',
  },
  moduleNameMapper: {
    'react-family-tree': '<rootDir>/src/svgTransform.js',
  }
};
