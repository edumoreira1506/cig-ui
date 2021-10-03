import styled from 'styled-components';
import { createMinWidthMediaQuery } from '../../utils';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledHeaderContainer = styled.div`
  & > header {
    z-index: 11;
  }
`;

export const StyledSidebarContainer = styled.div`
  position: fixed;
  left: 20px;
  bottom: 0;
  z-index: 10;

  & > ul {
    height: calc(100% - 60px);
  }
`;

export const StyledContent = styled.div`
  padding-top: 50px;
  transition: width 0.4s ease;
  width: 100%;

  ${({ menuIsOpen }: { menuIsOpen: boolean }) => `
    ${menuIsOpen && `${createMinWidthMediaQuery(`
      width: calc(100% - 200px);
    `)}`}
  `}
`;
