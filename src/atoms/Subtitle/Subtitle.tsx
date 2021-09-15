import { StyledSubtitle } from './Subtitle.styles';

export interface SubtitleProps {
  text: string;
}

export default function Subtitle({ text }: SubtitleProps) {
  return (
    <StyledSubtitle>
      {text}
    </StyledSubtitle>
  );
}
