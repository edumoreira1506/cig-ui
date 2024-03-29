import styled from 'styled-components';

import { Colors, DEFAULT_BOX_SHADOW } from '../../constants/styles';

import { SidebarProps } from './Sidebar';

export const StyledContainer = styled.ul`
  position: fixed;
  bottom: 0;
  max-width: 170px;
  background-color: ${Colors.DarkBlue};
  transform: translateX(-100%);
  transition: ease 0.4s;
  padding: 5px 15px;
  width: calc(55% - 30px);
  height: calc(100% - 10px);
  margin: 0;

  a {
    color: inhertit;
    text-decoration: none;
  }

  ${({ isOpen }: { isOpen: SidebarProps['isOpen'] }) => isOpen && `
    transform: none;
    box-shadow: ${DEFAULT_BOX_SHADOW};
  `}
`;

export const StyledItem = styled.li`
  margin-bottom: 2px;
  list-style: none;

  &:first-child {
    margin-top: 8px;
  }
`;
