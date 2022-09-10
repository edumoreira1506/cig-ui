import React, { FC, Fragment, VFC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import RoundImage from '../../atoms/RoundImage/RoundImage';
import { FavoriteButton } from '../../atoms/FavoriteButton/FavoriteButton';
import { Colors } from '../../constants';

import {
  StyledBody,
  StyledBreederImageContainer,
  StyledContainer,
  StyledDescription,
  StyledHeader,
  StyledImage,
  StyledImageContainer,
  StyledPrice,
  StyledTexts,
  StyledTitle,
  StyledViewAll,
  StyledItem,
  StyledFavoriteButton
} from './AdvertisingCarousel.styles';

const CAROUSEL_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  mobileFirst: true,
  slidesToShow: 2.2,
  slidesToScroll: 1,
  arrows: false,
};

export type AdvertisingCarouselItem = {
  price: number;
  description: string;
  breederImage?: string;
  image?: string;
  identifier: string;
  favorited?: boolean;
}

type LinkComponentProps = {
  identifier: 'breeder-link' | 'view-all' | 'view-advertising';
  params?: Record<string, string>
}

export type AdvertisingCarouselProps = {
  title: string;
  onViewAll?: () => void;
  advertisings: AdvertisingCarouselItem[];
  placeholderImage: string;
  onViewAdvertising?: (identifier: string) => void;
  onViewBreeder?: (identifer: string) => void;
  onFavorite?: (identifier: string) => void;
  linkComponent?: FC<LinkComponentProps>
}

export const AdvertisingCarousel: VFC<AdvertisingCarouselProps> = ({
  title,
  onViewAll,
  advertisings,
  placeholderImage,
  onViewAdvertising,
  onFavorite,
  onViewBreeder,
  linkComponent: LinkComponent = Fragment
}: AdvertisingCarouselProps) => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledViewAll onClick={onViewAll}>
        <LinkComponent identifier='view-all'>
          Ver tudo <IoIosArrowForward />
        </LinkComponent>
      </StyledViewAll>
    </StyledHeader>

    <StyledBody>
      <Slider {...CAROUSEL_SETTINGS}>
        {advertisings.map(advertising => (
          <StyledItem key={advertising.identifier} onClick={() => onViewAdvertising?.(advertising.identifier)}>
            <StyledImageContainer>
              <LinkComponent identifier='view-advertising' params={{ identifier: advertising.identifier }}>
                <StyledImage src={advertising?.image ?? placeholderImage} alt="" />
              </LinkComponent>

              {onFavorite && (
                <StyledFavoriteButton>
                  <FavoriteButton favorited={Boolean(advertising.favorited)} onToggleFavorite={() => onFavorite(advertising.identifier)} />
                </StyledFavoriteButton>
              )}
            </StyledImageContainer>

            <LinkComponent identifier='view-advertising' params={{ identifier: advertising.identifier }}>
              <StyledTexts>
                <StyledPrice>{centsToBrazilianFormat(advertising.price)}</StyledPrice>
                <StyledDescription>{advertising.description}</StyledDescription>
              </StyledTexts>
            </LinkComponent>
            

            <StyledBreederImageContainer onClick={e => {
              e.stopPropagation();
              onViewBreeder?.(advertising.identifier);
            }}>
              <LinkComponent identifier='breeder-link'>
                <RoundImage
                  src={advertising.breederImage ?? placeholderImage}
                  alt=""
                  borderWidth={1}
                  borderColor={Colors.White}
                />
              </LinkComponent>
            </StyledBreederImageContainer>
          </StyledItem>
        ))}
      </Slider>
    </StyledBody>
  </StyledContainer>
);
