import styled from 'styled-components';

import { MAIN_FONT, DEFAULT_BORDER_RADIUS, Colors } from '../../constants/styles';

export const StyledContainer = styled.button`
  background: none;
  border: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  justify-content: space-between;
  padding: 8px;
  background-color: ${Colors.VeryLightGrey};
  font-family: ${MAIN_FONT};
  align-items: flex-start;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const StyledImageContainer = styled.figure`
  margin: 0;
  width: calc(35% - 5px);
  height: 130px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledContent = styled.div`
  width: calc(65% - 5px);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledTitle = styled.p`
  margin: 0 0 10px 0;
  font-size: 1.2em;
  font-weight: 600;
`;

export const StyledPrice = styled.p`
  margin: 0;
`;

export const StyledDescription = styled.p`
  margin: 15px 0 0 0;
  font-size: 0.8em;
  color: ${Colors.HalfGrey};
`;

export const StyledFavoriteButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledBreederImageContainer = styled.div`
  width: 30px;
  margin-top: 12px;
`;
