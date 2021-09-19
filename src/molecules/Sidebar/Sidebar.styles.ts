import styled from 'styled-components';

import { Colors } from '../../constants/styles';

import { SidebarProps } from './Sidebar';

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  width: 55%;
  max-width: 170px;
  height: 100%;
  background-color: ${Colors.DarkBlue};
  transform: translateX(-110%);
  transition: ease 1s;

  ${({ isOpen }: { isOpen: SidebarProps['isOpen'] }) => isOpen && `
    transform: translateX(-10%);
    box-shadow: 3px 0px 15px -2px rgba(0,0,0,0.72);
  `}
`;
