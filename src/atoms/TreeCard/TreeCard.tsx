import { IPoultry } from '@cig-platform/types';
import { VFC } from 'react';
import { Container, Infos, Name } from './TreeCard.styles';

export type TreeCardProps = IPoultry

export const TreeCard: VFC<TreeCardProps> = ({ name, gender, tail, dewlap, crest }:TreeCardProps) => (
  <Container>
    <Name>{name}</Name>
    <span>{gender}</span>

    {Boolean(dewlap || crest || tail) && (
      <Infos>
        <span>{dewlap}</span>
        <span>{crest}</span>
        <span>{tail}</span>
      </Infos>
    )}
  </Container>
);
