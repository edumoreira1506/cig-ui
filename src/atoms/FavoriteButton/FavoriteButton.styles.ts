import styled, { css } from 'styled-components';

import { Colors } from '../../constants/styles';

export const StyledContainer = styled.div`
  color: ${Colors.LightGrey};
  width: 25px;
  height: 25px;
  cursor: pointer;

  ${({ favorited }: { favorited: boolean }) => favorited && css`
    color: ${Colors.DarkGrey};
  `}

  svg {
    width: 75%;
  }
`;
