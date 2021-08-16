import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Test from './Test';

const DEFAULT_PROPS = {
  showText: true,
  onClick: jest.fn()
};

describe('Test', () => {
  const renderTest = (overrideProps = {}) => {
    const { getByText, queryByText } = render(<Test {...DEFAULT_PROPS} {...overrideProps} />);

    return { getByText, queryByText };
  };

  it('renders correctly', () => {
    const { getByText } = renderTest();

    expect(getByText('I am the test component!')).toBeInTheDocument();
    expect(getByText('Additional text!')).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const { getByText } = renderTest({ onClick });

    userEvent.click(getByText('I am the test component!'));

    expect(onClick).toHaveBeenCalled();
  });

  it('does not render additional text', () => {
    const showText = false;
    const { queryByText } = renderTest({ showText });

    expect(queryByText('Additional text!')).not.toBeInTheDocument();
  });
});
