import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sidebar from './Sidebar';

const DEFAULT_PROPS = {
  items: [],
  onClick: jest.fn(),
};

describe('Sidebar', () => {
  it('render all items', () => {
    const items = [
      {
        title: 'Example',
        icon: 'Icon'
      }
    ];

    render(<Sidebar {...DEFAULT_PROPS} items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const items = [
      {
        title: 'Example',
        icon: 'Icon'
      },
      {
        title: 'Example 2',
        icon: 'Icon 2'
      }
    ];

    render(<Sidebar {...DEFAULT_PROPS} items={items} onClick={onClick} />);

    const [firstItem, secondItem] = items;

    userEvent.click(screen.getByText(firstItem.title));

    expect(onClick).toHaveBeenCalledWith(firstItem.title);

    userEvent.click(screen.getByText(secondItem.title));

    expect(onClick).toHaveBeenCalledWith(secondItem.title);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
