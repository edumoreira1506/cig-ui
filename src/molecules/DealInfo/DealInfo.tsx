import { useCallback, VFC } from 'react';
import { IAdvertising, IBreeder, IPoultry } from '@cig-platform/types';

import { Colors, POULTRY_FALLBACK_IMAGE } from '../../constants';
import { Button } from '../../atoms';
import centsToBrazilianFormat from '../../utils/centsToBrazilianFormat';

import { 
  StyledBody,
  StyledButtons,
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledInfo,
  StyledStatus,
  StyledTextsContent
} from './DealInfo.styles';

export type DealInfoProps = {
  date: Date;
  image?: string;
  status: 'IN_PROGRESS' | 'FINISHED' | 'CANCELLED';
  poultry: IPoultry;
  advertising: IAdvertising;
  breeder: IBreeder;
  onViewDeal?: (advertisingId: string) => void;
}

const statusColors = {
  IN_PROGRESS: Colors.LightBlue,
  FINISHED: Colors.SuccessGreen,
  CANCELLED: Colors.LightRed
};

const statusTitle = {
  IN_PROGRESS: 'Em andamento',
  FINISHED: 'Concluído',
  CANCELLED: 'Cancelado'
};

export const DealInfo: VFC<DealInfoProps> = ({
  date,
  image = POULTRY_FALLBACK_IMAGE,
  status,
  poultry,
  advertising,
  breeder,
  onViewDeal
}: DealInfoProps) => {
  const handleViewDeal = useCallback(() => {
    onViewDeal?.(advertising.id);
  }, [onViewDeal, advertising?.id]);

  return (
    <StyledContainer>
      <StyledHeader>{date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</StyledHeader>

      <StyledBody>
        <StyledImage>
          <img src={image} alt={poultry.name} />
        </StyledImage>

        <StyledTextsContent>
          <StyledStatus color={statusColors[status]}>
            {statusTitle[status]}
          </StyledStatus>
          <StyledInfo>{poultry?.name}</StyledInfo>
          <StyledInfo>{centsToBrazilianFormat(advertising.price)}</StyledInfo>
          <StyledInfo>Negociação com {breeder.name}</StyledInfo>
        </StyledTextsContent>

        {onViewDeal && (
          <StyledButtons>
            <Button onClick={handleViewDeal}>
            Visualizar
            </Button>
          </StyledButtons>
        )}
      </StyledBody>
    </StyledContainer>
  );
};
