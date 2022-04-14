import { useCallback, useEffect, useState } from 'react';

import Input, { InputProps } from '../../molecules/Input/Input';
import { StyledContainer, StyledOptions } from './Autocomplete.styles';
import List, { ListProps } from '../../atoms/List/List';

interface AutocompleteProps {
  items: ListProps['items'];
  onChange: ListProps['onItemClick'];
  inputProps: Omit<InputProps, 'value' | 'onChange' | 'type' | 'onFocus'>
}

export default function Autocomplete({ items, onChange, inputProps = {} }: AutocompleteProps) {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const openOptions = useCallback(() => setShowOptions(true), []);

  const handleChangeInputValue = useCallback((newValue: number | string) => {
    if (!showOptions) setShowOptions(true);

    setInputValue(newValue.toString());
  }, [showOptions]);

  const handleItemClick = useCallback((newValueKey: number | string) => {
    const newItem = items.find(i => i.key === newValueKey);

    setInputValue(newItem?.content?.toString() ?? '');
    setShowOptions(false);
  }, [items]);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  return (
    <StyledContainer>
      <Input
        value={inputValue}
        onChange={handleChangeInputValue}
        onFocus={openOptions}
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
