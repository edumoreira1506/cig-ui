import { ComponentMeta, ComponentStory } from '@storybook/react';

import Select from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: '',
  label: 'Select',
  name: 'select',
  options: [
    {
      label: 'Label 1',
      value: 'Value 1'
    },
    {
      label: 'Label 2',
      value: 'Value 2'
    }
  ]
};

export const ExampleWithEmptyOption = Template.bind({});
ExampleWithEmptyOption.args = {
  value: '',
  label: 'Select',
  name: 'select',
  showEmptyOption: true,
  emptyOptionText: 'Null',
  options: [
    {
      label: 'Label 1',
      value: 'Value 1'
    },
    {
      label: 'Label 2',
      value: 'Value 2'
    }
  ]
};
