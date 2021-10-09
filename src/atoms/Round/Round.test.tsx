import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Round from './Round';

const DEFAULT_PROPS = {
  children: 'I am the children!',
};

describe('Round', () => {
  it('renders the children', () => {
    render(<Round {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.children)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();

    render(<Round {...DEFAULT_PROPS} onClick={onClick} />);

    userEvent.click(screen.getByText(DEFAULT_PROPS.children));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies the background color', () => {
    const backgroundColor = 'red';

    render(<Round {...DEFAULT_PROPS} backgroundColor={backgroundColor} />);

    expect(screen.getByTestId('round')).toHaveStyle({ backgroundColor });
  });
});
