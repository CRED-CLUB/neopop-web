import React from 'react';
import ElevatedButton from './components/ElevatedButton';
import FlatButton from './components/FlatButton';
import LinkButton from './components/LinkButton';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
    const { kind } = props;
    switch (kind) {
        case 'elevated':
            return <ElevatedButton {...props} />;
        case 'flat':
            return <FlatButton {...props} />;
        case 'link':
            return <LinkButton {...props} />;
        default:
            return <FlatButton {...props} />;
    }
};

export default Button;
