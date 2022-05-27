import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('renders close button', () => {
    render(<Modal {...DEFAULT_PROPS} displayActions />);

    expect(screen.getByLabelText('Fechar')).toBeInTheDocument();
  });

  it('calls on close when click in close button', () => {
    const onClose = jest.fn();

    render(<Modal {...DEFAULT_PROPS} onClose={onClose} displayActions />);

    userEvent.click(screen.getByLabelText('Fechar'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
