import { ComponentMeta, ComponentStory } from '@storybook/react';

import List from './List';

export default {
  title: 'Atoms/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <div style={{ width: '150px' }}>
    <List {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  items: ['Primeiro', 'Segundo', 'Terceiro']
};
