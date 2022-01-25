import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommentItem from './CommentItem';

export default {
  title: 'Molecules/CommentItem',
  component: CommentItem,
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <div style={{ width: '340px' }}>
    <CommentItem {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
  name: 'Criatório do Claudinho',
  date: new Date(),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.'
};
