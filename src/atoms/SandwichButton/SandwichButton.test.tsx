import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SandwitchButton from './SandwichButton';

const DEFAULT_PROPS = {
  toggled: true,
  onToggle: jest.fn()
};

describe('SandwitchButton', () => {
  it('renders correctly', () => {
    render(<SandwitchButton {...DEFAULT_PROPS} />);

    expect(screen.getByTestId('sandwich-button')).toBeInTheDocument();
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();

    render(<SandwitchButton {...DEFAULT_PROPS} onToggle={onToggle} />);

    const sandwitchButton = screen.getByTestId('sandwich-button');

    userEvent.click(sandwitchButton);

    expect(onToggle).toHaveBeenCalled();

    userEvent.click(sandwitchButton);

    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledTimes(2);
  });

  it('applies the custom color', () => {
    const color = 'red';

    render(<SandwitchButton {...DEFAULT_PROPS} toggled={false} color={color} />);

    expect(screen.getByTestId('sandwich-button-bar')).toHaveStyle({ backgroundColor: color });
  });
});
