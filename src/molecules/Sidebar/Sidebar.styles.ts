import styled from 'styled-components';

import { Colors } from '../../constants/styles';

import { SidebarProps } from './Sidebar';

export const StyledContainer = styled.ul`
  position: fixed;
  bottom: 0;
  max-width: 170px;
  background-color: ${Colors.DarkBlue};
  transform: translateX(-110%);
  transition: ease 0.4s;
  padding: 5px 15px;
  width: calc(55% - 30px);
  height: calc(100% - 10px);
  margin: 0;

  ${({ isOpen }: { isOpen: SidebarProps['isOpen'] }) => isOpen && `
    transform: translateX(-10%);
    box-shadow: 3px 0px 15px -2px rgba(0,0,0,0.72);
  `}
`;

export const StyledItem = styled.li`
  margin-bottom: 2px;

  &:first-child {
    margin-top: 8px;
  }
`;
