import React, { FC } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AdvertisingCarousel } from './AdvertisingCarousel';
import { LinkIdentifiersType } from '../../constants';

export default {
  title: 'Molecules/AdvertisingCarousel',
  component: AdvertisingCarousel,
} as ComponentMeta<typeof AdvertisingCarousel>;

const FakeLinkComponent: FC<{
  identifier: LinkIdentifiersType
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ identifier, children }) => (
  <a target="_blank" href={identifier} rel="noreferrer">
    {/* <span>{identifier}</span> */}
    {children}
  </a>
);

const Template: ComponentStory<typeof AdvertisingCarousel> = (args) => (
  <div style={{ width: '300px' }}>
    <AdvertisingCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  linkComponent: FakeLinkComponent,
  onViewAll: action('onViewAll'),
  onViewAdvertising: action('onViewAdvertising'),
  onViewBreeder: action('onViewBreeder'),
  onFavorite: action('onFavorite'),
  placeholderImage: 'https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/placeholder-user.png',
  title: 'Frangos',
  advertisings: [
    {
      price: 15000,
      description: 'Lorem ipsum dolor set ali baba...',
      breederImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      image: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      identifier: '0',
      favorited: true
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
