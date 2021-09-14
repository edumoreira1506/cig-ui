import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('<Label />', () => {
  it('renders the text', () => {
    const text = 'text';

    render(<Label text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
