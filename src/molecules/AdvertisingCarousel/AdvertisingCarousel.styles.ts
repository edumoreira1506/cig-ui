import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants/styles';

export const StyledContainer = styled.div`
  width: 100%;
  font-family: ${MAIN_FONT};

  .slick-slide {
    padding: 0 4px;
    box-sizing: border-box;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.VeryLightGrey};
  color: ${Colors.Black};
  border-top-left-radius: ${DEFAULT_BORDER_RADIUS};
  border-bottom-left-radius: ${DEFAULT_BORDER_RADIUS};
`;

export const StyledTitle = styled.p`
  margin: 0;
  padding: 0 0 0 8px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const StyledViewAll = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.Black};
  cursor: pointer;
  padding-right: 20px;
`;

export const StyledBody = styled.ul`
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
  width: 100%;
`;

export const StyledItem = styled.li`
  width: 100%;
  background-color: ${Colors.VeryLightGrey};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  cursor: pointer;
`;

export const StyledImageContainer = styled.figure`
  width: calc(100% - 10px);
  height: 140px;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const StyledTexts = styled.div`
  width: calc(100% - 10px);
  margin: 0 5px;
`;

export const StyledPrice = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const StyledDescription = styled.p`
  margin: 4px 0 0 0;
  font-size: 0.8em;
`;

export const StyledBreederImageContainer = styled.div`
  width: 35px;
  height: 35px;
  margin: 10px 0 10px 5px;
`;
