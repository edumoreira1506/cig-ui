import styled from 'styled-components';

import { DEFAULT_BORDER_RADIUS, Colors, MAIN_FONT } from '../../constants';

export const StyledContainer = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  position: relative;
  background-color: transparent;
  border-color: ${Colors.LightGrey};
  border-width: 2px;
  border-style: dashed;
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0;
  cursor: pointer;
  top: 0;
`;

export const StyledText = styled.p`
  font-family: ${MAIN_FONT};
  color: ${Colors.DarkGrey};
  margin: 0;
  font-size: 1em;
`;

export const StyledIcon = styled.div`
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  color: ${Colors.DarkGrey};
`;
