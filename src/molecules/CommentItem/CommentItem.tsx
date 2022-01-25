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
  StyledText,
  StyledAnswersList,
  StyledAnswerItem
} from './CommentItem.styles';

interface Comment {
  name: string;
  content: string;
  image: string;
  date: Date;
}

export interface CommentItemProps extends Comment {
  answers?: Comment[];
}

const CommentItem: VFC<CommentItemProps> = ({
  content,
  date,
  image,
  name,
  answers = []
}: CommentItemProps) => (
  <>
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

    {Boolean(answers.length) && (
      <StyledAnswersList>
        {answers.map(answer => (
          <StyledAnswerItem key={answer.content}>
            <CommentItem {...answer} />
          </StyledAnswerItem>
        ))}
      </StyledAnswersList>
    )}
  </>
);

export default CommentItem;
