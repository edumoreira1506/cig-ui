import styled from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: ${MAIN_FONT};
`;

export const StyledLabel = styled.label`
  color: ${Colors.DarkGrey};
  font-size: 1.5em;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  background-color: ${Colors.LightGrey};
  border: none;
  width: 100%;
  padding: 10px 0 10px 10px;
  border-radius: 5px;
  color: ${Colors.DarkGrey};

  &:focus {
    outline: none;
  }
`;
