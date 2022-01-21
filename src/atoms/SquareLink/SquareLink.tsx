import { FC, ReactNode } from 'react';

import { StyledItem } from './SquareLink.styles';

export interface SquareLinkProps {
  href: string;
  children: ReactNode;
}

const SquareLink: FC<SquareLinkProps> = ({ href, children }) => (
  <StyledItem>
    <a target="_blank" href={href} rel="noreferrer">
      {children}
    </a>
  </StyledItem>
);

export default SquareLink;
