import { render, screen } from '@testing-library/react';
import { Expand } from './Expand';

const DEFAULT_PROPS = {
  title: 'Title',
  children: 'Childrenzada'
};

describe('<Expand />', () => {
  it('renders correctly', () => {
    render(<Expand {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.children)).toBeInTheDocument();
  });
});
