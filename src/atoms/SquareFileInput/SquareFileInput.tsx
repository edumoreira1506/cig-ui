import * as React from 'react';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';

import { FileInputProps } from '../../@types/file';

import { StyledContainer, StyledInput, StyledIcon, StyledText } from './SquareFileInput.styles';

export default function SquareFileInput({ onUpload, uploadMessage }: FileInputProps) {
  const handleUpload = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files[0]);
    }
  }, [onUpload]);

  return (
    <StyledContainer>
      <StyledInput data-testid="square-file-input" onChange={handleUpload} type="file" />
      <StyledIcon>
        <BsFillCloudArrowUpFill />
      </StyledIcon>
      {uploadMessage && <StyledText>{uploadMessage}</StyledText>}
    </StyledContainer>
  );
}
