import styled from 'styled-components';

import { Colors } from '../../constants/styles';

export const StyledButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${Colors.LigherGrey};
  border: none;
  cursor: pointer;
  color: ${Colors.Black};
  font-weight: bold;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.5em;
    margin-right: 5px;
  }
`;
