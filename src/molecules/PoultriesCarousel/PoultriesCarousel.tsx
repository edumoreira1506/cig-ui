import { Component } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { IPoultry } from '@cig-platform/types';

import SquareImage, { SquareImageProps } from '../../atoms/SquareImage/SquareImage';

import { StyledContainer, StyledItem } from './PoultriesCarousel.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Poultry extends IPoultry {
  mainImage: string;
}

export interface FileImagesCarouselProps {
  onClickImage: SquareImageProps['onClick'];
  poultries: Poultry[];
}

const CAROUSEL_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  mobileFirst: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  prevArrow: <BsFillArrowLeftCircleFill />,
  nextArrow: <BsFillArrowRightCircleFill />,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 2.6,
      }
    },
    {
      breakpoint: 380,
      settings: {
        arrows: false,
        slidesToShow: 1.8,
      }
    }
  ]
};

export default class FileImagesCarousel extends Component<FileImagesCarouselProps> {
  render() {
    const {
      onClickImage,
      poultries,
    } = this.props;

    return (
      <StyledContainer>
        <Slider {...CAROUSEL_SETTINGS}>
          {poultries.map(poultry => (
            <StyledItem key={poultry.id}>
              <SquareImage src={poultry.mainImage} alt={poultry.name} onClick={onClickImage} />
            </StyledItem>
          ))}
        </Slider>
      </StyledContainer>
    );
  }
}
