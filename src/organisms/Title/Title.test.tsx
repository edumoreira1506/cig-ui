import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('<Title />', () => {
  it('renders the text', () => {
    const text = 'text';

    render(<Title text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
