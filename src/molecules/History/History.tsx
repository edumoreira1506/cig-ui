import { VFC, useMemo } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck, AiFillCheckCircle } from 'react-icons/ai';
import { IDealEvent } from '@cig-platform/types';
import { DealEventValueEnum } from '@cig-platform/enums';

import {
  StyledContainer,
  StyledItem,
  StyledItemDate,
  StyledItemIcon,
  StyledItemTexts,
  StyledItemTitle,
} from './History.styles';

type HistoryProps = {
  events: IDealEvent[];
}

export const History: VFC<HistoryProps> = ({
  events
}: HistoryProps) => {
  const placedEvent = useMemo(() => events.find(event => event.value === DealEventValueEnum.placed), [events]);
  const cancelledEvent = useMemo(() => events.find(event => event.value === DealEventValueEnum.cancelled), [events]);
  const confirmedEvent = useMemo(() => events.find(event => event.value === DealEventValueEnum.confirmed), [events]);
  const finishedEvent = useMemo(() => events.find(event => event.value === DealEventValueEnum.received), [events]);

  return (
    <StyledContainer>
      <StyledItem>
        <StyledItemDate>
          {placedEvent && placedEvent.createdAt.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          {!placedEvent && (
            <>{cancelledEvent ? 'Cancelado' : 'Aguardando...'}</>
          )}
        </StyledItemDate>
        <StyledItemIcon>
          <AiOutlineArrowRight />
        </StyledItemIcon>
        <StyledItemTexts>
          <StyledItemTitle>Realizado</StyledItemTitle>
        </StyledItemTexts>
      </StyledItem>

      <StyledItem>
        <StyledItemDate>
          {confirmedEvent && confirmedEvent.createdAt.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          {!confirmedEvent && (
            <>{cancelledEvent ? 'Cancelado' : 'Aguardando...'}</>
          )}
        </StyledItemDate>
        <StyledItemIcon>
          <AiOutlineCheck />
        </StyledItemIcon>
        <StyledItemTexts>
          <StyledItemTitle>Confirmado</StyledItemTitle>
        </StyledItemTexts>
      </StyledItem>

      <StyledItem>
        <StyledItemDate>
          {finishedEvent && finishedEvent.createdAt.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          {!finishedEvent && (
            <>{cancelledEvent ? 'Cancelado' : 'Aguardando...'}</>
          )}
        </StyledItemDate>
        <StyledItemIcon>
          <AiFillCheckCircle />
        </StyledItemIcon>
        <StyledItemTexts>
          <StyledItemTitle>Finalizado</StyledItemTitle>
        </StyledItemTexts>
      </StyledItem>
    </StyledContainer>
  );
};
