import styled from 'styled-components';
import { createMinWidthMediaQuery } from 'utils';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledHeaderContainer = styled.div`
  & > header {
    z-index: 2;
  }
`;

export const StyledSidebarContainer = styled.div`
  position: fixed;
  left: 20px;
  bottom: 0;

  & > ul {
    height: calc(100% - 60px);
  }
`;

export const StyledContent = styled.div`
  padding-top: 50px;
  transition: width 1s ease;

  ${({ menuIsOpen }: { menuIsOpen: boolean }) => `
    ${menuIsOpen && `${createMinWidthMediaQuery(`
      width: calc(100% - 200px);
    `)}`}
  `}
`;
