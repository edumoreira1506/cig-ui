import * as React from 'react';

import { StyledContainer, StyledHeader, StyledTabTitle, StyledBody } from './Tabs.styles';

interface TabsProps {
  children: React.ReactNode[];
}

export default function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  
  const tabsTitles = React.useMemo(() => React.Children.map(children, (child: any) => child?.props?.title ?? ''), [children]);

  const selectedTabContent = React.useMemo(() => children[selectedTab], [children, selectedTab]);

  const widthPercentage = React.useMemo(() => 100 / (tabsTitles?.length ?? 1), [tabsTitles]);

  return (
    <StyledContainer>
      <StyledHeader>
        {tabsTitles?.map((title, index) => (
          <StyledTabTitle opened={index === selectedTab} width={widthPercentage} key={title} onClick={() => setSelectedTab(index)}>{title}</StyledTabTitle>
        ))}
      </StyledHeader>
      <StyledBody>
        {selectedTabContent}
      </StyledBody>
    </StyledContainer>
  );
}
