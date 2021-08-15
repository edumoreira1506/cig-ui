import { ComponentMeta, ComponentStory } from '@storybook/react';

import Test from './Test';

export default {
  title: 'Atoms/Test',
  component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Example = Template.bind({});
Example.args = {
  showText: true,
};
