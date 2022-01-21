import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SquareLink from './SquareLink';

const DEFAULT_PROPS = {
  href: '',
  children: 'i am the children'
};

describe('<SquareLink />', () => {
  it('renders correctly', () => {
    render(<SquareLink {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.children)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();

    render(<SquareLink {...DEFAULT_PROPS} onClick={onClick} />);

    userEvent.click(screen.getByText(DEFAULT_PROPS.children));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
