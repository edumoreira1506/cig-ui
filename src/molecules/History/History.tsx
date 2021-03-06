import { VFC, useMemo } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck, AiFillCheckCircle } from 'react-icons/ai';
import { IDealEvent } from '@cig-platform/types';
import { DealEventValueEnum } from '@cig-platform/enums';

import { Colors } from '../../constants';
import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';

import {
  StyledContainer,
  StyledItem,
  StyledItemDate,
  StyledItemIcon,
  StyledItemTexts,
  StyledItemTitle,
  StyledItemDescription,
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

  const colors = useMemo(() => {
    return {
      placed: placedEvent && !cancelledEvent ? Colors.DarkGreyBlue : Colors.LightGrey,
      confirmed: confirmedEvent && !cancelledEvent ? Colors.DarkGreyBlue : Colors.LightGrey,
      finished: finishedEvent && !cancelledEvent ? Colors.DarkGreyBlue : Colors.LightGrey,
    };
  }, [placedEvent, cancelledEvent, confirmedEvent, finishedEvent]);

  return (
    <StyledContainer>
      <StyledItem>
        <StyledItemDate>
          {placedEvent && placedEvent.createdAt.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })}
          {!placedEvent && (
            <>{cancelledEvent ? 'Cancelado' : 'Aguardando...'}</>
          )}
        </StyledItemDate>
        <StyledItemIcon color={colors.placed}>
          <AiOutlineArrowRight />
        </StyledItemIcon>
        <StyledItemTexts>
          <StyledItemTitle color={colors.placed}>Realizado</StyledItemTitle>

          {Boolean(placedEvent?.metadata?.value) && (
            <StyledItemDescription>
              Valor da proposta: <b>{centsToBrazilianFormat(placedEvent?.metadata?.value)}</b>

              {Boolean(placedEvent?.metadata?.description) && (
                <>
                  <br />
                  {placedEvent?.metadata.description}
                </>
              )}
            </StyledItemDescription>
          )}

          {Boolean(cancelledEvent?.metadata?.reason && !placedEvent) && (
            <StyledItemDescription>
              Motivo do cancelamento: <b>{cancelledEvent?.metadata.reason}</b>
            </StyledItemDescription>
          )}
        </StyledItemTexts>
      </StyledItem>

      <StyledItem>
        <StyledItemDate>
          {confirmedEvent && confirmedEvent.createdAt.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })}
          {!confirmedEvent && (
            <>{cancelledEvent ? 'Cancelado' : 'Aguardando...'}</>
          )}
        </StyledItemDate>
        <StyledItemIcon color={colors.confirmed}>
          <AiOutlineCheck />
        </StyledItemIcon>
        <StyledItemTexts>
          <StyledItemTitle color={colors.confirmed}>Confirmado</StyledItemTitle>

          {Boolean(cancelledEvent?.metadata?.reason && !confirmedEvent && placedEvent) && (
            <StyledItemDescription>
              Motivo do cancelamento: <b>{cancelledEvent?.metadata.reason}</b>
            </StyledItemDescription>
          )}
        </StyledItemTexts>
      </StyledItem>

      <StyledItem>
        <StyledItemDate>
          {finishedEvent && finishedEvent.createdAt.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })}
          {!finishedEvent && (
            <>{cancelledEvent ? 'Cancelado' : 'Aguardando...'}</>
          )}
        </StyledItemDate>
        <StyledItemIcon color={colors.finished}>
          <AiFillCheckCircle />
        </StyledItemIcon>
        <StyledItemTexts>
          <StyledItemTitle color={colors.finished}>Finalizado</StyledItemTitle>

          {Boolean(cancelledEvent?.metadata?.reason && !finishedEvent && confirmedEvent && placedEvent) && (
            <StyledItemDescription>
              Motivo do cancelamento: <b>{cancelledEvent?.metadata.reason}</b>
            </StyledItemDescription>
          )}
        </StyledItemTexts>
      </StyledItem>
    </StyledContainer>
  );
};
