import { Colors } from '../../constants/styles';

import { StyledContainer, StyledImage } from './RoundImage.styles';

export interface RoundImageProps {
  src: string;
  borderColor?: string;
  alt?: string;
  borderWidth?: number;
  onClick: () => void;
}

export default function RoundImage({
  src,
  borderColor = Colors.White,
  alt = '',
  borderWidth = 5,
  onClick = () => undefined,
}: RoundImageProps) {
  return (
    <StyledContainer onClick={onClick} borderWidth={borderWidth} data-testid="round-image-container" borderColor={borderColor}>
      <StyledImage src={src} alt={alt} />
    </StyledContainer>
  );
}
