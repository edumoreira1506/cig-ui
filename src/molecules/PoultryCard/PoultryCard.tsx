import { VFC } from 'react';

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
}

export const PoultryCard: VFC<PoultryCardProps> = ({
  description,
  price,
  subtitle,
  title,
  image = POULTRY_FALLBACK_IMAGE
}: PoultryCardProps) => (
  <StyledContainer>
    <StyledImageContainer>
      <StyledImage src={image} alt={title} />
    </StyledImageContainer>
    <StyledTextContainer>
      <StyledName>{title}</StyledName>
      <StyledPrice>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price / 100)}</StyledPrice>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledTextContainer>
  </StyledContainer>
);
