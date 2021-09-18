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
  value: 'email@teste.com',
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

export const WithMask = Template.bind({});
WithMask.args = {
  value: '11111111111',
  label: 'Mask',
  name: 'mask',
  type: 'number',
  placeholder: '111.111.111-11',
  mask: '###.###.###-##'
};
