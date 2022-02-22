import { VFC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Round } from '..';

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
    <Round>
      {favorited ? <AiFillHeart /> : <AiOutlineHeart />}
    </Round>
  </StyledContainer>
);
