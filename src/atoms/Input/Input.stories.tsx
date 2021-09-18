import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Example = Template.bind({});
Example.args = {
  value: '',
  label: 'E-mail',
  name: 'email',
  type: 'email',
  placeholder: 'email@teste.com'
};

export const Required = Template.bind({});
Required.args = {
  value: '',
  label: 'E-mail',
  name: 'email',
  type: 'email',
  placeholder: 'email@teste.com',
  required: true,
};


export const Loading = Template.bind({});
Loading.args = {
  value: '',
  label: 'E-mail',
  name: 'email',
  type: 'email',
  placeholder: 'email@teste.com',
  isLoading: true,
};
