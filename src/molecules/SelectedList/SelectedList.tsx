import React, { VFC } from 'react';

import { StyledContainer, StyledItem } from './SelectedList.styles';

export type SelectedListProps = {
  selecteds?: string[];
  items?: {
    value: string;
    label: string;
  }[];
  onToggle: (value: string) => void;
}

export const SelectedList: VFC<SelectedListProps> = ({
  selecteds = [],
  items = [],
  onToggle
}: SelectedListProps) => (
  <StyledContainer>
    {items.map(item => (
      <StyledItem onClick={() => onToggle(item.value)} key={item.value} selected={selecteds.includes(item.value)}>
        {item.label}
      </StyledItem>
    ))}
  </StyledContainer>
);
