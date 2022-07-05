import {
    ButtonKinds,
    ButtonVariants,
    ButtonSizes,
    ButtonModes,
    NeoPopElevationDirections,
    ButtonUIConfig,
    ButtonProps,
} from '@components/Button/types';
import { FontType, FontWeights } from '@components/Typography/types';
import { CheckboxColorConfig } from '@components/Checkbox/types';
import { RadioColorConfig } from '@components/Radio/types';
import { ToggleColorConfig } from '@components/Toggle/types';
import { Directions } from '@components/Helpers/types';
import { InputColorConfig } from '@components/InputField/types';
import { ToastTypes } from '@components/Toast/types';
import { ScoremeterModes } from '@components/Scoremeter/types';

export { FontType, FontWeights, NeoPopElevationDirections, Directions };
export interface FontNameSpaceInterface {
    fontWeight: FontWeights;
    fontType: FontType;
    fontSize: number;
}

export type {
    ToastTypes,
    ButtonVariants,
    ButtonKinds,
    ButtonSizes,
    ButtonModes,
    CheckboxColorConfig,
    RadioColorConfig,
    ToggleColorConfig,
    InputColorConfig,
    ScoremeterModes,
    ButtonUIConfig,
    ButtonProps,
};
