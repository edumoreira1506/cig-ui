import ReactImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';

import { StyledContainer } from './ImageGallery.styles';

export default function ImageGallery(props: ReactImageGalleryProps) {
  return (
    <StyledContainer>
      <ReactImageGallery {...props} />
    </StyledContainer>
  );
}
