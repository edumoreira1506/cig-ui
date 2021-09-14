import { ComponentMeta, ComponentStory } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Organisms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Title example'
};
