import * as React from 'react';
import { Cross } from '@components/Helpers';
import InputField from '@components/InputField';
import { colorGuide, typographyGuide } from '@primitives';
import { SearchBarContainer } from './styles';
import { SearchBarProps } from './types';
import { isEmpty } from '@utils';

const SearchBar = (props: SearchBarProps) => {
    const {
        iconUrl,
        colorConfig,
        textStyle = typographyGuide.searchBar.input,
        placeholder,
        handleSearchInput,
        colorMode,
        inputColorConfig,
        onSubmit,
    } = props;
    const [searchText, setSearchText] = React.useState('');
    const [isActive, setIsActive] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value ?? '';
        setSearchText(value);
        handleSearchInput(value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        inputRef?.current?.blur();
        onSubmit?.();
    };
    const clearData = () => {
        setSearchText('');
        handleSearchInput('');
    };
    const defaultSearchBarColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].searchBar;
    const defaultInputFieldColorConfig =
        colorGuide[colorMode === 'light' ? 'lightComponents' : 'darkComponents'].inputFields;
    const searchColorConfig = isEmpty(colorConfig)
        ? defaultSearchBarColorConfig
        : colorConfig ?? defaultSearchBarColorConfig;
    const inputFieldColorConfig = isEmpty(inputColorConfig)
        ? defaultInputFieldColorConfig
        : inputColorConfig ?? defaultInputFieldColorConfig;

    return (
        <SearchBarContainer
            {...searchColorConfig}
            className={isActive ? 'active' : ''}
            onClick={() => setIsActive(true)}
            onBlur={() => {
                setIsActive(false);
            }}
        >
            {iconUrl ? <img src={iconUrl} alt="search" className="icon" /> : null}
            <div className="input">
                <form onSubmit={handleSubmit} style={{ margin: '0', padding: '0' }}>
                    <InputField
                        inputRef={inputRef}
                        autoFocus={isActive}
                        textStyle={{
                            input: textStyle,
                            label: typographyGuide.inputFields.label,
                        }}
                        placeholder={placeholder ?? 'search'}
                        value={searchText}
                        onChange={handleChange}
                        colorConfig={inputFieldColorConfig}
                    />
                    <input type="submit" style={{ display: 'none' }} />
                </form>
            </div>
            {searchText ? <Cross color={searchColorConfig.closeIcon} onClick={clearData} /> : null}
        </SearchBarContainer>
    );
};

export default SearchBar;
