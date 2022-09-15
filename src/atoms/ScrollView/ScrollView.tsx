import { FC } from 'react';

import { Container } from './ScrollView.styles';

export type ScrollViewProps = {
  onScroll?: (e: any) => void;
};

export const ScrollView: FC<ScrollViewProps> = ({ children, onScroll }) => (
  <Container onScroll={onScroll}>{children}</Container>
);
