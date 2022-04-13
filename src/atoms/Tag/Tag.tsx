import { FC } from 'react';

import { StyledCloseButton, StyledContainer } from './Tag.styles';

type TagProps = {
  onRemove?: () => void;
}

export const Tag: FC<TagProps> = ({ onRemove, children }) => (
  <StyledContainer>
    {onRemove && (
      <StyledCloseButton onClick={onRemove}>
        X
      </StyledCloseButton>
    )}
    {children}
  </StyledContainer>
);
