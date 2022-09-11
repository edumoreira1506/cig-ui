import { FC, Fragment, VFC } from 'react';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';
import RoundImage from '../../atoms/RoundImage/RoundImage';
import { Colors, LinkIdentifiers } from '../../constants';

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
  onViewAdvertising?: () => void;
  placeholderImage: string;
  title: string;
  price: number;
  description: string;
  image?: string;
  breederImage?: string;
  onToggleFavorite?: () => void;
  onViewBreeder?: () => void;
  favorited?: boolean;
  linkComponent?: FC<LinkComponentProps>
}

type LinkComponentProps = {
  identifier: typeof LinkIdentifiers.BREEDER_LINK | typeof LinkIdentifiers.VIEW_ADVERTISING;
  params?: Record<string, string>
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
  onViewBreeder,
  linkComponent: LinkComponent = Fragment
}: AdvertisingItemProps) => (
  <StyledContainer onClick={onViewAdvertising}>
    <LinkComponent identifier='breeder-link'>
      <StyledImageContainer>
        <StyledImage alt="" src={image ?? placeholderImage} />

        {onToggleFavorite && (
          <StyledFavoriteButton>
            <FavoriteButton onToggleFavorite={onToggleFavorite} favorited={favorited} />
          </StyledFavoriteButton>
        )}
      </StyledImageContainer>
    </LinkComponent>

    <StyledContent>
      <LinkComponent identifier='breeder-link'>
        <StyledTitle>{title}</StyledTitle>
        <StyledPrice>
          {centsToBrazilianFormat(price)}
        </StyledPrice>
        <StyledDescription>
          {description}
        </StyledDescription>
      </LinkComponent>
      
      <StyledBreederImageContainer onClick={e => {
        e.stopPropagation();
        onViewBreeder?.();
      }}>
        <LinkComponent identifier='breeder-link'>
          <RoundImage
            src={breederImage ?? placeholderImage}
            alt=""
            borderWidth={1}
            borderColor={Colors.White}
          />
        </LinkComponent>
      </StyledBreederImageContainer>
    </StyledContent>
  </StyledContainer>
);
