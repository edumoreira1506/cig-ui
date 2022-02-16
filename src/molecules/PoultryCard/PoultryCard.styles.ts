import styled from 'styled-components';

import { DEFAULT_BORDER_RADIUS, Colors, MAIN_FONT } from '../../constants';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);
  background-color: ${Colors.LightGrey};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  font-family: ${MAIN_FONT};
`;

export const StyledImageContainer = styled.figure`
  padding: 0;
  margin: 0;
  width: 35%;
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledTextContainer = styled.div`
  width: 60%;
`;

export const StyledName = styled.p`
  margin: 0 0 10px 0;
  font-weight: 500;
`;

export const StyledPrice = styled.p`
  margin: 0;
  font-weight: 700;
`;

export const StyledSubtitle = styled.p`
  margin: 0;
  color: ${({ color }) => color || Colors.Black};
`;

export const StyledDescription = styled.p`
  margin: 10px 0 0;
  font-size: 0.7em;
`;
