import * as React from 'react';

import { StyledContainer, StyledHeader, StyledTabTitle, StyledBody } from './Tabs.styles';

interface TabsProps {
  children: React.ReactNode[];
  tab?: number;
  setTab?: (newTab: number) => void;
}

export default function Tabs({ children, tab = 0, setTab = () => null }: TabsProps) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  
  const tabsProps = React.useMemo(() => React.Children.map(children, (child: any) => ({
    title: child?.props?.title ?? '',
    active: child?.props?.['data-active'] ?? true
  })), [children]);

  const selectedTabContent = React.useMemo(() => children[selectedTab], [children, selectedTab]);

  const widthPercentage = React.useMemo(() => 100 / (tabsProps?.length ?? 1), [tabsProps]);

  const handleSelectTab = React.useCallback((index: number) => {
    const isTabActive = tabsProps?.[index]?.active ?? false;

    if (!isTabActive) return;

    setSelectedTab(index);
  }, [tabsProps]);

  React.useEffect(() => {
    setSelectedTab(tab);
  }, [tab]);

  React.useEffect(() => {
    setTab(selectedTab);
  }, [selectedTab]);

  return (
    <StyledContainer>
      <StyledHeader>
        {tabsProps?.map((tabProp, index) => (
          <StyledTabTitle
            opened={index === selectedTab}
            width={widthPercentage}
            key={tabProp.title}
            onClick={() => handleSelectTab(index)}
          >
            {tabProp.title}
          </StyledTabTitle>
        ))}
      </StyledHeader>
      <StyledBody>
        {selectedTabContent}
      </StyledBody>
    </StyledContainer>
  );
}
