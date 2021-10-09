import { StyledContainer, StyledImage } from './SquareImage.styles';

export interface SquareImageProps {
  alt?: string;
  src: string;
  onClick?: () => void;
}

export default function SquareImage({ src, alt = '', onClick = () => undefined }: SquareImageProps) {
  return (
    <StyledContainer onClick={onClick}>
      <StyledImage src={src} alt={alt} />
    </StyledContainer>
  );
}
