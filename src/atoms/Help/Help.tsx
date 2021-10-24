import { StyledContainer } from './Help.styles';

export interface HelpProps {
  text: string;
}

export default function Help({ text }: HelpProps) {
  return (
    <StyledContainer text={text}>
      ?
    </StyledContainer>
  );
}
