import React from 'react';
import Typography from '@components/Typography';
import { InputFieldProps } from './types';
import { Container, Input, Label } from './styles';
import useScrollIntoView from '@hooks/useScrollIntoView';
import useAutoFocus from '@hooks/useAutoFocus';
import { colorGuide, typographyGuide } from '@primitives';
import { isEmpty } from '@utils';

const InputField = (props: InputFieldProps) => {
    const {
        id,
        label,
        colorMode,
        isDisabled,
        inputRef,
        scrollIntoView,
        autoFocus,
        value,
        colorConfig,
        textStyle,
        hasError,
        errorMessage = 'error message',
        ...propsToFwd
    } = props;
    const customRef = React.useRef<HTMLInputElement | null>(null);
    const { inputFields } = typographyGuide;
    useScrollIntoView({ scrollIntoView: scrollIntoView, ref: customRef });
    useAutoFocus({ autoFocus: autoFocus, ref: customRef, currentValue: value });

    const getLabelColor = () => {
        if (hasError) {
            return colorConfig?.errorColor;
        }
        return colorConfig?.labelColor;
    };

    const labelText = () => {
        if (hasError) {
            return errorMessage;
        }
        return label;
    };
    const defaultColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].inputFields;

    const inputFieldColorConfig = isEmpty(colorConfig)
        ? defaultColorConfig
        : colorConfig ?? defaultColorConfig;

    return (
        <Container>
            {label ? (
                <Label htmlFor={id}>
                    <Typography
                        {...(textStyle?.label ?? inputFields.label)}
                        color={getLabelColor()}
                    >
                        {labelText()}
                    </Typography>
                </Label>
            ) : (
                ''
            )}
            <Typography {...(textStyle?.input ?? inputFields.text)}>
                <Input
                    ref={(ref) => {
                        customRef.current = inputRef ? (inputRef.current = ref) : ref;
                    }}
                    value={value}
                    id={id}
                    disabled={isDisabled}
                    textColor={inputFieldColorConfig?.textColor}
                    caretColor={inputFieldColorConfig?.caretColor}
                    placeholderColor={inputFieldColorConfig?.placeholderColor}
                    text={textStyle?.input ?? inputFields.text}
                    {...propsToFwd}
                />
            </Typography>
        </Container>
    );
};

export default InputField;
