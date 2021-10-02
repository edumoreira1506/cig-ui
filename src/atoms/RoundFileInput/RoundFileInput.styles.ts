import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
`;
