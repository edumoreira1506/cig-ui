import { render, screen } from '@testing-library/react';

import Subtitle from './Subtitle';

describe('<Subtitle />', () => {
  it('renders the text', () => {
    const text = 'text';

    render(<Subtitle text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
