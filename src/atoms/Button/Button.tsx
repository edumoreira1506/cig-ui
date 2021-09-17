import * as React from 'react';

import { Colors } from '../../constants/styles';
import Loading from '../../atoms/Loading/Loading';

import { StyledButton } from './Button.styles';

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  onClick,
  label,
  type = 'button',
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <StyledButton data-testid="loading" isLoading={isLoading} type={type} onClick={onClick} disabled={disabled}>
      {isLoading ? <Loading color={Colors.White} /> : label}
    </StyledButton>
  );
}
