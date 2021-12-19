import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsFillEggFill } from 'react-icons/bs';

import Table from './Table';

export default {
  title: 'Atoms/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Example = Template.bind({});
Example.args = {
  columns: ['Primeira', 'Segunda', 'Terceira', 'Quarta'],
  rows: [
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
  ]
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  columns: [<BsFillEggFill key="" />, 'Segunda', 'Terceira', 'Quarta'],
  rows: [
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
  ]
};
