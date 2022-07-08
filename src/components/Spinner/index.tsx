import React from 'react';
import { Container, ContentContainer } from './styles';
import { SpinnerProps } from './types';

const Spinner = ({
    spinningContent = true,
    childrenId,
    childrenClassName,
    ...props
}: SpinnerProps) => (
    <Container {...props}>
        <ContentContainer
            id={childrenId}
            className={childrenClassName}
            spinningContent={spinningContent}
        >
            {props.children}
        </ContentContainer>
    </Container>
);

export default Spinner;
