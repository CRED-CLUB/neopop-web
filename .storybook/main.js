const path = require('path');
module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../intro/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, '../src/components'),
            '@hooks': path.resolve(__dirname, '../src/hooks'),
            '@primitives': path.resolve(__dirname, '../src/primitives'),
            '@types': path.resolve(__dirname, '../src/types'),
            '@utils': path.resolve(__dirname, '../src/utils'),
        };
        return config;
    },
};
