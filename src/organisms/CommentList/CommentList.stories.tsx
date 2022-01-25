import { ComponentMeta, ComponentStory } from '@storybook/react';

import CommentList from './CommentList';

export default {
  title: 'Organisms/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Example = Template.bind({});
Example.args = {
  comments: [
    {
      image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      name: 'Criatório do Claudinho',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.',
      answers: [
        {
          image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
          name: 'Criatório do Claudinho',
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.',
        },
        {
          image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
          name: 'Criatório do Claudinho',
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.',
        }
      ]
    },
    {
      image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      name: 'Criatório do Claudinho',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.',
      answers: [
        {
          image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
          name: 'Criatório do Claudinho',
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.',
        },
        {
          image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
          name: 'Criatório do Claudinho',
          date: new Date(),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a iaculis quam, condimentum volutpat est.',
        }
      ]
    }
  ],
  onComment: window.alert,
  commentNameButton: 'Comentar',
  onAnswer: console.log
};
