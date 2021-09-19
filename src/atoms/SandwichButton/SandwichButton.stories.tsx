import { ComponentMeta, ComponentStory } from '@storybook/react';

import SandwichButton from './SandwichButton';

export default {
  title: 'Atoms/SandwichButton',
  component: SandwichButton,
} as ComponentMeta<typeof SandwichButton>;

const Template: ComponentStory<typeof SandwichButton> = (args) => <SandwichButton {...args} />;

export const Example = Template.bind({});
Example.args = {
  color: 'yellow'
};
