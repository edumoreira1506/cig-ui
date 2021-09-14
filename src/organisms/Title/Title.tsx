import { StyledTitle } from './Title.styles';

export interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <StyledTitle>
      {text}
    </StyledTitle>
  );
}
