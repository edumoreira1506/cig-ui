import { useCallback } from 'react';

import Loading from '../Loading/Loading';
import { FieldProps } from '../../@types/form';
import Label from '../Label/Label';

import { StyledContainer, StyledInput, StyledInputLoading } from './Input.styles';

export interface InputProps extends FieldProps {
  type?: 'text' | 'number' | 'email' | 'date' | 'password';
  autoComplete?: string;
  isLoading?: boolean;
}

export default function Input({
  autoComplete,
  value,
  onChange,
  type = 'text',
  label,
  name,
  placeholder,
  inputTestId,
  required = false,
  onBlur,
  isLoading = false
}: InputProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);

  return (
    <StyledContainer>
      {label && <Label text={label} htmlFor={name} required={required} />}
      {isLoading && (
        <StyledInputLoading>
          <Loading />
        </StyledInputLoading>
      )}
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
        onBlur={onBlur}
      />
    </StyledContainer>
  );
}
