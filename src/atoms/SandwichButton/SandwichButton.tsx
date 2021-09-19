import { Colors } from 'index';
import { useCallback, useState } from 'react';

import { StyledButton, StyledButtonBar } from './SandwitchButton.styles';

export interface SandwitchButtonProps {
  onToggle?: (toggle: boolean) => void;
  color?: string;
}

export default function SandwitchButton({ onToggle = () => null, color = Colors.Black }: SandwitchButtonProps) {
  const [toggled, setToggled] = useState(false);

  const handleClickButton = useCallback(() => {
    setToggled((prevToggled) => {
      const newToggled = !prevToggled;

      onToggle(newToggled);

      return newToggled;
    });
  }, [onToggle]);

  return (
    <StyledButton data-testid="sandwich-button" onClick={handleClickButton}>
      <StyledButtonBar data-testid="sandwich-button-bar" color={color} toggled={toggled} />
    </StyledButton>
  );
}
