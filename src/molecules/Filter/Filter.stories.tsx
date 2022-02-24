import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Filter } from './Filter';

export default {
  title: 'Molecules/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => (
  <div style={{ width: '400px' }}>
    <Filter {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      value: '1',
      label: 'Primeira'
    },
    {
      value: '2',
      label: 'Segunda'
    },
    {
      value: '3',
      label: 'Terceira'
    }
  ],
  selecteds: ['2'],
  onToggle: action('onToggle'),
  title: 'Título do filtro!'
};
