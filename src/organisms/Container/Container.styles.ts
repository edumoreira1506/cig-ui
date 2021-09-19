import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  & > header {
    z-index: 2;
  }
`;

export const StyledSidebarContainer = styled.div`
  & > ul {
    height: calc(100% - 60px);
  }
`;

export const StyledContent = styled.div`
  padding-top: 50px;
`;
