import * as React from 'react';

import { StyledButton } from './Button.styles';

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({ onClick, label, type = 'button', disabled = false }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
}
