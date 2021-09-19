import { Colors } from '../../constants/styles';
import SandwitchButton from '../../atoms/SandwichButton/SandwichButton';

import { StyledContainer, StyledHeader, StyledImageContainer, StyledTitle } from './Header.styles';
import { RoundImage } from 'atoms';

export interface HeaderProps {
  user: {
    image: string;
    name: string;
  }
  title: string;
}

export default function Header({ user: { name: userName, image: userImage }, title }: HeaderProps ) {
  return (
    <StyledHeader>
      <StyledContainer>
        <SandwitchButton color={Colors.White} />
        <StyledTitle>{title}</StyledTitle>
        <StyledImageContainer>
          <RoundImage borderWidth={2} src={userImage} alt={userName} />
        </StyledImageContainer>
      </StyledContainer>
    </StyledHeader>
  );
}
