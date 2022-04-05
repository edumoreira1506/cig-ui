import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  width: calc(100% - 12px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px ${Colors.DarkBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  padding: 6px;
  font-family: ${MAIN_FONT};
`;

export const StyledMainContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const StyledIcon = styled.div`
  width: 40%;

  svg {
    width: 100%;
    height: auto;
    color: ${({ color }) => color};
  }
`;

export const StyledCounter = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: 1.5em;
`;

export const StyledDescription = styled.p`
  margin: 0;
  font-size: 0.8em;
  font-style: italic;
`;
