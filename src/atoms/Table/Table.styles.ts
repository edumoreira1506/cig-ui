import styled, { css } from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, DEFAULT_TRANSITION, MAIN_FONT } from '../../constants';

export const StyledTable = styled.table`
  width: 100%;
  height: auto;
  background-color: ${Colors.LightGrey};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  font-family: ${MAIN_FONT};
  text-align: center;
`;

export const StyledTableLine = styled.tr`
  height: 40px;
`;

export const StyledTableHeader = styled.th`
  background-color: ${Colors.MediumGrey};

  &:first-child {
    border-top-left-radius: ${DEFAULT_BORDER_RADIUS};
  }

  &:last-child {
    border-top-right-radius: ${DEFAULT_BORDER_RADIUS};
  }
`;

export const StyledTableItem = styled.td`
  outline: solid 1px white;
  color: ${Colors.HalfGrey};
`;

export const SetyldExpandItem = styled.td`
  outline: solid 1px white;
  color: ${Colors.HalfGrey};
  cursor: pointer;
  background-color: ${Colors.MediumGrey};

  & > svg {
    transition: ${DEFAULT_TRANSITION};
    transform: rotate(180deg);

    ${({ expanded }: { expanded: boolean }) => expanded && css`
      transform: none;
    `}
  }
`;

export const StyledExpandedArea = styled.tr`
  text-align: center;
  height: 100px;
  background-color: ${Colors.MediumGrey};
`;
