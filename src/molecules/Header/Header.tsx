import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

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
  StyledIcons,
  StyledSearchIcon,
  StyledSearchArea,
  StyledSearchInput
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
  onSearch?: (query: string) => void;
}

export default function Header({
  user: { name: userName, image: userImage },
  title,
  onToggleMenu,
  sandwichButtonIsToggled,
  shortcuts = [],
  onClickShortcut,
  onSearch
}: HeaderProps ) {
  const [isOpenShortcuts, setIsOpenShortcuts] = useState(false);
  const [isOpenSearchArea, setIsOpenSearchArea] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const searchRef = useRef<any>();
  const shortcutRef = useRef<any>();

  const toggleShortcuts = useCallback(() => setIsOpenShortcuts(prevIsOpenShortcuts => !prevIsOpenShortcuts), []);
  const toggleSearchArea = useCallback(() => setIsOpenSearchArea(prevIsOpenSearchArea => {
    if (!prevIsOpenSearchArea) {
      searchRef.current?.focus();
    }

    return !prevIsOpenSearchArea;
  }), [searchRef]);

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

  const handleSubmitSearch = useCallback((e) => {
    e.preventDefault();

    onSearch?.(searchValue);
  }, [searchValue, onSearch]);

  useEffect(() => {
    document.addEventListener('click', onDocumentClick);

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [onDocumentClick]);

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledIcons>
          <SandwitchButton onToggle={onToggleMenu} color={Colors.White} toggled={sandwichButtonIsToggled} />
          {onSearch && (
            <StyledSearchIcon isOpen={isOpenSearchArea} onClick={toggleSearchArea}>
              <AiOutlineSearch />

              <StyledSearchArea
                isOpen={isOpenSearchArea}
                onClick={e => e.stopPropagation()}
                onSubmit={handleSubmitSearch}
              >
                <StyledSearchInput
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  placeholder="Estou buscando..."
                  type="search"
                  ref={searchRef}
                />
              </StyledSearchArea>
            </StyledSearchIcon>
          )}
        </StyledIcons>
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
