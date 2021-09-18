import * as styled from 'styled-components';
import InputMask from 'react-number-format';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: ${MAIN_FONT};
  position: relative;
`;

const inputStyles = styled.css`
  background-color: ${Colors.LightGrey};
  border: none;
  width: 100%;
  padding: 10px 0 10px 10px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.DarkGrey};

  &:focus {
    outline: none;
  }
`;

export const StyledMaskedInput = styled.default(props => <InputMask {...props} />)`${inputStyles}`;

export const StyledInput = styled.default.input`${inputStyles}`;

export const StyledInputLoading = styled.default.span`
  position: absolute;
  right: 0;
  transform: scale(0.3) translate(155%, -53%);
  top: 0;
`;
