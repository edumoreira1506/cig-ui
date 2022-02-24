import styled, { createGlobalStyle } from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';

export const ConfigGlobalStyle = createGlobalStyle`
  .ReactModal__Content {
    width: 100%;
    left: 0 !important;
    padding: 0 !important;
    height: 100%;
    top: 0 !important;

    @media (min-width: 768px) {
      width: 50%;
      transform: translate(50%, 12%);
      height: 80%;
    }
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  font-family: ${MAIN_FONT};
`;

export const StyledBackButton = styled.button`
  background: none;
  border: none;
  color: ${Colors.DarkBlue};
  font-size: 3em;
  margin: 0;
  padding: 20px 0 0 20px;
  cursor: pointer;
`;

export const StyledTitle = styled.p`
  margin: 35px 0 16px;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0 0 0 20px;
`;

export const StyledBody = styled.div`
  padding: 20px 0;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;
