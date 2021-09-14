import { useCallback } from 'react';

import { StyledContainer, StyledInput, StyledLabel } from './Input.styles';

export interface InputProps {
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number' | 'email';
  label?: string;
  name?: string;
  placeholder?: string;
  inputTestId?: string;
}

export default function Input({ value, onChange, type = 'text', label, name, placeholder, inputTestId }: InputProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput data-testid={inputTestId} placeholder={placeholder} id={name} name={name} value={value} onChange={handleChange} type={type} />
    </StyledContainer>
  );
}
