import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('<Loading />', () => {
  it('renders correctly', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
