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
  display: flex;
  align-items: center;
  transition: background-color ease 0.5s;

  &:hover {
    background-color: ${Colors.DarkBlueHover};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  ${({ isLoading, alignment }: { isLoading: ButtonProps['isLoading']; alignment: ButtonProps['alignment'] }) => `
    justify-content: ${alignment};

    ${isLoading && `
      .loading {
        transform: scale(0.3);
        position: absolute;
        top: -50px;
        left: 4%;
      }
    `}
  `}
`;
