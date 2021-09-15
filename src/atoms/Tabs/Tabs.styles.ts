import styled from 'styled-components';

import { Colors, DEFAULT_TRANSITION, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  width: 100%;
  font-family: ${MAIN_FONT};
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

export const StyledTabTitle = styled.div`
  cursor: pointer;
  height: 100%;
  border-bottom: solid 2px transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${DEFAULT_TRANSITION};

  &:hover {
    border-color: ${Colors.DarkGrey};
    opacity: 1;
  }

  ${({ width, opened, isDisabled }: { width: number; opened: boolean; isDisabled: boolean; }) => `
    width: calc(${width}% - 1%);

    ${isDisabled ? 'opacity: 0.5;' : ''}

    ${opened ? `
      border-color: ${Colors.DarkGrey};
    ` : ''}
  `}
`;

export const StyledBody = styled.div`
  margin-top: 12px;
  width: 100%;
`;
