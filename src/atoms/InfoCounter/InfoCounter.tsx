import { ReactNode, VFC } from 'react';

import { Colors } from '../../constants/styles';

import {
  StyledContainer,
  StyledCounter,
  StyledDescription,
  StyledIcon,
  StyledMainContent,
} from './InfoCounter.styles';

export type InfoCounterProps = {
  icon: ReactNode;
  amount: number;
  description: string;
  iconColor?: string;
}

export const InfoCounter: VFC<InfoCounterProps> = ({
  icon,
  amount,
  description,
  iconColor = Colors.LightRed
}: InfoCounterProps) => (
  <StyledContainer>
    <StyledMainContent>
      <StyledIcon color={iconColor}>
        {icon}
      </StyledIcon>
      <StyledCounter>
        {amount}
      </StyledCounter>
    </StyledMainContent>
    <StyledDescription>
      {description}
    </StyledDescription>
  </StyledContainer>
);
