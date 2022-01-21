import styled from 'styled-components';
import { createMinWidthMediaQuery } from '../../utils';
import logo from '../../images/logo.svg';


export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 220% 100%;
    width: 100%;
    height: 100%; 
    content: "";
    opacity: 0.15;
    position: fixed;
  }
`;

export const StyledHeaderContainer = styled.div`
  & > header {
    z-index: 11;
  }
`;

export const StyledSidebarContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  left: 0;

  & > ul {
    height: calc(100% - 60px);
  }
`;

export const StyledContent = styled.div`
  padding-top: 50px;
  transition: width 0.4s ease;
  width: 100%;
  min-height: calc(100vh - 82px);

  ${({ menuIsOpen }: { menuIsOpen: boolean }) => `
    ${menuIsOpen && `${createMinWidthMediaQuery(`
      width: calc(100% - 200px);
    `)}`}
  `}
`;
