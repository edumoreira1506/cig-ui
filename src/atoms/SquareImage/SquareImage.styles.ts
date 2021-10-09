import styled from 'styled-components';

import { DEFAULT_BORDER_RADIUS } from '../../constants';

export const StyledContainer = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  overflow: hidden;

  ${({ onClick }: { onClick?: () => void }) => onClick && `
    cursor: pointer;
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
