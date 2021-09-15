import { ComponentMeta, ComponentStory } from '@storybook/react';

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
