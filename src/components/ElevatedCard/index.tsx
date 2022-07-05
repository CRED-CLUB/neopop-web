import React from 'react';
import { CardContainer, CardEdge, CardFace } from './styles';
import { CardProps } from './types';

const ElevatedCard = (props: CardProps) => {
    const { style, children, ...propsToFwd } = props;

    return (
        <CardContainer style={style} {...propsToFwd}>
            <CardFace {...propsToFwd}>{children}</CardFace>
            <CardEdge edgeColors={propsToFwd.edgeColors} className="right" />
            <CardEdge edgeColors={propsToFwd.edgeColors} className="bottom" />
        </CardContainer>
    );
};

export default ElevatedCard;
