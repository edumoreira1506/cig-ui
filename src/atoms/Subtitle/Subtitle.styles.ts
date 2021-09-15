import styled from 'styled-components';

import { createMinWidthMediaQuery } from '../../utils';
import { Colors, MAIN_FONT } from '../../constants/styles';

export const StyledSubtitle = styled.p`
  font-family: ${MAIN_FONT};
  color: ${Colors.DarkGrey};
  font-size: 1em;
  margin: 0;
  text-align: left;
  padding: 0 0 10px 0;
  position: relative;

  ${createMinWidthMediaQuery(`
    text-align: center;
    font-size: 2em;
    padding: 0 0 15px 0;
  `)}
`;
