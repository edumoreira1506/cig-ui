import { FC, ReactNode } from 'react';

import { StyledItem } from './SquareLink.styles';

export interface SquareLinkProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  identifier?: string;
  target?: string;
}

const SquareLink: FC<SquareLinkProps> = ({ href, children, onClick, target = '_blank' }) => (
  <StyledItem>
    <a target={target} href={href} rel="noreferrer" onClick={onClick}>
      {children}
    </a>
  </StyledItem>
);

export default SquareLink;
