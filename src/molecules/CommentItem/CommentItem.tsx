import { useCallback, useState, VFC } from 'react';

import { Button, FormField, RoundImage } from '../../atoms';
import { Colors } from '../../constants/styles';
import { TextField } from '../../molecules';

import {
  StyledContainer,
  StyledContent,
  StyledDate,
  StyledHeader,
  StyledImage,
  StyledTexts,
  StyledText,
  StyledAnswersList,
  StyledAnswerItem,
  StyledNewAnswer,
  StyledExpandCommentButton
} from './CommentItem.styles';

interface Comment {
  name: string;
  content: string;
  image: string;
  date: Date;
  identifier?: string;
}

export interface CommentItemProps extends Comment {
  answers?: Comment[];
  onAnswer?: (answer: string) => void;
  answerNameButton?: string;
}

const CommentItem: VFC<CommentItemProps> = ({
  content,
  date,
  image,
  name,
  answers = [],
  onAnswer,
  answerNameButton
}: CommentItemProps) => {
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [answer, setAnswer] = useState('');

  const toggleShowAnswerForm = useCallback(() => setShowAnswerForm((prevShowAnswerForm) => !prevShowAnswerForm), []);

  const handleChangeAnswer = useCallback((newValue: number | string) => setAnswer(newValue.toString()), []);

  const handleSubmitAnswer = useCallback((e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onAnswer?.(answer);
    setAnswer('');
    setShowAnswerForm(false);
  }, [answer, onAnswer]);

  return (
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
  
      {Boolean(onAnswer && answerNameButton) && (
        <>
          <StyledExpandCommentButton>
            <Button onClick={toggleShowAnswerForm}>
              {showAnswerForm ? 'Cancelar' : 'Responder'}
            </Button>
          </StyledExpandCommentButton>
          {showAnswerForm && (
            <StyledNewAnswer onSubmit={handleSubmitAnswer}>
              <FormField>
                <TextField placeholder='Escrever resposta...' onChange={handleChangeAnswer} value={answer} />
              </FormField>
              <Button onClick={handleSubmitAnswer}>
                {answerNameButton}
              </Button>
            </StyledNewAnswer>
          )}
        </>
      )}
    </>
  );
};

export default CommentItem;
