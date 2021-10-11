import React from 'react';
import { render, screen } from '@testing-library/react';

import ImagesCarousel from './ImagesCarousel';
import userEvent from '@testing-library/user-event';

const DEFAULT_PROPS = {
  images: [],
  onClickImage: jest.fn()
};

describe('ImagesCarousel', () => {
  it('renders all images', () => {
    const images = Array(10).fill(null).map((_, index) => ({
      src: `src-${index}`,
      alt: `alt-${index}`,
    }));

    render(<ImagesCarousel {...DEFAULT_PROPS} images={images} />);

    images.forEach(image => {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument();
    });
  });

  it('calls onClickImage', () => {
    const image = { src: 'src', alt: 'alt' };
    const onClickImage = jest.fn();

    render(<ImagesCarousel {...DEFAULT_PROPS} onClickImage={onClickImage} images={[image]} />);

    userEvent.click(screen.getByAltText(image.alt));

    expect(onClickImage).toHaveBeenCalledTimes(1);
  });
});
