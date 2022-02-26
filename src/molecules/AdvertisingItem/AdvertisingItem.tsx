import { VFC } from 'react';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';
import RoundImage from '../../atoms/RoundImage/RoundImage';
import { Colors } from '../../constants/styles';

import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageContainer,
  StyledPrice,
  StyledTitle,
  StyledFavoriteButton,
  StyledBreederImageContainer
} from './AdvertisingItem.styles';

export type AdvertisingItemProps = {
  onViewAdvertising: () => void;
  placeholderImage: string;
  title: string;
  price: number;
  description: string;
  image?: string;
  breederImage?: string;
  onToggleFavorite?: () => void;
  onViewBreeder: () => void;
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
  favorited = false,
  breederImage,
  onViewBreeder
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
      <StyledBreederImageContainer onClick={e => {
        e.stopPropagation();
        onViewBreeder();
      }}>
        <RoundImage
          src={breederImage ?? placeholderImage}
          alt=""
          borderWidth={1}
          borderColor={Colors.White}
        />
      </StyledBreederImageContainer>
    </StyledContent>
  </StyledContainer>
);
