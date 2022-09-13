import { FC } from 'react';

import { Container } from './ScrollView.styles';

export const ScrollView: FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);
