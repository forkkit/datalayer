module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'scss'],
    roots: [ 
        '<rootDir>/src'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      },
    testMatch: [
      '**/__tests__/**/*.+(ts|tsx|js)',
      '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
}
