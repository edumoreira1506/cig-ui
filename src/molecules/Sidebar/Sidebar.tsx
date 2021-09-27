import LinkButton, { LinkButtonProps } from '../../atoms/LinkButton/LinkButton';

import { StyledContainer, StyledItem } from './Sidebar.styles';

export interface SidebarItem {
  title: LinkButtonProps['title'],
  icon: LinkButtonProps['icon']
}

export interface SidebarProps {
  items: SidebarItem[];
  onClick: LinkButtonProps['onClick'];
  isOpen?: boolean;
}

export default function Sidebar({ items, onClick, isOpen = true }: SidebarProps) {
  return (
    <StyledContainer data-testid="sidabar-container" isOpen={isOpen}>
      {items.map((item) => (
        <StyledItem key={item.title}>
          <LinkButton {...item} onClick={onClick} />
        </StyledItem>
      ))}
    </StyledContainer>
  );
}
