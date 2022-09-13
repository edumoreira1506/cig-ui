import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ListModal from './ListModal';

export default {
  title: 'Molecules/ListModal',
  component: ListModal,
} as ComponentMeta<typeof ListModal>;

const Template: ComponentStory<typeof ListModal> = (args) => <ListModal {...args} />;

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  linkComponent: ({ children }) => (
    <a>
      {children}
    </a>
  ),
  items: [
    {
      onClick: () => alert('Item 1 clicked'),
      label: 'Item 1'
    },
    {
      onClick: () => alert('Item 2 clicked'),
      label: 'Item 2'
    },
    {
      onClick: () => alert('Item 3 clicked'),
      label: 'Item 3'
    }
  ]
};
