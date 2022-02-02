import styled, { css } from 'styled-components';

import { createMinWidthMediaQuery } from '../../utils';
import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

export const StyledDescription = styled.div``;

export const StyledContainer = styled.div`
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.White};
  padding: 10px;
  border: solid 1px ${Colors.LightGrey};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  font-family: ${MAIN_FONT};
`;

export const StyledHeader = styled.div`
  font-weight: 400;
  font-style: italic;
  color: ${Colors.LightGrey};
  margin-bottom: 15px;
  width: 100%;
  text-align: center;

  ${createMinWidthMediaQuery(`
    text-align: left;
  `)}
`;

export const StyledBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  ${createMinWidthMediaQuery(`
    justify-content: space-between;
  `)}
`;

export const StyledImage = styled.figure`
  width: 30%;
  margin: 0;
  height: auto;

  ${createMinWidthMediaQuery(`
    width: 150px;
  `)}

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledTextsContent = styled.div`
  width: calc(70% - 10px);
  padding-left: 10px;

  ${createMinWidthMediaQuery(`
    width: calc(90% - 160px);
  `)}
`;

export const StyledStatus = styled.p`
  ${({ color }) => css`
    color: ${color};
  `}
  margin: 0 0 5px 0;
`;

export const StyledInfo = styled.p`
  margin: 0 0 5px 0;
  font-size: 0.9em;
  font-weight: normal;
`;

export const StyledButtons = styled.div`
  margin-top: 8px;
  width: 100%;

  ${createMinWidthMediaQuery(`
    width: calc(20% - 170px);
  `)}
`;
