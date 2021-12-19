import { ReactNode } from 'react';

import { StyledTable, StyledTableHeader, StyledTableItem, StyledTableLine } from './Table.styles';

interface TableProps {
  columns?: string[] | ReactNode[];
  rows?: string[][];
}

export default function Table({
  columns = [],
  rows = [],
}: TableProps) {
  return (
    <StyledTable>
      <StyledTableLine>
        {columns.map((column, index) => (
          <StyledTableHeader key={`header-${index}`}>
            {column}
          </StyledTableHeader>
        ))}
      </StyledTableLine>
      {rows.map((row, index) => (
        <StyledTableLine key={index}>
          {row.map((item) => (
            <StyledTableItem key={item}>
              {item}
            </StyledTableItem>
          ))}
        </StyledTableLine>
      ))}
    </StyledTable>
  );
}
