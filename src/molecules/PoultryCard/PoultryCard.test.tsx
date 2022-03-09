import { render, screen } from '@testing-library/react';

import { PoultryCard } from './PoultryCard';

const DEFAULT_PROPS = {
  title: 'Card title',
  price: 150000,
  subtitle:'Card subtitle',
  description: 'Card description'
};

describe('<PoultryCard />', () => {
  it('renders correctly', () => {
    render(<PoultryCard {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.subtitle)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.description)).toBeInTheDocument();
    expect(screen.getByAltText(DEFAULT_PROPS.title)).toBeInTheDocument();
  });
});
