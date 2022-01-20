import { useCallback, useEffect, useRef, useState } from 'react';

import { Colors } from '../../constants/styles';
import SandwitchButton, { SandwitchButtonProps } from '../../atoms/SandwichButton/SandwichButton';
import RoundImage from '../../atoms/RoundImage/RoundImage';

import {
  StyledContainer,
  StyledHeader,
  StyledImageContainer,
  StyledTitle,
  StyledShortcutContainer,
  StyledShortcut,
} from './Header.styles';

export interface HeaderProps {
  user: {
    image: string;
    name: string;
  }
  title: string;
  onToggleMenu: SandwitchButtonProps['onToggle'];
  sandwichButtonIsToggled: boolean;
  onClickShortcut?: (shortcut: string) => void;
  shortcuts?: string[];
}

export default function Header({
  user: { name: userName, image: userImage },
  title,
  onToggleMenu,
  sandwichButtonIsToggled,
  shortcuts = [],
  onClickShortcut
}: HeaderProps ) {
  const [isOpenShortcuts, setIsOpenShortcuts] = useState(false);

  const shortcutRef = useRef<any>();

  const toggleShortcuts = useCallback(() => setIsOpenShortcuts(prevIsOpenShortcuts => !prevIsOpenShortcuts), []);

  const onDocumentClick = useCallback((e) => {
    if (!isOpenShortcuts || !shortcutRef.current) return;

    const xPosition = e.screenX;
    const yPosition = e.screenY;
    const {
      top: topElementPosition,
      left: leftElementPosition,
      height: heightElement,
      width: widthElement
    } = shortcutRef.current?.getBoundingClientRect?.() ?? {};

    const isClickingInsideTheShortcutArea = (
      xPosition >= leftElementPosition && xPosition <= leftElementPosition + widthElement &&
      yPosition >= topElementPosition && yPosition <= topElementPosition + heightElement
    );

    if (!isClickingInsideTheShortcutArea) setIsOpenShortcuts(false);
  }, [isOpenShortcuts]);

  useEffect(() => {
    document.addEventListener('click', onDocumentClick);

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [onDocumentClick]);

  return (
    <StyledHeader>
      <StyledContainer>
        <SandwitchButton onToggle={onToggleMenu} color={Colors.White} toggled={sandwichButtonIsToggled} />
        <StyledTitle>{title}</StyledTitle>
        <StyledImageContainer>
          <RoundImage onClick={toggleShortcuts} borderWidth={2} src={userImage} alt={userName} />
          {Boolean(shortcuts.length) && onClickShortcut && isOpenShortcuts && (
            <StyledShortcutContainer ref={shortcutRef}>
              {shortcuts.map(shortcut => (
                <StyledShortcut
                  key={shortcut}
                  onClick={() => {
                    onClickShortcut(shortcut);
                    setIsOpenShortcuts(false);
                  }}
                >
                  {shortcut}
                </StyledShortcut>
              ))}
            </StyledShortcutContainer>
          )}
        </StyledImageContainer>
      </StyledContainer>
    </StyledHeader>
  );
}
