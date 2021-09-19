import { Colors } from '../../constants/styles';

import { StyledContainer, StyledImage } from './RoundImage.styles';

export interface RoundImageProps {
  src: string;
  borderColor?: string;
  alt?: string;
  borderWidth?: number;
}

export default function RoundImage({
  src,
  borderColor = Colors.White,
  alt = '',
  borderWidth = 5
}: RoundImageProps) {
  return (
    <StyledContainer borderWidth={borderWidth} data-testid="round-image-container" borderColor={borderColor}>
      <StyledImage src={src} alt={alt} />
    </StyledContainer>
  );
}
