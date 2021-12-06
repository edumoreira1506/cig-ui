import { StyledItem, StyledList } from './List.styles';

interface ListProps {
  items: string[];
  onItemClick: (item: string) => void;
}

export default function List({ items, onItemClick }: ListProps) {
  return (
    <StyledList>
      {items.map(item => (
        <StyledItem key={item} onClick={() => onItemClick(item)}>
          {item}
        </StyledItem>
      ))}
    </StyledList>
  );
}
