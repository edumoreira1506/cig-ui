import { useCallback, useEffect, useState } from 'react';

import Input, { InputProps } from '../../molecules/Input/Input';
import { StyledContainer, StyledOptions } from './Autocomplete.styles';
import List from '../../atoms/List/List';

interface AutocompleteProps {
  items: string[];
  onChange: (value: string) => void;
  inputProps: Omit<InputProps, 'value' | 'onChange' | 'type'>
}

export default function Autocomplete({ items, onChange, inputProps = {} }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(true);

  const handleChangeInputValue = useCallback((newValue: number | string) => {
    if (!showOptions) setShowOptions(true);

    setInputValue(newValue.toString());
  }, [showOptions]);

  const handleItemClick = useCallback((newValue: number | string) => {
    setInputValue(newValue.toString());
    setShowOptions(false);
  }, []);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  return (
    <StyledContainer>
      <Input
        value={inputValue}
        onChange={handleChangeInputValue}
        {...inputProps}
      />
      {Boolean(items.length && showOptions) && (
        <StyledOptions>
          <List items={items} onItemClick={handleItemClick} />
        </StyledOptions>
      )}
    </StyledContainer>
  );
}
