import { render, screen } from '@testing-library/react';

import Modal from './Modal';

const DEFAULT_PROPS = {
  children: 'I am the children',
  isOpen: true,
  onClose: jest.fn()
};

describe('Modal', () => {
  it('renders correctly', () => {
    render(<Modal {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.children)).toBeInTheDocument();
  });

  it('does not render the component', () => {
    const isOpen = false;

    render(<Modal {...DEFAULT_PROPS} isOpen={isOpen} />);

    expect(screen.queryByText(DEFAULT_PROPS.children)).not.toBeInTheDocument();
  });
});
