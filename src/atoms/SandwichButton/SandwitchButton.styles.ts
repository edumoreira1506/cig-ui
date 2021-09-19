import styled from 'styled-components';

import { createMinWidthMediaQuery } from '../../utils';

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${createMinWidthMediaQuery(`
    width: 45px;
    height: 45px;
  `)}
`;

export const StyledButtonBar = styled.span`
  width: 100%;
  height: 3px;
  display: block;
  border-radius: 15%;
  position: relative;
  transition: all 0.2s ease;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    top: 0;
    left: 0;
    border-radius: 15%;
    transition: all 0.2s ease;
  }

  &::before {
    transform: translateY(7px);

    ${createMinWidthMediaQuery(`
      transform: translateY(10px);
    `)}
  }

  &::after {
    transform: translateY(-7px);

    ${createMinWidthMediaQuery(`
      transform: translateY(-10px);
    `)}
  }

  ${({ toggled, color }: { toggled: boolean;  color: string; }) => `
    background-color: ${color};

    &::before, &::after {
      background-color: ${color};
    }

    ${toggled && `
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    `}
  `}
`;
