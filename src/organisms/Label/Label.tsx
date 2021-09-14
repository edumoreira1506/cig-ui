import { StyledLabel } from './Label.styles';

interface LabelProps {
  text: string;
  htmlFor?: string;
}

export default function Label({ text, htmlFor }: LabelProps) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {text}
    </StyledLabel>
  );
}
