import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from './List';

const DEFAULT_PROPS = {
  items: [],
  onItemClick: jest.fn()
};

describe('<List />', () => {
  it('renders the items', () => {
    const items = [
      {
        content: 'text',
        key: 'text',
      },
      {
        content: 'text 2',
        key: 'text 2'
      },
      {
        content: 'text 3',
        key: 'text 3'
      }
    ];

    render(<List {...DEFAULT_PROPS} items={items} />);

    items.forEach(item => {
      expect(screen.getByText(item.content)).toBeInTheDocument();
    });
  });

  it('calls onItemClick', () => {
    const items = [
      {
        content: 'item 1',
        key: 'item 1'
      },
      {
        content: 'item 2',
        key: 'item 2'
      }
    ];
    const onItemClick = jest.fn();

    render(<List {...DEFAULT_PROPS} items={items} onItemClick={onItemClick} />);

    items.forEach(item => {
      userEvent.click(screen.getByText(item.content));
    });

    expect(onItemClick).toHaveBeenCalledTimes(items.length);
  });
});
