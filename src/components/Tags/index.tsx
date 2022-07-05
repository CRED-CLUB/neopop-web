import React from 'react';
import Typography from '@components/Typography';
import { typographyGuide } from '@primitives';
import { TagContainer, TagIcon, TagIconContainer } from './styles';
import { TagProps } from './types';
import { isEmpty } from '@utils';
import { getTagColor } from '@primitives/tags';

const DEFAULT_TYPE = 'success';
const DEFAULT_MODE = 'dark';

const Tag = ({
    children,
    colorConfig,
    textStyle,
    icon,
    noContainer = false,
    colorMode,
    type,
}: TagProps) => {
    const defaultColorConfig = getTagColor(type ?? DEFAULT_TYPE, colorMode ?? DEFAULT_MODE);

    const tagColorConfig = isEmpty(colorConfig)
        ? defaultColorConfig
        : colorConfig ?? defaultColorConfig;
    const { background, color } = tagColorConfig;
    const { tags } = typographyGuide;

    if (noContainer)
        return (
            <Typography as="span" {...(textStyle ?? tags.noContainerText)} color={color}>
                {children}
            </Typography>
        );

    return (
        <TagContainer style={{ background }}>
            {icon ? (
                <TagIconContainer>
                    <TagIcon src={icon} />
                </TagIconContainer>
            ) : null}
            <Typography {...(textStyle ?? tags.containerText)} color={color}>
                {children}
            </Typography>
        </TagContainer>
    );
};

export default Tag;
