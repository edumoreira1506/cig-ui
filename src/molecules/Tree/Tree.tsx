import { PoultryGenderEnum } from '@cig-platform/enums';
import { IPoultry } from '@cig-platform/types';
import { Container, TreeItemAddDad, TreeItemAddMom, TreeItemExpand } from './Tree.styles';
import React, { useMemo, VFC } from 'react';
import ReactFamilyTree from 'react-family-tree';
import { TreeItemContainer } from './Tree.styles';
import type { ExtNode } from 'relatives-tree/lib/types';
import { TreeCard } from 'atoms';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

export type TreeProps = {
  poultries: IPoultry[]
  rootId: string;
  onAddDad?: (poultryId: string) => void;
  onAddMom?: (poultryId: string) => void;
  onExpand?: (poultryId: string) => void;
}

type NodeFamiliar = {
  id: string;
  type: string;
}

type Node = {
  id: string;
  gender: any;
  parents: NodeFamiliar[];
  children: NodeFamiliar[];
  siblings: NodeFamiliar[];
  spouses: NodeFamiliar[];
}

const WIDTH = 150;
const HEIGHT = 150;

function getNodeStyle({ left, top }: Readonly<ExtNode>) {
  return {
    width: WIDTH,
    height: HEIGHT,
    transform: `translate(${left * (WIDTH / 2)}px, ${top * (HEIGHT / 2)}px)`,
  };
}

export const Tree: VFC<TreeProps> = ({ poultries, rootId, onAddDad, onAddMom, onExpand }: TreeProps) => {
  const nodes = useMemo<Node[]>(() => poultries.map((poultry) => {
    const parents = [];

    if (poultry.momId && poultries.some(p => p.id === poultry.momId)) {
      parents.push({
        id: poultry.momId,
        type: 'blood'
      });
    }

    if (poultry.dadId && poultries.some(p => p.id === poultry.dadId)) {
      parents.push({
        id: poultry.dadId,
        type: 'blood'
      });
    }

    const children = poultries.filter(p => p.momId === poultry.id || p.dadId === poultry.id).map(p => ({
      id:p.id,
      type: 'blood'
    }));

    const siblings = poultries.filter(p => ((p.momId === poultry.momId && p.momId) || (p.dadId === poultry.dadId && p.dadId)) && p.id !== poultry.id);

    const spouses = children.map(c => {
      const p = poultries.find(p => p.id === c.id);
      const spouseId = p?.momId === poultry.id ? p?.dadId : p?.momId;
      
      if (!spouseId) return undefined;

      const spouse = poultries.find(p => p.id === spouseId);

      if (!spouse) return undefined;

      return { type: 'married', id: spouse.id };
    }).filter(Boolean) as NodeFamiliar[];

    return {
      id: poultry.id,
      gender: poultry.gender === PoultryGenderEnum.Male ? 'male' : 'female',
      parents,
      spouses,
      children,
      siblings
    };
  }), [poultries]);

  return (
    <Container>
      <ReactFamilyTree
        nodes={nodes as any}
        rootId={rootId}
        width={WIDTH}
        height={HEIGHT}
        renderNode={(node) => {
          const poultry = poultries.find(p => p.id === node.id);

          if (!poultry) return null;

          const shouldRenderExpandButton = onExpand && Boolean(poultry.dadId || poultry.momId) && poultries.every(p => poultry.dadId ? p.id !== poultry.dadId : p.id !== poultry.momId);
          const shouldRenderAddDadButton = onAddDad && !poultry.dadId;
          const shouldRenderAddMomButton = onAddMom && !poultry.momId;

          return (
            <TreeItemContainer key={node.id} style={getNodeStyle(node)}>
              <div style={{ position: 'relative' }}>
                {shouldRenderAddDadButton && (
                  <TreeItemAddDad onClick={() => onAddDad(poultry.id)}>
                    + <BsGenderMale />
                  </TreeItemAddDad>
                )}

                {shouldRenderAddMomButton && (
                  <TreeItemAddMom onClick={() => onAddMom(poultry.id)}>
                    + <BsGenderFemale />
                  </TreeItemAddMom>
                )}

                {shouldRenderExpandButton && (
                  <TreeItemExpand onClick={() => onExpand(poultry.id)}>+</TreeItemExpand>
                )}

                <TreeCard {...poultry} />
              </div>
              

            </TreeItemContainer>
          );
        }}
      />
    </Container>
  );
};
