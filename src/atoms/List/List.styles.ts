import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, DEFAULT_TRANSITION } from '../../constants/styles';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px ${Colors.LightGrey};
  border-radius: ${DEFAULT_BORDER_RADIUS};
`;

export const StyledItem = styled.li`
  width: calc(100% - 15px);
  padding: 10px 0 10px 15px;
  font-size: 1em;
  border-bottom: solid 1px ${Colors.LightGrey};
  cursor: pointer;
  transition: ${DEFAULT_TRANSITION};

  &:hover {
    background-color: ${Colors.LightGrey};
    color: ${Colors.Black};
  }

  &:last-child {
    border: none;
  }
`;
