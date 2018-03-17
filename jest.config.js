module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
    },
    testMatch: [
        '**/index.test.ts',
        '**/test/**/*.(test|spec).(ts|js)'
    ],
    testEnvironment: 'node'
};