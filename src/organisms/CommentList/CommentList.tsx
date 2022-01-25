import { useCallback, useState, VFC } from 'react';

import CommentItem, { CommentItemProps } from '../../molecules/CommentItem/CommentItem';
import { TextField } from '../../molecules';
import { Button, FormField } from '../../atoms';

import { StyledComment, StyledNewComment } from './CommentList.styles';

interface CommentListProps {
  comments?: CommentItemProps[];
  onComment?: (comment: string) => void;
  commentNameButton?: string;
}

const CommentList: VFC<CommentListProps> = ({
  comments = [],
  onComment,
  commentNameButton
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
      {comments.map(comment => (
        <StyledComment key={comment.content}>
          <CommentItem {...comment} />
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
