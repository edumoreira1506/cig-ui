import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS } from '../../constants';

import { HelpProps } from './Help';

export const StyledContainer = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border: solid 1px ${Colors.LightGrey};
  border-radius: 100%;
  cursor: pointer;
  color: ${Colors.LightGrey};
  font-size: 0.7em;
  position: relative;

  &:focus {
    outline: none;
  }

  ${({ text }: { text: HelpProps['text'] }) => `
    &:hover {
      &::after, &::before {
        position: absolute;
        background-color: ${Colors.White};
        box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
      }

      &::before {
        content: '${text}';
        width: 100vw;
        max-width: 190px;
        border-radius: ${DEFAULT_BORDER_RADIUS};
        color: ${Colors.Black};
        padding: 6px;
        text-align: left;
        width: max-content;
        max-width: 170px;
        word-break: break-all;
        top: 0;
        left: calc(100% + 10px);
        z-index: 2;
      }

      &::after {
        content: "";
        width: 10px;
        left: 20px;
        height: 10px;
        transform: rotate(45deg);
        z-index: 1;
      }
    }
  `}
`;
