import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ListModal from './ListModal';

const DEFAULT_PROPS = {
  onClose: jest.fn(),
  isOpen: true
};

describe('<ListModal />', () => {
  it('renders all items', () => {
    const items = [
      {
        label: 'Label 1!',
        onClick: jest.fn()
      },
      {
        label: 'Label 2!',
        onClick: jest.fn()
      }
    ];

    render(<ListModal {...DEFAULT_PROPS} items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('calls onClick handlers', () => {
    const items = [
      {
        label: 'Label 1!',
        onClick: jest.fn()
      },
      {
        label: 'Label 2!',
        onClick: jest.fn()
      }
    ];

    render(<ListModal {...DEFAULT_PROPS} items={items} />);

    items.forEach((item) => {
      userEvent.click(screen.getByText(item.label));

      expect(item.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
