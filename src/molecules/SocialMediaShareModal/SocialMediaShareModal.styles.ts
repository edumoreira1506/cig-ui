import styled, { createGlobalStyle } from 'styled-components';
import { Colors, DEFAULT_BORDER_RADIUS } from '../../constants';

export const SocialMedias = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const SocialMedia = styled.li`
  width: 25px;
  height: 25px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.White};
`;

export const GlobalStyles = createGlobalStyle`
  .social-media-share-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.White};
    height: 60px !important;
    transform: translateY(calc(100vh - 60px)) !important;
  }
`;
