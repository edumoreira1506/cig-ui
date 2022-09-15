import React, { Component, FC, Fragment, VFC } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { IPoultry } from '@cig-platform/types';
import { AiFillEdit } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';
import { useIsMobile } from '@cig-platform/hooks';

import SquareImage from '../../atoms/SquareImage/SquareImage';
import Round from '../../atoms/Round/Round';
import { Colors, LinkIdentifiers } from '../../constants';
import { ScrollView } from '../../atoms';

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
  linkComponent?: FC<LinkComponentProps>;
  isMobile?: boolean;
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

class ClassFileImagesCarousel extends Component<FileImagesCarouselProps> {
  constructor(props: FileImagesCarouselProps) {
    super(props);

    this.onChangeSlide = this.onChangeSlide.bind(this);
    this.onScrollSlides = this.onScrollSlides.bind(this);
  }

  onScrollSlides(event: any) {
    if (event.target.scrollLeft + event.target.offsetWidth === event.target.scrollWidth){
      this.props.onFinishSlides?.();
    }
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
      linkComponent: LinkComponent = Fragment,
      isMobile = false
    } = this.props;

    const { component: Component, props } = isMobile ? ({
      component: ScrollView,
      props: { onScroll: this.onScrollSlides }
    }) : ({
      component: Slider,
      props: { ...CAROUSEL_SETTINGS, afterChange: this.onChangeSlide }
    });

    return (
      <StyledContainer>
        <Component {...props}>
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
        </Component>
      </StyledContainer>
    );
  }
}

const PoultriesCarousel: VFC<FileImagesCarouselProps> = (props) => {
  const isMobile = useIsMobile();
  
  return <ClassFileImagesCarousel {...props} isMobile={isMobile} />;
};

export default PoultriesCarousel;
