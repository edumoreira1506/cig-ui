import { ComponentMeta, ComponentStory } from '@storybook/react';

import Autocomplete from './Autocomplete';

export default {
  title: 'Molecules/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <div style={{ width: '300px' }}>
    <Autocomplete {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      content: 'Primeiro',
      key: '0',
    },
    {
      content: 'Segundo',
      key: '1',
    },
    {
      content: 'Terceiro',
      key: '2'    
    }
  ]
};
