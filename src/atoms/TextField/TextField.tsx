import { useCallback } from 'react';

import { FieldProps } from '../../@types/form';
import Label from '../Label/Label';
import { StyledContainer, StyledTextArea } from './TextField.styles';

export default function TextField({ value, onChange, label, name, placeholder, inputTestId, required = false }: FieldProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value), [onChange]);

  return (
    <StyledContainer>
      {label && <Label text={label} htmlFor={name} />}
      <StyledTextArea required={required} data-testid={inputTestId} placeholder={placeholder} id={name} name={name} value={value} onChange={handleChange} />
    </StyledContainer>
  );
}
