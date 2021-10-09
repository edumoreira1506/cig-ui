import styled from 'styled-components';

import { RoundProps } from './Round';

export const StyledContainer = styled.div`
  box-shadow: 3px 0px 15px -2px rgba(0,0,0,0.72);
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({
    backgroundColor,
    onClick
  }: {
    backgroundColor: RoundProps['backgroundColor'];
    onClick?: RoundProps['onClick'];
  }) => `
    ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
    ${onClick ? 'cursor: pointer;' : ''}
  `}

  > * {
    width: 100%;
    height: 100%;
  }
`;
