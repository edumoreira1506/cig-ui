import styled from 'styled-components';

import { Colors, MAIN_FONT } from '../../constants';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 100%;
  overflow: hidden;
`;

export const StyledImageContainer = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: ${Colors.BlackTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.White};
  flex-direction: column;
  font-family: ${MAIN_FONT};  

  svg {
    font-size: 3em;
  }
`;

export const StyledUploadMessage = styled.p`
  margin: 0 0 10px 0;
  font-size: 0.8em;
  font-weight: bold;
`;
