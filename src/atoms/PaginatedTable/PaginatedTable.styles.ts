import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants';

export const StyledPaginate = styled(ReactPaginate)`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 5px 0 0;
  padding: 0;
  font-family: ${MAIN_FONT};

  li {
    width: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background-color: ${Colors.MediumGrey};
    color: ${Colors.Black};
    border-radius: ${DEFAULT_BORDER_RADIUS};
    cursor: pointer;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.selected {
      background-color: ${Colors.Black};
      color: ${Colors.MediumGrey};
    }
  }
`;

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

export const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
  background-color: ${Colors.MediumGrey};
  color: ${Colors.Black};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  padding: 5px;
  margin-right: 2px;

  &:last-child {
    margin: none;
  }
`;
