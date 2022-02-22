import React, { VFC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Round } from '..';
import { Colors } from '../../constants';

import { StyledContainer } from './FavoriteButton.styles';

type FavoriteButtonProps = {
  favorited?: boolean;
  onToggleFavorite: () => void;
}

export const FavoriteButton: VFC<FavoriteButtonProps> = ({
  favorited = false,
  onToggleFavorite
}: FavoriteButtonProps) => (
  <StyledContainer onClick={onToggleFavorite} favorited={favorited}>
    <Round backgroundColor={Colors.White}>
      {favorited ? <AiFillHeart /> : <AiOutlineHeart />}
    </Round>
  </StyledContainer>
);
