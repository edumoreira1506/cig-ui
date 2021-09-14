import { StyledLabel } from './Label.styles';

interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return (
    <StyledLabel>
      {text}
    </StyledLabel>
  );
}
