import styled from 'styled-components';

export const StyledContainer = styled.figure`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;

  ${({ borderColor, borderWidth }: { borderColor: string; borderWidth: number }) => `
    border-width: ${borderWidth}px;
    border-color: ${borderColor};
    border-style: solid;
    width: calc(100% - ${borderWidth * 2}px);
    height: calc(100% - ${borderWidth * 2}px);
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
