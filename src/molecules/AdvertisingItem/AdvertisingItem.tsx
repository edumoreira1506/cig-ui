import { VFC } from 'react';

import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';

import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledImageContainer,
  StyledPrice,
  StyledTitle
} from './AdvertisingItem.styles';

export type AdvertisingItemProps = {
  onViewAdvertising: () => void;
  placeholderImage: string;
  title: string;
  price: number;
  description: string;
  image?: string;
}

export const AdvertisingItem: VFC<AdvertisingItemProps> = ({
  description,
  onViewAdvertising,
  placeholderImage,
  price,
  title,
  image
}: AdvertisingItemProps) => (
  <StyledContainer onClick={onViewAdvertising}>
    <StyledImageContainer>
      <StyledImage alt="" src={image ?? placeholderImage} />
    </StyledImageContainer>
    <StyledContent>
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>
        {centsToBrazilianFormat(price)}
      </StyledPrice>
      <StyledDescription>
        {description}
      </StyledDescription>
    </StyledContent>
  </StyledContainer>
);
