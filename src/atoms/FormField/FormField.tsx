import { ReactNode } from 'react';

import { StyledFormField } from './FormField.styles';

export interface FormFieldProps {
  children: ReactNode;
}

export default function FormField({ children }: FormFieldProps) {
  return (
    <StyledFormField>{children}</StyledFormField>
  );
}
