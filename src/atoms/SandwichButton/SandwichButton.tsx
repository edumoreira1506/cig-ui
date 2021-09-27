import { Colors } from '../../constants/styles';
import { StyledButton, StyledButtonBar } from './SandwitchButton.styles';

export interface SandwitchButtonProps {
  onToggle: () => void;
  color?: string;
  toggled: boolean;
}

export default function SandwitchButton({ onToggle, color = Colors.Black, toggled }: SandwitchButtonProps) {
  return (
    <StyledButton role="checkbox" aria-checked={toggled} data-testid="sandwich-button" onClick={onToggle}>
      <StyledButtonBar data-testid="sandwich-button-bar" color={color} toggled={toggled} />
    </StyledButton>
  );
}
