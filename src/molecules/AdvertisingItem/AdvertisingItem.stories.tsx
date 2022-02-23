import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AdvertisingItem } from './AdvertisingItem';

export default {
  title: 'Molecules/AdvertisingItem',
  component: AdvertisingItem,
} as ComponentMeta<typeof AdvertisingItem>;

const Template: ComponentStory<typeof AdvertisingItem> = (args) => (
  <div style={{ width: '300px' }}>
    <AdvertisingItem {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  onViewAdvertising: action('onViewAdvertising'),
  onToggleFavorite: action('onToggleFavorite'),
  placeholderImage: 'https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/placeholder-user.png',
  title: 'Claudinha da Silva',
  price: 15000,
  description: 'Lorem ipsum dolor set ali baba...',
  image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
};
