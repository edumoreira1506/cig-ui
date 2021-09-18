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
});
