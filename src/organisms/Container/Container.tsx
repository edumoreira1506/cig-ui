import { ReactNode, useState } from 'react';

import Header, { HeaderProps } from '../../molecules/Header/Header';
import Sidebar, { SidebarProps } from '../../molecules/Sidebar/Sidebar';

import { StyledSidebarContainer, StyledHeaderContainer, StyledContent } from './Container.styles';

export interface ContainerProps {
  children: ReactNode;
  title: HeaderProps['title'];
  user: HeaderProps['user'];
  items: SidebarProps['items'];
  onMenuClick: SidebarProps['onClick'];
}

export default function Container({ title, children, user, items, onMenuClick }: ContainerProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <StyledHeaderContainer>
        <Header onToggleMenu={setMenuIsOpen} title={title} user={user} />
      </StyledHeaderContainer>
      <StyledSidebarContainer>
        <Sidebar onClick={onMenuClick} items={items} isOpen={menuIsOpen} />
      </StyledSidebarContainer>
      <StyledContent>
        {children}
      </StyledContent>
    </>
  );
}
