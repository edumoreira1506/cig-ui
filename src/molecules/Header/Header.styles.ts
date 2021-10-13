import styled from 'styled-components';

import { Colors, MAIN_FONT, DEFAULT_BORDER_RADIUS } from '../../constants/styles';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${Colors.DarkBlue};
  box-shadow: 3px 0px 15px -2px rgba(0,0,0,0.72);
`;

export const StyledContainer = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const StyledImageContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
`;

export const StyledTitle = styled.p`
  color: ${Colors.White};
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  font-family: ${MAIN_FONT};
`;

export const StyledShortcutContainer = styled.ul`
  margin: 0;
  list-style: none;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  background-color: ${Colors.DarkBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.White};
  padding: 5px 10px;
  width: 100px;
  text-align: right;
  box-shadow: 3px 0px 15px -2px rgba(0,0,0,0.72);
`;

export const StyledShortcut = styled.li`
  font-weight: bold;
  font-family: ${MAIN_FONT};
`;
