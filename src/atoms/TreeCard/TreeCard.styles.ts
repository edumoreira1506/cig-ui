import { Colors, DEFAULT_BORDER_RADIUS, MAIN_FONT } from '../../constants';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  background-color: ${Colors.LightGrey};
  width: 100px;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  padding: 10px;
  position: relative;
  font-family: ${MAIN_FONT};
`;

export const Name = styled.span`
  width: 100%;
  text-align: center;
`;

export const Infos = styled.span`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 10px;
  margin-top: 5px;
`;
