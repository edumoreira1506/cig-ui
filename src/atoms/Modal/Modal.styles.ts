import { createGlobalStyle, css } from 'styled-components';

export const ModalGlobalStyle = createGlobalStyle`
 ${({ animation }: { animation: string }) => css`
    .ReactModal__Overlay {
      transition: all 200ms ease-in;

      ${animation === 'left' && css`
        transform: translateX(-100px);
      `}

      ${animation === 'bottom' && css`
        .ReactModal__Content {
          inset: 0;
          height: 25vh;
          transform: translateY(100vh);
        }
      `}
    }

    .ReactModal__Overlay--after-open {
      opacity: 1;

      ${animation === 'left' && css`
        transform: translateX(0px);
      `}

      ${animation === 'bottom' && css`
        .ReactModal__Content {
          inset: 0 !important;
          transform: translateY(75vh);
          height: 25vh;
        }
      `}
    }

    .ReactModal__Overlay--before-close {
      opacity: 0;

      ${animation === 'left' && css`
        transform: translateX(-100px);
      `}

      ${animation === 'bottom' && css`
        transform: translateY(100vh);
      `}
    }
 `}
`;
