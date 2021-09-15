import { useCallback } from 'react';

import { FieldProps } from '../../@types/form';
import Label from '../Label/Label';
import { StyledContainer, StyledInput } from './Input.styles';

export interface InputProps extends FieldProps {
  type?: 'text' | 'number' | 'email' | 'date' | 'password';
  autoComplete?: string;
}

export default function Input({ autoComplete, value, onChange, type = 'text', label, name, placeholder, inputTestId, required = false }: InputProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  return (
    <StyledContainer>
      {label && <Label text={label} htmlFor={name} required={required} />}
      <StyledInput
        required={required}
        data-testid={inputTestId}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        autoComplete={autoComplete}
      />
    </StyledContainer>
  );
}
