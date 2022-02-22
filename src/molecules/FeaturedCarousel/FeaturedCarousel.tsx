import React, { VFC } from 'react';
import Slider from 'react-slick';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import Button from '../../atoms/Button/Button';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';

import {
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledItem,
  StyledImageArea,
  StyledImage,
  StyledFavoriteButton,
  StyledDetailsArea,
  StyledItemButton,
  StyledItemPrice,
  StyledItemTitle,
} from './FeaturedCarousel.styles';

type FeaturedCarouselItem = {
  title: string;
  price: number;
  image?: string;
  identifier: string;
}

type FeaturedCarouselProps = {
  onFavorite?: (identifier: string) => void;
  placeholderImage: string;
  items: FeaturedCarouselItem[];
  onSeeMore: (identifier: string) => void;
}

const CAROUSEL_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 500,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const FeaturedCarousel: VFC<FeaturedCarouselProps> = ({
  onFavorite,
  items,
  placeholderImage,
  onSeeMore
}: FeaturedCarouselProps) => (
  <StyledContainer>
    <StyledTitle>Em destaque</StyledTitle>
    <StyledContent>
      <Slider {...CAROUSEL_SETTINGS}>
        {items.map(item => (
          <StyledItem key={item.identifier}>
            {Boolean(onFavorite) && (
              <StyledFavoriteButton>
                <FavoriteButton onToggleFavorite={() => onFavorite?.(item.identifier)} />
              </StyledFavoriteButton>
            )}

            <StyledImageArea>
              <StyledImage src={item.image ?? placeholderImage} alt="" />
            </StyledImageArea>

            <StyledDetailsArea>
              <StyledItemTitle>{item.title}</StyledItemTitle>
              <StyledItemPrice>{centsToBrazilianFormat(item.price)}</StyledItemPrice>
              <StyledItemButton>
                <Button onClick={() => onSeeMore(item.identifier)}>
                  Saiba Mais
                </Button>
              </StyledItemButton>
            </StyledDetailsArea>
          </StyledItem>
        ))}
      </Slider>
    </StyledContent>
  </StyledContainer>
);
