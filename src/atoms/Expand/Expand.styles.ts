import styled from 'styled-components';

import { Colors, DEFAULT_TRANSITION, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  width: 100%;
  font-family: ${MAIN_FONT};
`;

export const StyledHeader = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  color: ${Colors.DarkGrey};
  height: 40px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
`;

export const StyledTitle = styled.p`
  margin: 0 0 0 10px;
`;

export const StyledIcon = styled.span`
  margin: 0 10px 0 0;
  transition: all ${DEFAULT_TRANSITION};

  svg {
    stroke-width: 60px;
    transform: rotate(${({ isOpen }: { isOpen: boolean }) => isOpen ? '180deg' : 0});
  }
`;

export const StyledContent = styled.div`
  transition: all ${DEFAULT_TRANSITION};
  overflow: hidden;
  max-height: ${({ isOpen }: { isOpen: boolean }) => isOpen ? '100vh' : 0};
`;
