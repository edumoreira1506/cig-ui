import { VFC } from 'react';

import { StyledContainer, StyledCheckbox, StyledLabel } from './Checkbox.styles';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label?: string;
}

const Checkbox: VFC<CheckboxProps> = ({
  checked,
  onToggle,
  label
}: CheckboxProps) => (
  <StyledContainer>
    <StyledCheckbox onClick={onToggle} type="checkbox" checked={checked} />

    {label && <StyledLabel>{label}</StyledLabel>}
  </StyledContainer>
);

export default Checkbox;
