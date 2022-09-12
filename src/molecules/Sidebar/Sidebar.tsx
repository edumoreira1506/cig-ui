import { FC, Fragment } from 'react';
import LinkButton, { LinkButtonProps } from '../../atoms/LinkButton/LinkButton';
import { LinkIdentifiers } from '../../constants';

import { StyledContainer, StyledItem } from './Sidebar.styles';

type LinkComponentProps = {
  identifier: typeof LinkIdentifiers.VIEW_MENU_LINK;
  params?: Record<string, string>
}

export interface SidebarItem {
  title: LinkButtonProps['title'],
  icon: LinkButtonProps['icon']
}

export interface SidebarProps {
  items: SidebarItem[];
  onClick: LinkButtonProps['onClick'];
  isOpen?: boolean;
  linkComponent?: FC<LinkComponentProps>
}

export default function Sidebar({
  items,
  onClick,
  isOpen = true,
  linkComponent: LinkComponent = Fragment
}: SidebarProps) {
  return (
    <StyledContainer data-testid="sidabar-container" isOpen={isOpen}>
      {items.map((item) => (
        <StyledItem key={item.title}>
          <LinkComponent identifier='view-menu-link' params={{ title: item.title }}>
            <LinkButton {...item} onClick={onClick} />
          </LinkComponent>
        </StyledItem>
      ))}
    </StyledContainer>
  );
}
