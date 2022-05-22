import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DatePicker } from '.';

export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: new Date(),
  onChange: action('onChange'),
  label: 'Campo de data',
};
