import styled from 'styled-components';

import { MAIN_FONT, Colors, DEFAULT_BORDER_RADIUS } from '../../constants/styles';

import { ButtonProps } from './Button';

type StyledButtonProps = {
  hoverColor?: string;
  isLoading?: ButtonProps['isLoading'];
  alignment?: ButtonProps['alignment'];
  color?: string;
}

export const StyledButton = styled.button`
  font-family: ${MAIN_FONT};
  width: 100%;
  height: 30px;
  background-color: ${({ color }: StyledButtonProps) => color || Colors.DarkBlue};
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

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${({ hoverColor }: StyledButtonProps) => hoverColor || Colors.DarkBlueHover};
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: ${Colors.LightGrey};
  }

  ${({ isLoading, alignment }: StyledButtonProps) => `
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
