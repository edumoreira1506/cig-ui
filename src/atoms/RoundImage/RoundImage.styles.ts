import styled from 'styled-components';

export const StyledContainer = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;

  ${({ borderColor }: { borderColor: string }) => `
    border-width: 5px;
    border-color: ${borderColor};
    border-style: inset;
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
