import { FC } from 'react';

import { StyledItem } from './SquareLink.styles';

export interface SquareLinkProps {
  href: string;
}

const SquareLink: FC<SquareLinkProps> = ({ href, children }) => (
  <StyledItem>
    <a target="_blank" href={href} rel="noreferrer">
      {children}
    </a>
  </StyledItem>
);

export default SquareLink;
