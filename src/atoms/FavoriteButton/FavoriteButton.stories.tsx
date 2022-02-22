import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FavoriteButton } from './FavoriteButton';

export default {
  title: 'Atoms/FavoriteButton',
  component: FavoriteButton,
} as ComponentMeta<typeof FavoriteButton>;

const Template: ComponentStory<typeof FavoriteButton> = (args) => <FavoriteButton {...args} />;

export const Example = Template.bind({});
Example.args = {
  favorited: false,
  onToggleFavorite: action('onToggleFavorite')
};
