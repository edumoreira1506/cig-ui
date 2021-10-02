import { useCallback, useMemo } from 'react';
import { StyledContainer, StyledImage, StyledImageContainer, StyledInput } from './RoundFileInput.styles';

export interface RoundFileInputProps {
  onUpload: (file: File) => void;
  file?: File;
  baseUrl: string;
  imagePlaceholderPath: string;
}

export default function RoundFileInput({ onUpload, file, baseUrl, imagePlaceholderPath }: RoundFileInputProps) {
  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files[0]);
    }
  }, [onUpload]);

  const imagePath = useMemo(() => file ? `${baseUrl}/${file.name}` : imagePlaceholderPath, [file]);

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={imagePath} />
        <StyledInput onChange={handleUpload} type="file" />
      </StyledImageContainer>
    </StyledContainer>
  );
}
