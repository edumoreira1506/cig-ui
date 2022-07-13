import styled from 'styled-components';

import { Colors } from '../../constants';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledStar = styled.i`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid ${({ filled }: { filled?: boolean }) => filled ? Colors.Yellow : Colors.LigherGrey};
  border-left:   .3em solid transparent;
  font-size: 24px;

  &:before, &:after {
    content: '';
    
    display: block;
    width: 0;
    height: 0;
    
    position: absolute;
    top: .6em;
    left: -1em;
  
    border-right:  1em solid transparent;
    border-bottom: .7em  solid ${({ filled }: { filled?: boolean }) => filled ? Colors.Yellow : Colors.LigherGrey};
    border-left:   1em solid transparent;
  
    transform: rotate(-35deg);
  }
  
  &:after {  
    transform: rotate(35deg);
  }
`;
