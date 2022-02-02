import { useCallback, VFC } from 'react';
import { IAdvertising, IBreeder, IPoultry } from '@cig-platform/types';

import { Colors } from '../../constants';
import { Button } from '../../atoms';

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
  onViewDeal: (advertisingId: string) => void;
}

const statusColors = {
  IN_PROGRESS: Colors.LightGrey,
  FINISHED: Colors.DarkBlue,
  CANCELLED: Colors.LightRed
};

const statusTitle = {
  IN_PROGRESS: 'Em andamento',
  FINISHED: 'Concluído',
  CANCELLED: 'Cancelado'
};

export const DealInfo: VFC<DealInfoProps> = ({
  date,
  image,
  status,
  poultry,
  advertising,
  breeder,
  onViewDeal
}: DealInfoProps) => {
  const handleViewDeal = useCallback(() => {
    onViewDeal(advertising.id);
  }, [onViewDeal, advertising?.id]);

  return (
    <StyledContainer>
      <StyledHeader>{date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</StyledHeader>
      <StyledBody>
        <StyledImage>
          <img src={image ?? 'https://farmhousepoultry.ca/wp-content/uploads/2016/03/Product_ImageComingSoon_592x592-380x400.jpg'} alt={poultry.name} />
        </StyledImage>
        <StyledTextsContent>
          <StyledStatus color={statusColors[status]}>
            {statusTitle[status]}
          </StyledStatus>
          <StyledInfo>{poultry?.name}</StyledInfo>
          <StyledInfo>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(advertising.price / 100)}</StyledInfo>
          <StyledInfo>Negociação com {breeder.name}</StyledInfo>
        </StyledTextsContent>
        <StyledButtons>
          <Button onClick={handleViewDeal}>
            Visualizar
          </Button>
        </StyledButtons>
      </StyledBody>
    </StyledContainer>
  );
};
