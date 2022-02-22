import { VFC } from 'react';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';
import { POULTRY_FALLBACK_IMAGE } from '../../constants';

import {
  StyledContainer,
  StyledDescription,
  StyledImage,
  StyledImageContainer,
  StyledName,
  StyledPrice,
  StyledSubtitle,
  StyledTextContainer,
} from './PoultryCard.styles';

type PoultryCardProps = {
  image?: string;
  title: string;
  price: number;
  subtitle: string;
  description: string;
  subtitleColor?: string;
}

export const PoultryCard: VFC<PoultryCardProps> = ({
  description,
  price,
  subtitle,
  title,
  image = POULTRY_FALLBACK_IMAGE,
  subtitleColor
}: PoultryCardProps) => (
  <StyledContainer>
    <StyledImageContainer>
      <StyledImage src={image} alt={title} />
    </StyledImageContainer>
    <StyledTextContainer>
      <StyledName>{title}</StyledName>
      <StyledPrice>{centsToBrazilianFormat(price)}</StyledPrice>
      <StyledSubtitle color={subtitleColor}>{subtitle}</StyledSubtitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledTextContainer>
  </StyledContainer>
);
