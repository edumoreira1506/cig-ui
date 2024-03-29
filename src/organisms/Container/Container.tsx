import { Fragment, ReactNode, useCallback, useState } from 'react';

import Header, { HeaderProps } from '../../molecules/Header/Header';
import Sidebar, { SidebarProps } from '../../molecules/Sidebar/Sidebar';
import { Loading } from '../../atoms';
import { Colors } from '../../constants/styles';

import {
  StyledContainer,
  StyledSidebarContainer,
  StyledHeaderContainer,
  StyledContent,
  StyledLoading
} from './Container.styles';

export interface ContainerProps {
  children: ReactNode;
  title: HeaderProps['title'];
  user: HeaderProps['user'];
  onClickTitle: HeaderProps['onClickTitle'];
  items: SidebarProps['items'];
  onMenuClick: SidebarProps['onClick'];
  linkComponent?: SidebarProps['linkComponent'];
  shortcuts: HeaderProps['shortcuts'];
  onSearch?: HeaderProps['onSearch'];
  onShortcutClick: HeaderProps['onClickShortcut'];
  logoUrl?: string;
  isLoading?: boolean;
}

export default function Container({
  title,
  children,
  user,
  items,
  onMenuClick,
  shortcuts,
  onShortcutClick,
  logoUrl,
  isLoading = false,
  onSearch,
  onClickTitle,
  linkComponent = Fragment
}: ContainerProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuIsOpen(prevMenuIsOpen => !prevMenuIsOpen );
  }, []);

  const handleContentClick = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  const handleMenuClick = useCallback((title: string) => {
    onMenuClick(title);
    setMenuIsOpen(false);
  }, [onMenuClick]);

  return (
    <StyledContainer logoUrl={logoUrl}>
      {isLoading && (
        <StyledLoading>
          <Loading color={Colors.DarkBlue} />
        </StyledLoading>
      )}
      <StyledHeaderContainer>
        <Header
          sandwichButtonIsToggled={menuIsOpen}
          onToggleMenu={toggleMenu}
          title={title}
          user={user}
          shortcuts={shortcuts}
          onClickShortcut={onShortcutClick}
          onSearch={onSearch}
          onClickTitle={onClickTitle}
        />
      </StyledHeaderContainer>
      <StyledSidebarContainer>
        <Sidebar
          onClick={handleMenuClick}
          items={items}
          isOpen={menuIsOpen}
          linkComponent={linkComponent}
        />
      </StyledSidebarContainer>
      <StyledContent onClick={handleContentClick} menuIsOpen={menuIsOpen}>
        {children}
      </StyledContent>
    </StyledContainer>
  );
}
