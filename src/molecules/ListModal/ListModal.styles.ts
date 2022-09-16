import styled, { createGlobalStyle } from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';

export const GlobalStyles = createGlobalStyle`
  .list-modal {
    background-color: ${Colors.White};
    transform: translateY(60vh);
    height: 40vh;
  }
`;

export const StyledContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  font-family: ${MAIN_FONT};

  & > *:not(li) {
    border-top: 1px solid rgb(215, 215, 215);
    display: block;

    &:first-child {
      border: none;
    }
  }
`;

export const StyledListItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px ${Colors.LightGrey};
  color: ${Colors.DarkGrey};
  cursor: pointer;

  &:first-child {
    border: none;
  }
`;
