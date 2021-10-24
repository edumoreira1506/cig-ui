import { Component } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { IPoultry } from '@cig-platform/types';

import SquareImage, { SquareImageProps } from '../../atoms/SquareImage/SquareImage';
import { Round } from 'atoms';
import { Colors } from '../../constants';

import {
  StyledContainer,
  StyledItem,
  StyledIcon,
  StyledIcons
} from './PoultriesCarousel.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillEye, AiFillEdit } from 'react-icons/ai';

interface Poultry extends IPoultry {
  mainImage: string;
}

export interface FileImagesCarouselProps {
  onClickImage: SquareImageProps['onClick'];
  onEditPoultry?: (poultryId: string) => void;
  onViewPoultry?: (poultryId: string) => void;
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
      onViewPoultry,
      onEditPoultry
    } = this.props;

    return (
      <StyledContainer>
        <Slider {...CAROUSEL_SETTINGS}>
          {poultries.map(poultry => (
            <StyledItem key={poultry.id}>
              <StyledIcons>
                {onEditPoultry && (
                  <StyledIcon>
                    <Round onClick={() => onEditPoultry(poultry.id)} backgroundColor={Colors.White}>
                      <AiFillEdit />
                    </Round>
                  </StyledIcon>
                )}
                {onViewPoultry && (
                  <StyledIcon>
                    <Round onClick={() => onViewPoultry(poultry.id)} backgroundColor={Colors.White}>
                      <AiFillEye />
                    </Round>
                  </StyledIcon>
                )}
              </StyledIcons>
              <SquareImage
                src={poultry.mainImage}
                alt={poultry.name}
                onClick={() => onClickImage?.(poultry.id)}
              />
            </StyledItem>
          ))}
        </Slider>
      </StyledContainer>
    );
  }
}
