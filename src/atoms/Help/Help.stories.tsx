import { ComponentMeta, ComponentStory } from '@storybook/react';

import Help from './Help';

export default {
  title: 'Atoms/Help',
  component: Help,
} as ComponentMeta<typeof Help>;

const Template: ComponentStory<typeof Help> = (args) => <Help {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
};
