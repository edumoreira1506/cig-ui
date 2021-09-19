import { useCallback } from 'react';

import { FieldProps } from '../../@types/form';
import Label from '../../atoms/Label/Label';

import { StyledContainer, StyledSelect } from './Select.styles';

export interface SelectProps extends FieldProps {
  options?: {
    value: string;
    label: string;
  }[];
  showEmptyOption?: boolean;
  emptyOptionText?: string;
}

export default function Select({
  value,
  onChange,
  label,
  name,
  required = false,
  options = [],
  showEmptyOption = false,
  emptyOptionText,
  inputTestId
}: SelectProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value), [onChange]);

  return (
    <StyledContainer>
      {label && <Label text={label} htmlFor={name} required={required} />}
      <StyledSelect
        required={required}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        data-testid={inputTestId}
      >
        {showEmptyOption && <option>{emptyOptionText ?? ''}</option>}
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
}
