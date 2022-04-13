import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AiFillAlert, AiFillEdit } from 'react-icons/ai';

import { PaginatedTable } from './PaginatedTable';

export default {
  title: 'Atoms/PaginatedTable',
  component: PaginatedTable,
} as ComponentMeta<typeof PaginatedTable>;

const Template: ComponentStory<typeof PaginatedTable> = (args) => (
  <div style={{ width: '600px' }}>
    <PaginatedTable {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  currentPage: 5,
  onPaginate: action('onPaginate'),
  columns: ['Primeira', 'Segunda', 'Terceira', 'Quarta'],
  rows: [
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '1' },
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '2'},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '3'},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '4'},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '5'},
  ],
  totalPages: 10
};

export const CustomActions = Template.bind({});
CustomActions.args = {
  currentPage: 5,
  onPaginate: action('onPaginate'),
  columns: ['Primeira', 'Segunda', 'Terceira', 'Quarta'],
  rows: [
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '1' },
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '2'},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '3'},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '4'},
    { items: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4' ], identifier: '5'},
  ],
  totalPages: 10,
  customActions: [
    {
      icon: <AiFillAlert />,
      onClick: action('customAction 1')
    },
    {
      icon: <AiFillEdit />,
      onClick: action('customAction 2')
    }
  ]
};
