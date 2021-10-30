import { ComponentMeta, ComponentStory } from '@storybook/react';

import ImageGallery from './ImageGallery';

import 'react-image-gallery/styles/css/image-gallery.css';

export default {
  title: 'Atoms/ImageGallery',
  component: ImageGallery,
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => (
  <div style={{ width: '300px' }}>
    <ImageGallery {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  items: [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]
};
