import { useCallback } from 'react';
import { StyledContainer, StyledImage } from './SquareImage.styles';

export interface SquareImageProps {
  alt?: string;
  src: string;
  onClick?: (src: string) => void;
}

export default function SquareImage({ src, alt = '', onClick = () => undefined }: SquareImageProps) {
  const handleClick = useCallback(() => onClick(src), [src, onClick]);

  return (
    <StyledContainer onClick={handleClick}>
      <StyledImage src={src} alt={alt} />
    </StyledContainer>
  );
}
