import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FileImagesCarousel from './FileImagesCarousel';

const DEFAULT_PROPS = {
  onClickImage: jest.fn(),
  images: [],
  onUpload: jest.fn(),
};

describe('FileImagesCarousel', () => {
  it('renders the file input', () => {
    render(<FileImagesCarousel {...DEFAULT_PROPS} />);

    expect(screen.getByTestId('square-file-input')).toBeInTheDocument();
  });

  it('renders the upload message', () => {
    const uploadMessage = 'Upload message!';
    
    render(<FileImagesCarousel {...DEFAULT_PROPS} uploadMessage={uploadMessage} />);

    expect(screen.getByText(uploadMessage)).toBeInTheDocument();
  });

  it('renders the images', () => {
    const images = Array(6).fill(null).map((_, index) => ({ alt: `alt-${index}`, src: 'fake-src' }));

    render(<FileImagesCarousel {...DEFAULT_PROPS} images={images} />);

    images.forEach((image) => {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument();
    });
  });

  it('calls onClickImage', () => {
    const image = { alt: 'alt', src: 'src' };
    const onClickImage = jest.fn();

    render(<FileImagesCarousel {...DEFAULT_PROPS} images={[image]} onClickImage={onClickImage} />);

    userEvent.click(screen.getByAltText(image.alt));

    expect(onClickImage).toHaveBeenCalled();
  });

  it('calls onUpload', () => {
    const onUpload = jest.fn();
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    render(<FileImagesCarousel {...DEFAULT_PROPS} onUpload={onUpload} />);

    userEvent.upload(screen.getByTestId('square-file-input'), file);

    expect(onUpload).toHaveBeenCalledWith(file);
  });
});
