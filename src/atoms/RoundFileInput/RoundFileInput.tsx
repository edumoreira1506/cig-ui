import { useCallback, useMemo, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import {
  StyledContainer,
  StyledImage,
  StyledImageContainer,
  StyledInput,
  StyledOverlay,
  StyledUploadMessage,
} from './RoundFileInput.styles';

export interface RoundFileInputProps {
  onUpload: (file: File) => void;
  file?: File;
  baseUrl: string;
  imagePlaceholderPath: string;
  uploadMessage?: string;
}

export default function RoundFileInput({ onUpload, file, baseUrl, imagePlaceholderPath, uploadMessage }: RoundFileInputProps) {
  const [overlayLayer, setShowOverlayLayer] = useState(false);

  const hideOverlayLayer = useCallback(() => setShowOverlayLayer(false), []);
  const showOverlayLayer = useCallback(() => setShowOverlayLayer(true), []);

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files[0]);
    }
  }, [onUpload]);

  const imagePath = useMemo(() => file ? `${baseUrl}/${file.name}` : imagePlaceholderPath, [file, imagePlaceholderPath, baseUrl]);

  return (
    <StyledContainer onMouseOver={showOverlayLayer} onMouseOut={hideOverlayLayer}>
      {overlayLayer && (
        <StyledOverlay data-testid="round-file-input-overlay">
          <AiOutlineCloudUpload />
          {uploadMessage && <StyledUploadMessage>{uploadMessage}</StyledUploadMessage>}
        </StyledOverlay>
      )}
      <StyledImageContainer>
        <StyledImage src={imagePath} alt={imagePath} />
        <StyledInput data-testid="file-input" onChange={handleUpload} type="file" />
      </StyledImageContainer>
    </StyledContainer>
  );
}
