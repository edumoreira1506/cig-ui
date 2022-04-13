import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PaginatedTable } from './PaginatedTable';

export default {
  title: 'Atoms/PaginatedTable',
  component: PaginatedTable,
} as ComponentMeta<typeof PaginatedTable>;

const Template: ComponentStory<typeof PaginatedTable> = (args) => (
  <div style={{ width: '300px' }}>
    <PaginatedTable {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  currentPage: 5,
  onPaginate: action('onPaginate'),
  columns: ['Primeira', 'Segunda', 'Terceira', 'Quarta'],
  rows: [
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ]},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ]},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ]},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ]},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ]},
  ],
  totalPages: 10
};
