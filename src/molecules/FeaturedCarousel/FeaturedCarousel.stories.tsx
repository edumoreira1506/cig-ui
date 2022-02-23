import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FeaturedCarousel } from './FeaturedCarousel';

export default {
  title: 'Molecules/FeaturedCarousel',
  component: FeaturedCarousel,
} as ComponentMeta<typeof FeaturedCarousel>;

const Template: ComponentStory<typeof FeaturedCarousel> = (args) => (
  <div style={{ width: '400px' }}>
    <FeaturedCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  onFavorite: action('onFavorite'),
  onSeeMore: action('onSeeMore'),
  placeholderImage: 'https://cig-maketplace.s3.sa-east-1.amazonaws.com/breeders/profile/placeholder-user.png',
  items: [
    {
      title: 'Lorem ipsum dolor set',
      price: 15000,
      identifier: 0,
      image: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      favorited: true
    },
    {
      title: 'Ali baba catsu or',
      price: 3500,
      identifier: 1,
      image: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
    },
    {
      title: 'Lorem ipsum dolor set',
      price: 15000,
      identifier: 2,
    }
  ]
};
