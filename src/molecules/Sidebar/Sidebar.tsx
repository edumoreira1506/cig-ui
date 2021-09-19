import LinkButton, { LinkButtonProps } from '../../atoms/LinkButton/LinkButton';

import { StyledContainer } from './Sidebar.styles';

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
    <StyledContainer isOpen={isOpen}>
      {items.map((item) => (
        <LinkButton key={item.title} {...item} onClick={onClick} />
      ))}
    </StyledContainer>
  );
}
