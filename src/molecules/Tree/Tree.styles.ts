import { Colors, DEFAULT_BORDER_RADIUS } from '../../constants';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: auto;
`;

export const TreeItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const itemButtonStyle = css`
  position: absolute;
  top: -26px;
  cursor: pointer;
  background: ${Colors.DarkBlue};
  border: none;
  color: ${Colors.White};
  border-radius: ${DEFAULT_BORDER_RADIUS};
`;

export const TreeItemExpand = styled.button`
  ${itemButtonStyle}

  right: 50%;
  transform: translateX(50%);
`;

export const TreeItemAddDad = styled.button`
  ${itemButtonStyle}

  right: 0;
`;

export const TreeItemAddMom = styled.button`
  ${itemButtonStyle}

  left: 0;
`;
