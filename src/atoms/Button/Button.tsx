import * as React from 'react';

import { Colors } from '../../constants/styles';
import Loading from '../../atoms/Loading/Loading';

import { StyledButton } from './Button.styles';

export interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  alignment?: 'center' | 'left';
}

export default function Button({
  onClick,
  label,
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  alignment = 'center'
}: ButtonProps) {
  const buttonContent = React.useMemo(() => children ?? label, [label, children]);

  return (
    <StyledButton alignment={alignment} isLoading={isLoading} type={type} onClick={onClick} disabled={disabled}>
      {isLoading ? <Loading color={Colors.White} /> : buttonContent}
    </StyledButton>
  );
}
