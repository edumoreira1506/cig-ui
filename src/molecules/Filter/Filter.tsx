import React, { VFC } from 'react';

import { Expand, ExpandProps } from '../../atoms/Expand/Expand';
import { SelectedList, SelectedListProps } from '../SelectedList/SelectedList';

import { StyledContainer, StyledContent } from './Filter.styles';

export type FilterProps = {
  title: ExpandProps['title'];
  selecteds: SelectedListProps['selecteds'];
  onToggle: SelectedListProps['onToggle'];
  items: SelectedListProps['items'];
}

export const Filter: VFC<FilterProps> = ({
  title,
  selecteds,
  onToggle,
  items
}: FilterProps) => (
  <StyledContainer>
    <Expand title={title}>
      <StyledContent>
        <SelectedList items={items} selecteds={selecteds} onToggle={onToggle} />
      </StyledContent>
    </Expand>
  </StyledContainer>
);
