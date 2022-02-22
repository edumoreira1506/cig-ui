import styled from 'styled-components';

import {
  Colors,
  MAIN_FONT,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_BOX_SHADOW,
  DEFAULT_TRANSITION,
} from '../../constants/styles';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${Colors.DarkBlue};
  box-shadow: ${DEFAULT_BOX_SHADOW};
`;

export const StyledContainer = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const StyledImageContainer = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
`;

export const StyledTitle = styled.p`
  color: ${Colors.White};
  font-weight: bold;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  font-family: ${MAIN_FONT};
`;

export const StyledShortcutContainer = styled.ul`
  margin: 0;
  list-style: none;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  background-color: ${Colors.DarkBlue};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.White};
  padding: 5px 10px;
  width: 100px;
  text-align: right;
  box-shadow: ${DEFAULT_BOX_SHADOW};
`;

export const StyledShortcut = styled.li`
  font-weight: bold;
  font-family: ${MAIN_FONT};
`;

export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchIcon = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  justify-content: center;
  color: ${({ isOpen }: { isOpen: boolean }) => isOpen ? Colors.VeryLightGrey : Colors.White};
  position: relative;
  cursor: pointer;

  svg {
    z-index: 2;
  }
`;

export const StyledSearchArea = styled.form`
  transition: width ${DEFAULT_TRANSITION};
  width: ${({ isOpen }: { isOpen: boolean }) => isOpen ? '230px' : 0};
  overflow: hidden;
  position: absolute;
  left: 10px;
  background-color: white;
  border: none;
`;

export const StyledSearchInput = styled.input`
  background: none;
  border: none;
  width: calc(100% - 36px);
  color: ${Colors.VeryLightGrey};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.VeryLightGrey};
  }
`;
