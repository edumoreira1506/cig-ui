import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: ${MAIN_FONT};
  position: relative;
`;

export const StyledInput = styled.input`
  background-color: ${Colors.LightGrey};
  border: none;
  width: 100%;
  padding: 10px 0 10px 10px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.DarkGrey};

  &:focus {
    outline: none;
  }
`;

export const StyledInputLoading = styled.span`
  position: absolute;
  right: 0;
  transform: scale(0.3) translate(155%, -53%);
  top: 0;
`;
