import styled from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants/styles';

export const StyledLabel = styled.label`
  color: ${Colors.DarkGrey};
  font-size: 1em;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: ${MAIN_FONT};
  position: relative;

  ${({ required }: { required: boolean }) => `
    ${required && `
      padding-left: 10px;

      &::before {
        content: '*';
        position: absolute;
        left: 0;
        top: 0;
      }
    `}
  `}
`;
