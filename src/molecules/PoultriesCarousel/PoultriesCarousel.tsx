import { Component, FC, Fragment } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { IPoultry } from '@cig-platform/types';
import { AiFillEdit } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';

import SquareImage from '../../atoms/SquareImage/SquareImage';
import Round from '../../atoms/Round/Round';
import { Colors, LinkIdentifiers } from '../../constants';

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

type LinkComponentProps = {
  identifier: typeof LinkIdentifiers.VIEW_ADVERTISING;
  params?: Record<string, string>
}

export interface FileImagesCarouselProps {
  onEditPoultry?: (poultryId: string) => void;
  onViewPoultry?: (poultryId: string) => void;
  onFinishSlides?: () => void;
  poultries: Poultry[];
  fallbackImage: string;
  linkComponent?: FC<LinkComponentProps>
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

    if (slide === poultriesAmount - poultriesShown - 1) {
      this.props.onFinishSlides?.();
    }
  }

  render() {
    const {
      poultries,
      onViewPoultry,
      onEditPoultry,
      fallbackImage,
      linkComponent: LinkComponent = Fragment
    } = this.props;

    return (
      <StyledContainer>
        <Slider {...CAROUSEL_SETTINGS} afterChange={this.onChangeSlide}>
          {poultries.map(poultry => (
            <StyledItem key={poultry.id}>
              <StyledIcons>
                {onEditPoultry && poultry.isAlive && (
                  <StyledIcon>
                    <Round onClick={() => onEditPoultry(poultry.id)} backgroundColor={Colors.White}>
                      <AiFillEdit data-testid="edit-poultry" />
                    </Round>
                  </StyledIcon>
                )}
              </StyledIcons>
              <LinkComponent identifier='view-advertising' params={{ poultryId: poultry.id }}>
                <StyledName>{poultry.name}</StyledName>
                <SquareImage
                  src={poultry.mainImage ?? fallbackImage}
                  alt={poultry.name}
                  onClick={() => onViewPoultry?.(poultry.id)}
                />
              </LinkComponent>
            </StyledItem>
          ))}
        </Slider>
      </StyledContainer>
    );
  }
}
