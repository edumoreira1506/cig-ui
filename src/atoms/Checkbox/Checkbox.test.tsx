import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

const DEFAULT_PROPS = {
  checked: false,
  onToggle: jest.fn()
};

describe('<Checkbox />', () => {
  it('renders correctly', () => {
    const label = 'label';

    render(<Checkbox {...DEFAULT_PROPS} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls onToggle', () => {
    const onTogle = jest.fn();

    render(<Checkbox {...DEFAULT_PROPS} onToggle={onTogle} />);

    userEvent.click(screen.getByRole('checkbox'));

    expect(onTogle).toHaveBeenCalledTimes(1);
  });

  it('checkes value', () => {
    render(<Checkbox {...DEFAULT_PROPS} checked />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
