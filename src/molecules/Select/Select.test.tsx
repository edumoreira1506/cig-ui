import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';

const DEFAULT_PROPS = {
  value: 'value',
  onChange: jest.fn(),
};

describe('<Select />', () => {
  it('renders the label', () => {
    const label = 'i am the label';

    render(<Select {...DEFAULT_PROPS} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders the empty option', () => {
    const emptyOptionText = 'empty option';
    const showEmptyOption = true;

    render(<Select {...DEFAULT_PROPS} showEmptyOption={showEmptyOption} emptyOptionText={emptyOptionText} />);

    expect(screen.getByText(emptyOptionText)).toBeInTheDocument();
  });

  it('renders all options labels', () => {
    const options = Array(10).fill(undefined).map((_, index) => ({
      label: `Label ${index}`,
      value: `Value ${index}`
    }));

    render(<Select {...DEFAULT_PROPS} options={options} />);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const options = Array(10).fill(undefined).map((_, index) => ({
      label: `Label ${index}`,
      value: `Value ${index}`
    }));
    const testId = 'test';

    render(<Select {...DEFAULT_PROPS} inputTestId={testId} options={options} onChange={onChange} />);

    userEvent.selectOptions(screen.getByTestId(testId), [options[1].value]);

    expect(onChange).toHaveBeenCalledWith(options[1].value);
  });
});
