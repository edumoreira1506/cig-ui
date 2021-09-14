import styled from 'styled-components';

import { MAIN_FONT, Colors, DEFAULT_BORDER_RADIUS } from '../../constants/styles';

export const StyledButton = styled.button`
  font-family: ${MAIN_FONT};
  width: 100%;
  height: 30px;
  background-color: ${Colors.DarkBlue};
  border: none;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
