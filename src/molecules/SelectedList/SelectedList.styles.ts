import styled from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.ul`
  font-family: ${MAIN_FONT};
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const StyledItem = styled.li`
  cursor: pointer;
  list-style: none;
  width: calc(100% - 15px);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
  border-bottom: solid 1px ${Colors.DarkGrey};
  margin: 0;
  position: relative;
  color: ${({ selected }: { selected: boolean }) => selected ? Colors.White : Colors.Black};
  background-color: ${({ selected }: { selected: boolean }) => selected ? Colors.DarkGrey : Colors.White};

  &:first-child {
    border-top: solid 1px ${Colors.DarkGrey};
  }
`;
