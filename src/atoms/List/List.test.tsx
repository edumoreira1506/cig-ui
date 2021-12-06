import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from './List';

const DEFAULT_PROPS = {
  items: [],
  onItemClick: jest.fn()
};

describe('<List />', () => {
  it('renders the items', () => {
    const items = ['text', 'text 2', 'text 3'];

    render(<List {...DEFAULT_PROPS} items={items} />);

    items.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('calls onItemClick', () => {
    const items = ['item 1', 'item 2'];
    const onItemClick = jest.fn();

    render(<List {...DEFAULT_PROPS} items={items} onItemClick={onItemClick} />);

    items.forEach(item => {
      userEvent.click(screen.getByText(item));
    });

    expect(onItemClick).toHaveBeenCalledTimes(items.length);
  });
});
