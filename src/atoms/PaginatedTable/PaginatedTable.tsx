import { ReactNode, useCallback, VFC } from 'react';

import {
  StyledPaginate,
  StyledTable,
  StyledTableHeader,
  StyledTableItem,
  StyledTableLine
} from './PaginatedTable.styles';

export type PaginatedTableProps = {
  currentPage: number;
  onPaginate: (newPage: number) => void;
  columns?: string[] | ReactNode[];
  rows?: {
    items: string[];
    expandedContent?: string;
  }[];
  totalPages: number;
}

export const PaginatedTable: VFC<PaginatedTableProps> = ({
  currentPage,
  onPaginate,
  columns = [],
  rows  = [],
  totalPages
}: PaginatedTableProps) => {
  const handlePageChange = useCallback(({ selected }: { selected: number }) => onPaginate(selected), [onPaginate]);

  return (
    <>
      <StyledTable>
        <thead>
          <StyledTableLine>
            {columns.map((column, index) => (
              <StyledTableHeader key={`header-${index}`}>
                {column}
              </StyledTableHeader>
            ))}
          </StyledTableLine>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <StyledTableLine key={index}>
              {row.items.map((item) => (
                <StyledTableItem key={item}>
                  {item}
                </StyledTableItem>
              ))}
            </StyledTableLine>
          ))}
        </tbody>
      </StyledTable>
    
      <StyledPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        initialPage={currentPage}
        previousLabel="<"
      />
    </>
  );
};
