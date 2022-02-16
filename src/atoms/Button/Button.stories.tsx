import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiFillAlert } from 'react-icons/ai';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <div style={{ width: '150px' }}><Button {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  label: 'Click me!'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Click me!',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Click me!',
  isLoading: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Click me!',
  icon: <AiFillAlert />
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: 'Click me!',
  color: 'red',
  hoverColor: 'black'
};
