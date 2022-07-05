import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs';
import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';

// Global decorator to apply the styles to all stories
export const decorators = [
    (Story) => (
            <Story />
    ),
];

// Custom Viewport for better looking
const CUSTOM_VIEWPORTS = {
    iphoneX: {
        name: 'iPhone X',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    ...INITIAL_VIEWPORTS,
};

addParameters({
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: CUSTOM_VIEWPORTS,
        defaultViewport: 'iphoneX',
    },
    viewMode: 'docs',
    page: DocsPage,
    previewTabs: {
        'storybook/docs/panel': {
            index: -1,
        },
        canvas: { title: 'Playground' },
    },
    options: {
        storySort: {
            order: [
                'Introduction',
                'Foundation',
                ['Colors', 'Typography', 'Layout', 'Miscellaneous', 'Customisation'],
                'Components',
            ],
        },
    },
});

export const parameters = {
    docs: {
        transformSource: (input) =>
            prettier.format(input, {
                parser: 'babel',
                plugins: [prettierBabel],
            }),
    },
};
