import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import Logo from './images/logo.png';

const theme =  create({
    base: 'dark',

    appBg: '#161616',
    appContentBg: '#0d0d0d',  //TBD
    appBorderRadius: 0,
    textColor: 'rgba(255,255,255,0.9)', //TBD

    colorPrimary: '#fff',
    colorSecondary: '#fff', // TBD icon and highlight
    textInverseColor: '#1b1b1b',
    
    barBg: '#0d0d0d',
    barTextColor: '#d2d2d2',
    barSelectedColor: '#fbfbfb',
    
    inputTextColor: '#fff',
    inputBg: '#161616',
    inputBorderRadius: 0,

    brandTitle: 'CRED',
    brandUrl: 'https://cred.club',
    brandImage: Logo,
});

addons.setConfig({
    theme,
});