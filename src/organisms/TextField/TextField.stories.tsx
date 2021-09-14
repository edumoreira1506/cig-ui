import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField from './TextField';

export default {
  title: 'Organisms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: '',
  label: 'E-mail',
  name: 'email',
  placeholder: 'email@teste.com'
};
