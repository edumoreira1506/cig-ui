import { VFC } from 'react';

import { RoundImage } from '../../atoms';
import { Colors } from '../../constants/styles';

import {
  StyledContainer,
  StyledContent,
  StyledDate,
  StyledHeader,
  StyledImage,
  StyledTexts,
  StyledText
} from './CommentItem.styles';

export interface CommentItemProps {
  name: string;
  image: string;
  content: string;
  date: Date;
}

const CommentItem: VFC<CommentItemProps> = ({
  content,
  date,
  image,
  name
}: CommentItemProps) => (
  <StyledContainer>
    <StyledHeader>
      <StyledTexts>
        <StyledImage>
          <RoundImage borderColor={Colors.DarkGrey} borderWidth={1} src={image} alt={name} />
        </StyledImage>

        <StyledText>
          {name}
        </StyledText>
      </StyledTexts>
      <StyledDate>
        {new Intl.DateTimeFormat('pt-BR').format(date)}
      </StyledDate>
    </StyledHeader>
    <StyledContent>
      {content}
    </StyledContent>
  </StyledContainer>
);

export default CommentItem;
