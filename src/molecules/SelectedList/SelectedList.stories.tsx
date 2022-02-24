import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SelectedList } from './SelectedList';

export default {
  title: 'Molecules/SelectedList',
  component: SelectedList,
} as ComponentMeta<typeof SelectedList>;

const Template: ComponentStory<typeof SelectedList> = (args) => (
  <div style={{ width: '400px' }}>
    <SelectedList {...args} />
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
  onToggle: action('onToggle')
};
