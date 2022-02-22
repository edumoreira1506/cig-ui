import React, { VFC } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import { RoundImage } from '../../atoms';
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

type AdvertisingCarouselItem = {
  price: number;
  description: string;
  breederImage?: string;
  image?: string;
  identifier: string;
}

type AdvertisingCarouselProps = {
  title: string;
  onViewAll: () => void;
  advertisings: AdvertisingCarouselItem[];
  placeholderImage: string;
  onViewAdvertising: (identifier: string) => void;
}

export const AdvertisingCarousel: VFC<AdvertisingCarouselProps> = ({
  title,
  onViewAll,
  advertisings,
  placeholderImage,
  onViewAdvertising
}: AdvertisingCarouselProps) => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledViewAll onClick={onViewAll}>
        Ver tudo <IoIosArrowForward />
      </StyledViewAll>
    </StyledHeader>

    <StyledBody>
      <Slider {...CAROUSEL_SETTINGS}>
        {advertisings.map(advertising => (
          <StyledItem key={advertising.identifier} onClick={() => onViewAdvertising(advertising.identifier)}>
            <StyledImageContainer>
              <StyledImage src={advertising?.image ?? placeholderImage} alt="" />
            </StyledImageContainer>

            <StyledTexts>
              <StyledPrice>{centsToBrazilianFormat(advertising.price)}</StyledPrice>
              <StyledDescription>{advertising.description}</StyledDescription>
            </StyledTexts>

            <StyledBreederImageContainer>
              <RoundImage
                src={advertising.breederImage ?? placeholderImage}
                alt=""
                borderWidth={1}
                borderColor={Colors.White}
              />
            </StyledBreederImageContainer>
          </StyledItem>
        ))}
      </Slider>
    </StyledBody>
  </StyledContainer>
);
