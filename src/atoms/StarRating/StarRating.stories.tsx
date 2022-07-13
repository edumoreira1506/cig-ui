import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StarRating } from './StarRating';

export default {
  title: 'Atoms/StarRating',
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Example = Template.bind({});
Example.args = {
};
