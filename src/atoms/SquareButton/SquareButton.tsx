import React, { ReactNode, VFC } from 'react';

import { StyledButton } from './SquareButton.styles';

export type SquareButtonProps = {
  onClick: () => void;
  icon: ReactNode;
  text: string;
}

export const SquareButton: VFC<SquareButtonProps> = ({
  onClick,
  icon,
  text
}: SquareButtonProps) => (
  <StyledButton onClick={onClick}>
    {icon} {text}
  </StyledButton>
);
