import { Component } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';

import SquareFileInput from '../../atoms/SquareFileInput/SquareFileInput';
import { FileInputProps } from '../../@types/file';
import SquareImage, { SquareImageProps } from '../../atoms/SquareImage/SquareImage';

import { StyledContainer, StyledItem } from './FileImagesCarousel.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface FileImagesCarouselProps extends FileInputProps {
  onClickImage: SquareImageProps['onClick'];
  images: {
    src: SquareImageProps['src'];
    alt: SquareImageProps['src']
  }[];
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
    const { onClickImage, onUpload, uploadMessage, images } = this.props;

    return (
      <StyledContainer>
        <Slider {...CAROUSEL_SETTINGS}>
          <StyledItem>
            <SquareFileInput onUpload={onUpload} uploadMessage={uploadMessage} />
          </StyledItem>
          {images.map(image => (
            <StyledItem key={image.src}>
              <SquareImage {...image} onClick={onClickImage} />
            </StyledItem>
          ))}
        </Slider>
      </StyledContainer>
    );
  }
}
