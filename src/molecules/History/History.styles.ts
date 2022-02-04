import styled, { css } from 'styled-components';

import { MAIN_FONT } from '../../constants';

export const StyledContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${MAIN_FONT};
`;

export const StyledItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 5px;
  align-items: flex-start;
`;

export const StyledItemDate = styled.div`
  width: 15%;
  text-align: center;
  font-weight: 500;
`;

export const StyledItemIcon = styled.div`
  width: 85px;
  height: 85px;
  margin: 0 10px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
  margin-bottom: 75px;
  position: relative;

  ${({ color }) => css`
    background-color: ${color};

    &::before {
      position: absolute;
      content: "";
      background-color: ${color};
      width: 3px;
      height: 70px;
      bottom: 0;
      transform: translateY(75px);
    }
  `}
`;

export const StyledItemTexts = styled.div`
  width: calc(85% - 95px);
`;

export const StyledItemTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.5em;

  ${({ color }) => css`
    color: ${color};
  `}
`;
