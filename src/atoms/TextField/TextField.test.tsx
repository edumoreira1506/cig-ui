import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from './TextField';

const DEFAULT_PROPS = {
  value: 'value',
  onChange: jest.fn(),
};

describe('<TextField />', () => {
  it('renders the label', () => {
    const label = 'i am the label';

    render(<TextField {...DEFAULT_PROPS} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const textFieldTestId = 'test id';
    const value = '';
    const text = 'a';

    render(<TextField {...DEFAULT_PROPS} value={value} onChange={onChange} inputTestId={textFieldTestId} />);

    userEvent.type(screen.getByTestId(textFieldTestId), text);

    expect(onChange).toHaveBeenCalledWith(text);
  });
});
