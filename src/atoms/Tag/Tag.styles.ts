import styled from 'styled-components';

import { MAIN_FONT, Colors, DEFAULT_BORDER_RADIUS } from '../../constants/styles';

export const StyledContainer = styled.div`
  display: inline-block;
  width: auto;
  padding: 5px 25px 5px 5px;
  background-color: ${Colors.LigherGrey};
  color: ${Colors.DarkBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  border: solid 1px ${Colors.DarkBlue};
  font-family: ${MAIN_FONT};
  position: relative;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  right: 0;
  background: none;
  border: none;
`;
