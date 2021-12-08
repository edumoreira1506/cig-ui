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

  const handleChangeInputValue = useCallback((newValue: number | string) => setInputValue(newValue.toString()), []);

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
      {Boolean(items.length) && (
        <StyledOptions>
          <List items={items} onItemClick={handleChangeInputValue} />
        </StyledOptions>
      )}
    </StyledContainer>
  );
}
