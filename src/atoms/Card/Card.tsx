import React, { ReactNode } from 'react';

import { StyledBody, StyledCTA, StyledContainer, StyledHeader } from './Card.styles';

export interface CardProps {
  description: string;
  date: Date;
  icon?: ReactNode;
  onClick?: () => void;
  ctaText?: string;
}

export default function Card({
  description,
  date,
  icon,
  onClick,
  ctaText
}: CardProps) {
  return (
    <StyledContainer>
      <StyledHeader>
        {icon}
        {new Intl.DateTimeFormat('pt-BR').format(date)}
      </StyledHeader>
      <StyledBody>{description}</StyledBody>
      {Boolean(onClick && ctaText) && (
        <StyledCTA onClick={onClick}>
          {ctaText}
        </StyledCTA>
      )}
    </StyledContainer>
  );
}
