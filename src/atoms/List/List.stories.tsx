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
  items: [
    {
      content: 'Primeiro',
      key: '0'
    },
    {
      content: 'Segundo',
      key: '1'
    },
    {
      content: 'Terceiro',
      key: '2'
    }
  ]
};
