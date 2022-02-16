import { ComponentMeta, ComponentStory } from '@storybook/react';

import PoultriesCarousel from './PoultriesCarousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { POULTRY_FALLBACK_IMAGE } from '../../constants';

export default {
  title: 'Molecules/PoultriesCarousel',
  component: PoultriesCarousel,
} as ComponentMeta<typeof PoultriesCarousel>;

const Template: ComponentStory<typeof PoultriesCarousel> = (args) => (
  <div style={{ width: '100%' }}>
    <PoultriesCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  poultries: Array(10).fill({
    mainImage: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    id: '',
    name: 'Claudinha'
  }),
  onViewPoultry: console.log,
  onClickImage: console.log,
  onEditPoultry: console.log,
  fallbackImage: POULTRY_FALLBACK_IMAGE
};

export const UsingFallback = Template.bind({});
UsingFallback.args = {
  poultries: [
    {
      mainImage: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      id: '',
      name: 'Claudinha'
    },
    {
      id: '',
      name: 'Claudinho'
    }
  ],
  onViewPoultry: console.log,
  onClickImage: console.log,
  onEditPoultry: console.log,
  fallbackImage: POULTRY_FALLBACK_IMAGE
};
