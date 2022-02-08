import { StyledItem, StyledList } from './List.styles';

type ListItem = {
  content: string;
  image?: string;
  key: string;
}

export interface ListProps {
  items: ListItem[];
  onItemClick: (item: string) => void;
}

export default function List({ items, onItemClick }: ListProps) {
  return (
    <StyledList>
      {items.map(item => (
        <StyledItem key={item.key} onClick={() => onItemClick(item.key)}>
          {item.content}
        </StyledItem>
      ))}
    </StyledList>
  );
}
