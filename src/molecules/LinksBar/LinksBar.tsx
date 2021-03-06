import { VFC } from 'react';

import SquareLink, { SquareLinkProps } from '../../atoms/SquareLink/SquareLink';
import { StyledContainer } from './LinksBar.styles';

interface LinksBarProps {
  items: SquareLinkProps[];
}

const LinksBar: VFC<LinksBarProps> = ({ items }: LinksBarProps) => (
  <StyledContainer>
    {items.map((item) => (
      <SquareLink target={item.target} key={item.href ?? item.identifier} href={item.href} onClick={item.onClick}>
        {item.children}
      </SquareLink>
    ))}
  </StyledContainer>
);

export default LinksBar;
