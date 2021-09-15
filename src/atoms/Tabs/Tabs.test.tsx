import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tabs from './Tabs';

describe('<Tabs />', () => {
  it('renders all tab titles', () => {
    const tabTitles = ['First title', 'Second title', 'Third title'];

    render(
      <Tabs>
        {tabTitles.map(tab => (
          <h1 key={tab} title={tab}>Tab Content</h1>
        ))}
      </Tabs>
    );

    tabTitles.forEach(tabTitle => {
      expect(screen.getByText(tabTitle)).toBeInTheDocument();
    });
  });

  it('can switch between the tabs', () => {
    const tabTitles = ['First title', 'Second title', 'Third title'];

    render(
      <Tabs>
        {tabTitles.map((tab, index) => (
          <h1 key={tab} title={tab}>{`Tab ${index}`}</h1>
        ))}
      </Tabs>
    );

    expect(screen.getByText('Tab 0')).toBeInTheDocument();
    expect(screen.queryByText('Tab 1')).not.toBeInTheDocument();

    userEvent.click(screen.getByText(tabTitles[1]));

    expect(screen.queryByText('Tab 0')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
  });

  it('switch the tab when change tab value', () => {
    const tabTitles = ['First title', 'Second title'];

    const { rerender } = render(
      <Tabs>
        {tabTitles.map((tab, index) => (
          <h1 key={tab} title={tab}>{`Tab ${index}`}</h1>
        ))}
      </Tabs>
    );

    expect(screen.getByText('Tab 0')).toBeInTheDocument();
    expect(screen.queryByText('Tab 1')).not.toBeInTheDocument();

    rerender(
      <Tabs tab={1}>
        {tabTitles.map((tab, index) => (
          <h1 key={tab} title={tab}>{`Tab ${index}`}</h1>
        ))}
      </Tabs>
    );

    expect(screen.queryByText('Tab 0')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
  });

  it('calls setTab when switch the tab of the component', () => {
    const setTab = jest.fn();
    const tabTitles = ['First title', 'Second title', 'Third title'];

    render(
      <Tabs setTab={setTab}>
        {tabTitles.map((tab, index) => (
          <h1 key={tab} title={tab}>{`Tab ${index}`}</h1>
        ))}
      </Tabs>
    );

    userEvent.click(screen.getByText(tabTitles[1]));
    userEvent.click(screen.getByText(tabTitles[2]));
    userEvent.click(screen.getByText(tabTitles[0]));

    expect(setTab).toHaveBeenCalledTimes(4);
    expect(setTab).toHaveBeenCalledWith(0);
    expect(setTab).toHaveBeenCalledWith(1);
    expect(setTab).toHaveBeenCalledWith(2);
  });

  it('does not change the tab when the tab is not active', () => {
    const firstTab = { title: 'First title', content: 'First content' };
    const secondTab = { title: 'Second title', content: 'Second content' };

    render(
      <Tabs>
        <div title={firstTab.title}>
          {firstTab.content}
        </div>
        <div title={secondTab.title} data-active={false}>
          {secondTab.content}
        </div>
      </Tabs>
    );

    expect(screen.getByText(firstTab.content)).toBeInTheDocument();
    expect(screen.queryByText(secondTab.content)).not.toBeInTheDocument();

    userEvent.click(screen.getByText(secondTab.title));

    expect(screen.getByText(firstTab.content)).toBeInTheDocument();
    expect(screen.queryByText(secondTab.content)).not.toBeInTheDocument();
  });
});
