import * as React from 'react';

import Button from '../Button/Button';
import { SidebarItem } from '../../molecules/Sidebar/Sidebar';

import { StyledIcon } from './LinkButton.styles';

export interface LinkButtonProps {
  onClick: (itemTitle: SidebarItem['title']) => void;
  title: string;
  icon: React.ReactNode;
}

export default function LinkButton({ onClick, title, icon }: LinkButtonProps) {
  const handleButtonClick = React.useCallback(() => onClick(title), [title, onClick]);
  
  return (
    <Button onClick={handleButtonClick} alignment="left">
      <StyledIcon>
        {icon}
      </StyledIcon>
      {title}
    </Button>
  );
}
