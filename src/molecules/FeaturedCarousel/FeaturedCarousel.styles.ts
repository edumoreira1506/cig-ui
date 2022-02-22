import styled from 'styled-components';

import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants';

export const StyledContainer = styled.div`
  width: 100%;
  font-family: ${MAIN_FONT};
`;

export const StyledTitle = styled.p`
  font-size: 1em;
  text-align: left;
  margin: 0 0 15px;
`;

export const StyledContent = styled.div`
  width: 100%;
`;

export const StyledItem = styled.div`
  height: 290px;
  position: relative;
`;

export const StyledImageArea = styled.figure`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledFavoriteButton = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 2;
`;

export const StyledDetailsArea = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
  padding: 0 10px 10px;
  background-color: ${Colors.BlackTransparent};
  color: ${Colors.White};
  text-align: center;
`;

export const StyledItemTitle = styled.p`
  margin: 12px 0 0 0;
`;

export const StyledItemPrice = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin: 6px 0;
`;

export const StyledItemButton = styled.div`
  width: 100%;
`;
