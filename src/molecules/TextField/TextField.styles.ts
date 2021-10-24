import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: ${MAIN_FONT};
`;

export const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  background-color: ${Colors.LightGrey};
  border: none;
  width: 100%;
  padding: 10px 0 10px 10px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.DarkGrey};
  resize: none;

  &:focus {
    outline: none;
  }
`;
