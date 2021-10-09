import { render, screen } from '@testing-library/react';

import ImageGallery from './ImageGallery';

const DEFAULT_PROPS = {
  items: [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      originalAlt: 'Alt 1'
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      originalAlt: 'Alt 2'
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      originalAlt: 'Alt 3'
    },
  ]
};

describe('ImageGallery', () => {
  it('renders all images', () => {
    render(<ImageGallery {...DEFAULT_PROPS} />);

    DEFAULT_PROPS.items.forEach((item) => {
      expect(screen.getByAltText(item.originalAlt)).toBeInTheDocument();
    });
  });
});
