import styled, { keyframes } from 'styled-components';

import { createMinWidthMediaQuery } from '../../utils';
import { Colors } from '../../constants/styles';

const timeline = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
`;

export const StyledContainer = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    position: absolute;
    animation: ${timeline} 8s ease;
    top: 0;
    content: '';
    background-color: ${Colors.DarkBlue};
    left: 30px;
    width: 4px;
    height: 100%;

    ${createMinWidthMediaQuery(`
      left: 50%;
      transform: translateX(-50%);
    `)}
  }
`;

export const StyledItem = styled.li`
  margin-bottom: 40px;
  width: 100%;
  z-index: 2;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: ${Colors.DarkBlue};
    border: solid 4px ${Colors.DarkBlue};
    width: 8px;
    height: 8px;
    border-radius: 100%;
    left: 24px;
    bottom: -28px;

    ${createMinWidthMediaQuery(`
      left: calc(100% + 22px);
    `)}
  }

  ${createMinWidthMediaQuery(`
    width: 400px;
    transform: translateX(calc(-50% - 30px));
  `)}

  ${({ right }: { right: boolean }) => right && createMinWidthMediaQuery(`
    transform: translateX(calc(50% + 30px));

    &::after {
      left: -38px;
    }
  `)}
`;
