import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const DEFAULT_PROPS = {
  onClick: jest.fn(),
  label: 'fake label'
};

describe('<Button />', () => {
  it('renders the label', () => {
    const label = 'label';

    render(<Button {...DEFAULT_PROPS} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const label = 'label';

    render(<Button {...DEFAULT_PROPS} label={label} onClick={onClick} />);

    userEvent.click(screen.getByText(label));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});