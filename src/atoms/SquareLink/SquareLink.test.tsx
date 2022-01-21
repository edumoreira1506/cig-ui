import { render, screen } from '@testing-library/react';

import SquareLink from './SquareLink';

const DEFAULT_PROPS = {
  href: '',
  children: 'i am the children'
};

describe('<SquareLink />', () => {
  it('renders correctly', () => {
    render(<SquareLink {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.children)).toBeInTheDocument();
  });
});
