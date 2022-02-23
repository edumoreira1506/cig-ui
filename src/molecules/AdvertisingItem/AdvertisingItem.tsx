import { VFC } from 'react';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';

import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageContainer,
  StyledPrice,
  StyledTitle,
  StyledFavoriteButton
} from './AdvertisingItem.styles';

export type AdvertisingItemProps = {
  onViewAdvertising: () => void;
  placeholderImage: string;
  title: string;
  price: number;
  description: string;
  image?: string;
  onToggleFavorite?: () => void;
  favorited?: boolean;
}

export const AdvertisingItem: VFC<AdvertisingItemProps> = ({
  description,
  onViewAdvertising,
  placeholderImage,
  price,
  title,
  image,
  onToggleFavorite,
  favorited = false
}: AdvertisingItemProps) => (
  <StyledContainer onClick={onViewAdvertising}>
    <StyledImageContainer>
      <StyledImage alt="" src={image ?? placeholderImage} />

      {onToggleFavorite && (
        <StyledFavoriteButton>
          <FavoriteButton onToggleFavorite={onToggleFavorite} favorited={favorited} />
        </StyledFavoriteButton>
      )}
    </StyledImageContainer>
    <StyledContent>
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>
        {centsToBrazilianFormat(price)}
      </StyledPrice>
      <StyledDescription>
        {description}
      </StyledDescription>
    </StyledContent>
  </StyledContainer>
);
