import styled from 'styled-components';

import { MAIN_FONT, Colors } from '../../constants';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  font-family: ${MAIN_FONT};
`;

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledImage = styled.div`
  width: 40px;
  height: 40px;
`;

export const StyledTexts = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledText = styled.p`
  margin: 0;
  font-weight: 600;
  margin-left: 10px;
`;

export const StyledDate = styled.div`
  color: ${Colors.LightGrey};
  ont-size: 0.8em;
`;

export const StyledContent = styled.p``;

export const StyledAnswersList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  list-style: none;
`;

export const StyledAnswerItem = styled.li`
  list-style: none;
  width: 85%;
  margin-bottom: 15px;
  border-left: 1px solid ${Colors.LightGrey};
  padding-left: 15px;
`;
