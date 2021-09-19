import { render, screen } from '@testing-library/react';

import RoundImage from './RoundImage';

const DEFAULT_PROPS = {
  src: 'https://via.placeholder.com/150'
};

describe('RoundImage', () => {
  it('renders correctly', () => {
    const alt = 'alt';

    render(<RoundImage {...DEFAULT_PROPS} alt={alt} />);

    expect(screen.getByAltText(alt)).toBeInTheDocument();
  });

  it('applies the border color style', () => {
    const borderColor = 'black';

    render(<RoundImage {...DEFAULT_PROPS} borderColor={borderColor} />);

    expect(screen.getByTestId('round-image-container')).toHaveStyle({ borderColor });
  });
});
