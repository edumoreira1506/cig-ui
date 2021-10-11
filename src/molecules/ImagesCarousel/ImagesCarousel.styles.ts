import styled from 'styled-components';

import { Colors, DEFAULT_TRANSITION } from '../../constants/styles';

export const StyledContainer = styled.div`
  .slick-slider, .slick-list, .slick-track, .slick-slide {
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;

    & > div {
      height: 100%;
    }
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
    right: 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-slide {
	  padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const StyledItem = styled.div`
`;
