import { ReactNode, useState } from 'react';
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
}

export default function Table({
  columns = [],
  rows = [],
  hasExpandColumn = false
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
      {rows.map((row, index) => (
        <>
          <StyledTableLine key={index}>
            {row.items.map((item) => (
              <StyledTableItem key={item}>
                {item}
              </StyledTableItem>
            ))}
            {hasExpandColumn && row.expandedContent && (
              <SetyldExpandItem expanded={expandedRows.includes(index)} onClick={() => handleToggleRow(index)}>
                <BiUpArrow />
              </SetyldExpandItem>
            )}
          </StyledTableLine>
          {hasExpandColumn && row.expandedContent && expandedRows.includes(index) && (
            <StyledExpandedArea>
              <td colSpan={columns.length}>
                {row.expandedContent}
              </td>
            </StyledExpandedArea>
          )}
        </>
      ))}
    </StyledTable>
  );
}
