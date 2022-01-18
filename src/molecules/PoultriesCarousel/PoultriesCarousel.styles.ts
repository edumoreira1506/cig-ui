import styled from 'styled-components';
import { createMinWidthMediaQuery } from 'utils';

import { Colors, DEFAULT_BORDER_RADIUS, DEFAULT_TRANSITION } from '../../constants';

export const StyledContainer = styled.div`
  width: 100%;
  height: 130px;

  .slick-slider, .slick-list, .slick-track, .slick-slide {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;

    & > div {
      height: 100%;
    }
  }

  .slick-slide {
	  padding: 0 4px;
    box-sizing: border-box;
  }

  .slick-arrow {
    display: block;
    color: ${Colors.DarkGrey};
    z-index: 2;
    opacity: 0.7;
    transition: ${DEFAULT_TRANSITION};

    &:hover {
      opacity: 1;
    }
  }

  .slick-next {
    right: -25px;

    ${createMinWidthMediaQuery(`
      right: 0;
    `)}
  }

  .slick-prev {
    left: -25px;

    ${createMinWidthMediaQuery(`
      left: 0;
    `)}
  }
`;

export const StyledItem = styled.div`
  position: relative;
`;

export const StyledIcons = styled.div`
  position: absolute;
  height: 25px;
  width: auto;
  right: 5px;
  top: 5px;
  display: flex;
`;

export const StyledIcon = styled.div`
  width: 25px;
  height: 100%;
  margin-left: 5px;

  svg {
    width: 70%;
  }
`;

export const StyledName = styled.p`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: calc(100% - 10px);
  margin: 0;
  text-align: left;
  background-color: ${Colors.LightGrey};
  border-bottom-left-radius: ${DEFAULT_BORDER_RADIUS};
  border-bottom-right-radius: ${DEFAULT_BORDER_RADIUS};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5px;
`;
