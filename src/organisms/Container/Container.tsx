import { ReactNode, useCallback, useState } from 'react';

import Header, { HeaderProps } from '../../molecules/Header/Header';
import Sidebar, { SidebarProps } from '../../molecules/Sidebar/Sidebar';

import { StyledContainer, StyledSidebarContainer, StyledHeaderContainer, StyledContent } from './Container.styles';

export interface ContainerProps {
  children: ReactNode;
  title: HeaderProps['title'];
  user: HeaderProps['user'];
  items: SidebarProps['items'];
  onMenuClick: SidebarProps['onClick'];
}

export default function Container({ title, children, user, items, onMenuClick }: ContainerProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuIsOpen(prevMenuIsOpen => !prevMenuIsOpen );
  }, []);

  const handleContentClick = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <Header sandwichButtonIsToggled={menuIsOpen} onToggleMenu={toggleMenu} title={title} user={user} />
      </StyledHeaderContainer>
      <StyledSidebarContainer>
        <Sidebar onClick={onMenuClick} items={items} isOpen={menuIsOpen} />
      </StyledSidebarContainer>
      <StyledContent onClick={handleContentClick} menuIsOpen={menuIsOpen}>
        {children}
      </StyledContent>
    </StyledContainer>
  );
}
