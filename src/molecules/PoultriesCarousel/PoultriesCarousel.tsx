import { Component } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { IPoultry } from '@cig-platform/types';
import { AiFillEye, AiFillEdit } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';

import SquareImage, { SquareImageProps } from '../../atoms/SquareImage/SquareImage';
import Round from '../../atoms/Round/Round';
import { Colors } from '../../constants';

import {
  StyledContainer,
  StyledItem,
  StyledIcon,
  StyledIcons,
  StyledName
} from './PoultriesCarousel.styles';

interface Poultry extends IPoultry {
  mainImage?: string;
}

export interface FileImagesCarouselProps {
  onClickImage: SquareImageProps['onClick'];
  onEditPoultry?: (poultryId: string) => void;
  onViewPoultry?: (poultryId: string) => void;
  onFinishSlides?: () => void;
  poultries: Poultry[];
  fallbackImage: string;
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
        slidesToShow: 3,
      }
    },
  ]
};

export default class FileImagesCarousel extends Component<FileImagesCarouselProps> {
  constructor(props: FileImagesCarouselProps) {
    super(props);

    this.onChangeSlide = this.onChangeSlide.bind(this);
  }

  onChangeSlide(slide: number) {
    const poultriesAmount = this.props.poultries.length;
    const poultriesShown = isMobile ? 3 : 8;

    if (slide === poultriesAmount - poultriesShown) {
      this.props.onFinishSlides?.();
    }
  }

  render() {
    const {
      onClickImage,
      poultries,
      onViewPoultry,
      onEditPoultry,
      fallbackImage
    } = this.props;

    return (
      <StyledContainer>
        <Slider {...CAROUSEL_SETTINGS} afterChange={this.onChangeSlide}>
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
              <StyledName>{poultry.name}</StyledName>
              <SquareImage
                src={poultry.mainImage ?? fallbackImage}
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
