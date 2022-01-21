import { createGlobalStyle } from 'styled-components';

export const ModalGlobalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    transform: translateX(-100px);
    transition: all 200ms ease-in;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateX(0px);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateX(-100px);
  }
`;
