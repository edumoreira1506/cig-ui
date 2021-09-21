import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

const DEFAULT_PROPS = {
  value: 'value',
  onChange: jest.fn(),
};

describe('<Input />', () => {
  it('renders the label', () => {
    const label = 'i am the label';

    render(<Input {...DEFAULT_PROPS} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const inputTestId = 'test id';
    const value = '';
    const text = 'a';

    render(<Input {...DEFAULT_PROPS} value={value} onChange={onChange} inputTestId={inputTestId} />);

    userEvent.type(screen.getByTestId(inputTestId), text);

    expect(onChange).toHaveBeenCalledWith(text);
  });

  it('renders the loading', () => {
    render(<Input {...DEFAULT_PROPS} isLoading />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('applies the mask', () => {
    const unformatted = '11111111111';
    const formatted = '111.111.111-11';
    const mask = '###.###.###-##';

    render(<Input {...DEFAULT_PROPS} type="number" value={unformatted} mask={mask} />);

    expect(screen.getByDisplayValue(formatted)).toBeInTheDocument();
  });

  it('calls onBlur', () => {
    const onBlur = jest.fn();
    const value = 'value';
    const testId = 'test-id';

    render(<Input {...DEFAULT_PROPS} inputTestId={testId} onBlur={onBlur} value={value} />);

    userEvent.tab();

    expect(screen.getByTestId(testId)).toHaveFocus();

    userEvent.tab();

    expect(onBlur).toHaveBeenCalled();
  });

  it('shows the required error message', () => {
    const required = true;
    const requiredMessage = 'Error!';
    const value = '';

    render(<Input {...DEFAULT_PROPS} value={value} required={required} requiredMessage={requiredMessage} />);

    userEvent.tab();
    userEvent.tab();

    expect(screen.getByText(requiredMessage)).toBeInTheDocument();
  });

  it('hides the required error message', () => {
    const required = true;
    const requiredMessage = 'Error!';
    const value = '';

    const { rerender } = render(<Input {...DEFAULT_PROPS} value={value} required={required} requiredMessage={requiredMessage} />);

    userEvent.tab();
    userEvent.tab();

    expect(screen.getByText(requiredMessage)).toBeInTheDocument();

    rerender(<Input {...DEFAULT_PROPS} value="a" requiredMessage={requiredMessage} required={required} />);

    userEvent.tab();
    userEvent.tab();

    expect(screen.queryByText(requiredMessage)).not.toBeInTheDocument();
  });
});
