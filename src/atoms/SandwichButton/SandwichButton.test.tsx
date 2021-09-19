import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SandwitchButton from './SandwichButton';

describe('SandwitchButton', () => {
  it('renders correctly', () => {
    render(<SandwitchButton />);

    expect(screen.getByTestId('sandwich-button')).toBeInTheDocument();
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();

    render(<SandwitchButton onToggle={onToggle} />);

    const sandwitchButton = screen.getByTestId('sandwich-button');

    userEvent.click(sandwitchButton);

    expect(onToggle).toHaveBeenLastCalledWith(true);

    userEvent.click(sandwitchButton);

    expect(onToggle).toHaveBeenLastCalledWith(false);
    expect(onToggle).toHaveBeenCalledTimes(2);
  });

  it('applies the custom color', () => {
    const color = 'red';

    render(<SandwitchButton color={color} />);

    expect(screen.getByTestId('sandwich-button-bar')).toHaveStyle({ backgroundColor: color });
  });
});
