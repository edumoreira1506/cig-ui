import React from 'react';

import Card, { CardProps } from '../../atoms/Card/Card';

import { StyledContainer, StyledItem } from './Timeline.styles';

export interface TimelineProps {
  items: {
    key: string;
    description: CardProps['description'];
    date: CardProps['date'];
    icon: CardProps['icon']
  }[];
  onExpandItem: (itemKey: string) => void;
}

export default function Timeline({ items, onExpandItem }: TimelineProps) {
  return (
    <StyledContainer>
      {items.map((item, index) => (
        <StyledItem key={item.key} right={Boolean(index % 2)}>
          <Card
            onClick={() => onExpandItem(item.key)}
            {...item}
            ctaText="Mais informações"
          />
        </StyledItem>
      ))}
    </StyledContainer>
  );
}
