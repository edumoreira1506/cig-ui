import { StyledTable, StyledTableHeader, StyledTableItem, StyledTableLine } from './Table.styles';

interface TableProps {
  columns?: string[];
  rows?: string[][];
}

export default function Table({
  columns = [],
  rows = [],
}: TableProps) {
  return (
    <StyledTable>
      <StyledTableLine>
        {columns.map((column) => (
          <StyledTableHeader key={column}>
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
