import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AdvertisingCarousel } from './AdvertisingCarousel';

export default {
  title: 'Molecules/AdvertisingCarousel',
  component: AdvertisingCarousel,
} as ComponentMeta<typeof AdvertisingCarousel>;

const Template: ComponentStory<typeof AdvertisingCarousel> = (args) => (
  <div style={{ width: '300px' }}>
    <AdvertisingCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  onViewAll: action('onViewAll'),
  onViewAdvertising: action('onViewAdvertising'),
  placeholderImage: 'https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/placeholder-user.png',
  title: 'Frangos',
  advertisings: [
    {
      price: 15000,
      description: 'Lorem ipsum dolor set ali baba...',
      breederImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      identifier: '0'
    },
    {
      price: 15000,
      description: 'Lorem ipsum dolor set ali baba...',
      identifier: '1'
    },
    {
      price: 15000,
      description: 'Lorem ipsum dolor set ali baba...',
      breederImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      identifier: '2'
    },
    {
      price: 15000,
      description: 'Lorem ipsum dolor set ali baba...',
      breederImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      identifier: '3'
    },
    {
      price: 15000,
      description: 'Lorem ipsum dolor set ali baba...',
      breederImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      identifier: '4'
    }
  ]
};
