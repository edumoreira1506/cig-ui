import styled from 'styled-components';

import { DEFAULT_BORDER_RADIUS, Colors, MAIN_FONT } from '../../constants';

export const StyledContainer = styled.div`
  width: 100%;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  border: solid 1px ${Colors.DarkBlue};
  padding: 10px;
  box-sizing: border-box;
  font-family: ${MAIN_FONT};
  background-color: ${Colors.DarkBlue};
`;

export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 12px;
  color: ${Colors.LightGrey};
  font-weight: bold;

  svg {
    margin-right: 5px;
  }
`;

export const StyledBody = styled.div`
  font-weight: 300;
  margin-bottom: 20px;
  color: ${Colors.White};
`;

export const StyledCTA = styled.button`
  border: none;
  text-align: left;
  background: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  color: ${Colors.White};
  padding: 0;
`;
