import styled from 'styled-components';

import { Colors } from '../../constants';

export const StyledComment = styled.div`
  margin-bottom: 20px;
  border-top: solid 1px ${Colors.LightGrey};
  padding-top: 20px;
`;

export const StyledNewComment = styled.form``;

export const StyledEmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 15px 0;
`;
