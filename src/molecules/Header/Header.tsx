import { Colors } from '../../constants/styles';
import SandwitchButton, { SandwitchButtonProps } from '../../atoms/SandwichButton/SandwichButton';
import RoundImage from '../../atoms/RoundImage/RoundImage';

import { StyledContainer, StyledHeader, StyledImageContainer, StyledTitle } from './Header.styles';

export interface HeaderProps {
  user: {
    image: string;
    name: string;
  }
  title: string;
  onToggleMenu: SandwitchButtonProps['onToggle'];
  sandwichButtonIsToggled: boolean;
}

export default function Header({
  user: { name: userName, image: userImage },
  title,
  onToggleMenu,
  sandwichButtonIsToggled
}: HeaderProps ) {
  return (
    <StyledHeader>
      <StyledContainer>
        <SandwitchButton onToggle={onToggleMenu} color={Colors.White} toggled={sandwichButtonIsToggled} />
        <StyledTitle>{title}</StyledTitle>
        <StyledImageContainer>
          <RoundImage borderWidth={2} src={userImage} alt={userName} />
        </StyledImageContainer>
      </StyledContainer>
    </StyledHeader>
  );
}
