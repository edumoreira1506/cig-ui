import styled from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';

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
`;

export const StyledTitle = styled.p`
  color: ${Colors.White};
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  font-family: ${MAIN_FONT};
`;
