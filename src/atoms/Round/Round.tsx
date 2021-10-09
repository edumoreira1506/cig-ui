import { VFC, ReactNode } from 'react';

import { StyledContainer } from './Round.styles';

export interface RoundProps {
  children: ReactNode;
  backgroundColor?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Round: VFC<RoundProps> = ({
  children,
  backgroundColor,
  onClick
}: RoundProps) => {
  return (
    <StyledContainer data-testid="round" onClick={onClick} backgroundColor={backgroundColor}>
      {children}
    </StyledContainer>
  );
};

export default Round;
