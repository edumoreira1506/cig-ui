import React, { VFC, ReactNode, useState, useCallback, useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import {
  StyledContainer,
  StyledContent,
  StyledHeader,
  StyledIcon,
  StyledTitle
} from './Expand.styles';

export type ExpandProps = {
  children: ReactNode | ReactNode[];
  title: string;
  expand?: boolean;
}

export const Expand: VFC<ExpandProps> = ({
  children,
  title,
  expand
}: ExpandProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleIsExpanded = useCallback(() =>
    setIsExpanded(prevIsExpanded => !prevIsExpanded)
  , []);

  useEffect(() => {
    if (typeof expand === 'boolean' && expand !== isExpanded) {
      setIsExpanded(expand);
    }
  }, [expand, isExpanded]);

  return (
    <StyledContainer>
      <StyledHeader onClick={handleToggleIsExpanded}>
        <StyledTitle>{title}</StyledTitle>
        <StyledIcon isOpen={isExpanded}>
          <AiOutlineDown />
        </StyledIcon>
      </StyledHeader>
      <StyledContent isOpen={isExpanded}>
        {children}
      </StyledContent>
    </StyledContainer>
  );
};
