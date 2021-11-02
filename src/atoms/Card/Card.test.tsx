import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from './Card';

const DEFAULT_PROPS = {
  description: 'I am the description',
  date: new Date(),
};

describe('Card', () => {
  it('renders the description', () => {
    render(<Card {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.description)).toBeInTheDocument();
  });

  it('renders the date', () => {
    const dateFields = {
      year: 2021,
      month: 10,
      day: 15
    };
    const date = new Date(dateFields.year, dateFields.month, dateFields.day);

    render(<Card {...DEFAULT_PROPS} date={date} />);

    expect(screen.getByText(`${dateFields.day}/${dateFields.month + 1}/${dateFields.year}`)).toBeInTheDocument();
  });

  it('renders the icon', () => {
    const testId = 'example-test-id';
    const Icon = () => <span data-testid={testId} />;

    render(<Card {...DEFAULT_PROPS} icon={<Icon />} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('renders the cta', () => {
    const ctaText = 'Cta text!';
    const onClick = jest.fn();

    render(<Card {...DEFAULT_PROPS} onClick={onClick} ctaText={ctaText} />);

    expect(screen.getByText(ctaText)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const ctaText = 'Cta text!';
    const onClick = jest.fn();

    render(<Card {...DEFAULT_PROPS} onClick={onClick} ctaText={ctaText} />);

    userEvent.click(screen.getByText(ctaText));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
