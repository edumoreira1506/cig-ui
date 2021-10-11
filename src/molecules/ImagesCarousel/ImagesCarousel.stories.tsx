import { ComponentMeta, ComponentStory } from '@storybook/react';

import ImagesCarousel from './ImagesCarousel';

export default {
  title: 'Molecules/ImagesCarousel',
  component: ImagesCarousel,
} as ComponentMeta<typeof ImagesCarousel>;

const Template: ComponentStory<typeof ImagesCarousel> = (args) => (
  <div style={{ width: '100%' }}>
    <ImagesCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  images: Array(10).fill({
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: ''
  }),
  onClickImage: console.log
};
