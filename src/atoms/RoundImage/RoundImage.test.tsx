import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('applies the border width style', () => {
    const borderWidth = 1;

    render(<RoundImage {...DEFAULT_PROPS} borderWidth={borderWidth} />);

    expect(screen.getByTestId('round-image-container')).toHaveStyle({ borderWidth });
  });

  it('calls onClick', () => {
    const alt = 'alt';
    const onClick = jest.fn();

    render(<RoundImage {...DEFAULT_PROPS} alt={alt} onClick={onClick} />);

    userEvent.click(screen.getByAltText(alt));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
