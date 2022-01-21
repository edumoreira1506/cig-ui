import { FC, ReactNode } from 'react';

import { StyledItem } from './SquareLink.styles';

export interface SquareLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const SquareLink: FC<SquareLinkProps> = ({ href, children, onClick }) => (
  <StyledItem>
    <a target="_blank" href={href} rel="noreferrer" onClick={onClick}>
      {children}
    </a>
  </StyledItem>
);

export default SquareLink;
