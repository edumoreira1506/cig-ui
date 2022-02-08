import { ReactNode, useState, Fragment } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiUpArrow } from 'react-icons/bi';

import {
  StyledTable,
  StyledTableHeader,
  StyledTableItem,
  StyledTableLine,
  SetyldExpandItem,
  StyledExpandedArea
} from './Table.styles';

interface TableProps {
  columns?: string[] | ReactNode[];
  rows?: {
    items: string[];
    expandedContent?: string;
  }[];
  hasExpandColumn?: boolean;
  emptyStateText?: string;
}

export default function Table({
  columns = [],
  rows = [],
  hasExpandColumn = false,
  emptyStateText
}: TableProps) {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleToggleRow = (index: number) => {
    setExpandedRows(prevExpandedRows =>
      prevExpandedRows.includes(index)
        ? prevExpandedRows.filter(i => i !== index)
        : [...prevExpandedRows, index]);
  };

  return (
    <StyledTable>
      <thead>
        <StyledTableLine>
          {columns.map((column, index) => (
            <StyledTableHeader key={`header-${index}`}>
              {column}
            </StyledTableHeader>
          ))}
          {hasExpandColumn && (
            <StyledTableHeader>
              <AiOutlineInfoCircle />
            </StyledTableHeader>
          )}
        </StyledTableLine>
      </thead>
      <tbody>
        {Boolean(!rows.length && emptyStateText) && (
          <StyledExpandedArea>
            <td colSpan={columns.length + 1}>
              {emptyStateText}
            </td>
          </StyledExpandedArea>
        )}
        
        {rows.map((row, index) => (
          <Fragment key={`row-${index}`}>
            <StyledTableLine key={index}>
              {row.items.map((item) => (
                <StyledTableItem key={item}>
                  {item}
                </StyledTableItem>
              ))}
              {hasExpandColumn && row.expandedContent && (
                <SetyldExpandItem expanded={expandedRows.includes(index)} onClick={() => handleToggleRow(index)}>
                  <BiUpArrow data-testid="expand-row" />
                </SetyldExpandItem>
              )}
            </StyledTableLine>
            {hasExpandColumn && row.expandedContent && expandedRows.includes(index) && (
              <StyledExpandedArea>
                <td colSpan={columns.length + 1}>
                  {row.expandedContent}
                </td>
              </StyledExpandedArea>
            )}
          </Fragment>
        ))}
      </tbody>
    </StyledTable>
  );
}
