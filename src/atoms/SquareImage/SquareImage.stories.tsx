import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareImage from './SquareImage';

export default {
  title: 'Atoms/SquareImage',
  component: SquareImage,
} as ComponentMeta<typeof SquareImage>;

const Template: ComponentStory<typeof SquareImage> = (args) => <div style={{ width: '150px', height: '150px' }}><SquareImage {...args} /></div>;

export const Example = Template.bind({});
Example.args = {
  src: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
};
