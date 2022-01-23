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
          transition: all 200ms ease-in;
          transform: translateY(120%);
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
          transform: none;
        }
      `}
    }

    .ReactModal__Overlay--before-close {
      opacity: 0;

      ${animation === 'left' && css`
        transform: translateX(-100px);
      `}

      ${animation === 'bottom' && css`
        .ReactModal__Content {
          transform: translateY(120%);
        }
      `}
    }
 `}
`;
