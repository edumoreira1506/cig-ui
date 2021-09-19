import { Colors } from '../../constants/styles';

import { StyledContainer, StyledImage } from './RoundImage.styles';

export interface RoundImageProps {
  src: string;
  borderColor?: string;
  alt?: string;
}

export default function RoundImage({ src, borderColor = Colors.White, alt = '' }: RoundImageProps) {
  return (
    <StyledContainer data-testid="round-image-container" borderColor={borderColor}>
      <StyledImage src={src} alt={alt} />
    </StyledContainer>
  );
}
