import { ComponentMeta, ComponentStory } from '@storybook/react';

import Subtitle from './Subtitle';

export default {
  title: 'Atoms/Subtitle',
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Subtitle example'
};
