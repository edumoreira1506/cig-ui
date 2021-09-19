import * as React from 'react';

import Button, { ButtonProps } from '../Button/Button';

import { StyledIcon } from './LinkButton.styles';

export interface LinkButtonProps {
  onClick: ButtonProps['onClick'];
  title: string;
  icon: React.ReactNode;
}

export default function LinkButton({ onClick, title, icon }: LinkButtonProps) {
  return (
    <Button onClick={onClick} alignment="left">
      <StyledIcon>
        {icon}
      </StyledIcon>
      {title}
    </Button>
  );
}
