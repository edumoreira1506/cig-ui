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
});
