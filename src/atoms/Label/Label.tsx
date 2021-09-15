import { StyledLabel } from './Label.styles';

interface LabelProps {
  text: string;
  htmlFor?: string;
  required?: boolean;
}

export default function Label({ text, htmlFor, required = false }: LabelProps) {
  return (
    <StyledLabel htmlFor={htmlFor} required={required}>
      {text}
    </StyledLabel>
  );
}
