import styled, { createGlobalStyle, css } from 'styled-components';

export const ModalGlobalStyle = createGlobalStyle`
  .ReactModal__Content {
    position: relative;
  }

 ${({ animation }: { animation: string }) => css`
    .ReactModal__Overlay {
      transition: all 200ms ease-in;

      ${animation === 'left' && css`
        transform: translateX(-100px);
      `}

      ${animation === 'bottom' && css`
        .ReactModal__Content {
          inset: 0;
          height: 35vh;
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
          transform: translateY(65vh);
          height: 35vh;
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

export const StyledCloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  position: absolute;
  right: 15px;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
`;
