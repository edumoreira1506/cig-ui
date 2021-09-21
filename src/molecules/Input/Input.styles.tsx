import styled from 'styled-components';
import InputMask from 'react-number-format';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

import { InputProps } from './Input';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: ${MAIN_FONT};
  position: relative;
`;

export const StyledMaskedInput = styled(props => <InputMask {...props} />)`
  background-color: ${Colors.LightGrey};
  border: solid 2px transparent;
  width: 100%;
  padding: 10px 0 10px 10px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.DarkGrey};

  &:focus {
    outline: none;
  }

  ${({ requiredError }: { requiredError: InputProps['required'] }) => requiredError && `
    border-color: ${Colors.LightRed};
  `}
`;

export const StyledInput = styled.input`
  background-color: ${Colors.LightGrey};
  width: 100%;
  border: solid 2px transparent;
  padding: 10px 0 10px 10px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  color: ${Colors.DarkGrey};

  &:focus {
    outline: none;
  }

  ${({ requiredError }: { requiredError: InputProps['required'] }) => requiredError && `
    border-color: ${Colors.LightRed};
  `}
`;

export const StyledInputLoading = styled.span`
  position: absolute;
  right: 0;
  transform: scale(0.3) translate(155%, -53%);
  top: 0;
`;

export const StyledRequiredMessage = styled.span`
  color: ${Colors.LightRed};
  position: absolute;
  bottom: -35%;
  font-size: 0.8em;
  font-weight: bold;
  right: 0;
`;
