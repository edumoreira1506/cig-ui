import * as React from 'react';

import { StyledButton } from './Button.styles';

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: 'button' | 'submit';
}

export default function Button({ onClick, label, type = 'button' }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
