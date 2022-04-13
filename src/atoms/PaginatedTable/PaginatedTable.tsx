import { ReactNode, useCallback, VFC } from 'react';

import {
  StyledPaginate,
  StyledTable,
  StyledTableHeader,
  StyledTableItem,
  StyledTableLine,
  StyledIcon,
  StyledIcons
} from './PaginatedTable.styles';

export type PaginatedTableProps = {
  currentPage: number;
  onPaginate: (newPage: number) => void;
  columns?: string[] | ReactNode[];
  rows?: {
    items: string[];
    identifier?: string;
  }[];
  totalPages: number;
  customActions?: {
    onClick: (identifier: string) => void;
    icon: ReactNode;
  }[]
}

export const PaginatedTable: VFC<PaginatedTableProps> = ({
  currentPage,
  onPaginate,
  columns = [],
  rows  = [],
  totalPages,
  customActions = []
}: PaginatedTableProps) => {
  const handlePageChange = useCallback(({ selected }: { selected: number }) => onPaginate(selected), [onPaginate]);

  const handleClickCustomAction = useCallback((customActionIndex: number, identifier: string) => {
    const row = rows.find(r => r?.identifier === identifier);
    const customAction = customActions?.find((_: ReactNode, index: number) => index === customActionIndex);

    if (row?.identifier && customAction) {
      customAction.onClick(row.identifier);
    }
  }, [rows, customActions]);

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

            {customActions && (
              <StyledTableHeader>
                Ações
              </StyledTableHeader>
            )}
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

              {Boolean(customActions.length) && (
                <StyledTableItem>
                  <StyledIcons>
                    {customActions.map((customAction, customActionIndex) => (
                      <StyledIcon
                        onClick={() => handleClickCustomAction(customActionIndex, row?.identifier ?? '')}
                        key={customAction.icon?.toString()}
                      >
                        {customAction.icon}
                      </StyledIcon>
                    ))}
                  </StyledIcons>
                </StyledTableItem>
              )}
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
