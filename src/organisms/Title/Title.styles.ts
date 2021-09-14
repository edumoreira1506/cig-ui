import styled from 'styled-components';

import { DeviceSizes } from '../../constants/device';
import { Colors, MAIN_FONT } from '../../constants/styles';

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

    @media (min-width: ${DeviceSizes.MOBILE_WIDTH}) {
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }

  @media (min-width: ${DeviceSizes.MOBILE_WIDTH}) {
    text-align: center;
    font-size: 3em;
    padding: 0 0 15px 0;
  }
}
`;
