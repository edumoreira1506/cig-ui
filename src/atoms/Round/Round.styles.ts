import styled from 'styled-components';

import { DEFAULT_BOX_SHADOW } from '../../constants';
import { RoundProps } from './Round';

export const StyledContainer = styled.div`
  box-shadow: ${DEFAULT_BOX_SHADOW};
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
