import { VFC } from 'react';

import CommentItem, { CommentItemProps } from '../../molecules/CommentItem/CommentItem';

import { StyledComment } from './CommentList.styles';

interface CommentListProps {
  comments?: CommentItemProps[];
}

const CommentList: VFC<CommentListProps> = ({
  comments = []
}: CommentListProps) => (
  <>
    {comments.map(comment => (
      <StyledComment key={comment.content}>
        <CommentItem {...comment} />
      </StyledComment>
    ))}
  </>
);

export default CommentList;
