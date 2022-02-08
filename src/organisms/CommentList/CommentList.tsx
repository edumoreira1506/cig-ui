import { useCallback, useState, VFC } from 'react';

import CommentItem, { CommentItemProps } from '../../molecules/CommentItem/CommentItem';
import { TextField } from '../../molecules';
import { Button, FormField } from '../../atoms';

import { StyledComment, StyledNewComment, StyledEmptyState } from './CommentList.styles';

interface CommentListProps {
  comments?: CommentItemProps[];
  onComment?: (comment: string) => void;
  onAnswer?: (comment: string, commentId: string) => void;
  commentNameButton?: string;
}

const CommentList: VFC<CommentListProps> = ({
  comments = [],
  onComment,
  commentNameButton,
  onAnswer
}: CommentListProps) => {
  const [comment, setComment] = useState('');

  const handleChangeComment = useCallback((newValue: number | string) => setComment(newValue.toString()), []);

  const handleSubmitComment = useCallback((e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onComment?.(comment);
    setComment('');
  }, [comment, onComment]);

  return (
    <>
      {Boolean(!comments.length) && (
        <StyledEmptyState>
        Não há comentários
        </StyledEmptyState>
      )}

      {comments.map(comment => (
        <StyledComment key={comment.content}>
          <CommentItem
            {...comment}
            onAnswer={onAnswer ? answer => onAnswer(answer, comment?.identifier ?? '') : undefined}
            answerNameButton="Responder"
          />
        </StyledComment>
      ))}
  
      {Boolean(onComment && commentNameButton) && (
        <StyledNewComment onSubmit={handleSubmitComment}>
          <FormField>
            <TextField onChange={handleChangeComment} value={comment} />
          </FormField>
          <Button onClick={handleSubmitComment}>
            {commentNameButton}
          </Button>
        </StyledNewComment>
      )}
    </>
  );
};

export default CommentList;
