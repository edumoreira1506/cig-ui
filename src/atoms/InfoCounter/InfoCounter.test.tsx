import { render, screen } from '@testing-library/react';

import { InfoCounter } from './InfoCounter';

const DEFAULT_PROPS = {
  icon: <h1>Icon</h1>,
  amount: 10,
  description: 'Description',
};

describe('<InfoCounter />', () => {
  it('renders the amount', () => {
    render(<InfoCounter {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.amount)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<InfoCounter {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.description)).toBeInTheDocument();
  });


  it('renders the icon', () => {
    const iconText = 'Icon text';

    render(<InfoCounter {...DEFAULT_PROPS} icon={<h1>{iconText}</h1>} />);

    expect(screen.getByText(iconText)).toBeInTheDocument();
  });
});
