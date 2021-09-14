import styled from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';
import { createMinWidthMediaQuery } from '../../utils/styles';

export const StyledTitle = styled.h2`
  font-family: ${MAIN_FONT};
  color: ${Colors.DarkGrey};
  font-size: 2em;
  margin: 0;
  text-align: left;
  padding: 0 0 10px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30%;
    height: 2px;
    background-color: ${Colors.DarkGrey};
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    ${createMinWidthMediaQuery(`
      left: 50%;
      transform: translate(-50%, 50%);
    `)}
  }

  ${createMinWidthMediaQuery(`
    text-align: center;
    font-size: 3em;
    padding: 0 0 15px 0;
  `)}
`;
