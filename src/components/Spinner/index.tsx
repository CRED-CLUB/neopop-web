import React from 'react';
import { Container, ContentContainer } from './styles';
import { SpinnerProps } from './types';
import { colorPalette } from '@primitives';

const Spinner = ({
    size = '50px',
    spinningChildren = true,
    color = colorPalette.info[500],
    childrenId,
    childrenClassName,
    ...props
}: SpinnerProps) => (
    <Container size={size} color={color} {...props}>
        <ContentContainer
            id={childrenId}
            className={childrenClassName}
            spinningChildren={spinningChildren}
        >
            {props.children}
        </ContentContainer>
    </Container>
);

export default Spinner;
