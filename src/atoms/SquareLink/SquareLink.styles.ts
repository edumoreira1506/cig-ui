import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS } from '../../constants';

export const StyledItem = styled.li`
  width: 35px;
  height: 35px;
  background-color: ${Colors.DarkBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  color: ${Colors.White};
  cursor: pointer;
  margin-bottom: 5px;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
  }
`;
