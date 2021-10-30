import { ComponentMeta, ComponentStory } from '@storybook/react';

import FileImagesCarousel from './FileImagesCarousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  title: 'Molecules/FileImagesCarousel',
  component: FileImagesCarousel,
} as ComponentMeta<typeof FileImagesCarousel>;

const Template: ComponentStory<typeof FileImagesCarousel> = (args) => (
  <div style={{ width: '100%' }}>
    <FileImagesCarousel {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  uploadMessage: 'Subir arquivos',
  images: Array(10).fill({
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    alt: ''
  }),
  onRemoveImage: console.log 
};
