import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoundImage from './RoundImage';

export default {
  title: 'Atoms/RoundImage',
  component: RoundImage,
} as ComponentMeta<typeof RoundImage>;

const Template: ComponentStory<typeof RoundImage> = (args) => <div style={{ width: '150px', height: '150px' }}><RoundImage {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  src: 'https://via.placeholder.com/150',
  borderWidth: 3
};
