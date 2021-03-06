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
  box-sizing: border-box;
  background-color: ${Colors.White};
`;

export const StyledItem = styled.li`
  width: calc(100% - 15px);
  padding: 10px 0 10px 15px;
  font-size: 1em;
  border-bottom: solid 1px ${Colors.LightGrey};
  cursor: pointer;
  transition: ${DEFAULT_TRANSITION};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${Colors.LightGrey};
    color: ${Colors.Black};
  }

  &:last-child {
    border: none;
  }
`;

export const StyledItemImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 8px;
  border: solid 1px ${Colors.DarkBlue};
`;
