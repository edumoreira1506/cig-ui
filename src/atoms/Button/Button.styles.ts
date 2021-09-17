import styled from 'styled-components';

import { MAIN_FONT, Colors, DEFAULT_BORDER_RADIUS } from '../../constants/styles';

import { ButtonProps } from './Button';

export const StyledButton = styled.button`
  font-family: ${MAIN_FONT};
  width: 100%;
  height: 30px;
  background-color: ${Colors.DarkBlue};
  border: none;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.White};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  &[disabled] {
    cursor: not-allowed;
  }

  ${({ isLoading }: { isLoading: ButtonProps['isLoading'] }) => isLoading && `
    .loading {
      transform: scale(0.3);
      position: absolute;
      top: -50px;
      left: 4%;
    }
  `}
`;
