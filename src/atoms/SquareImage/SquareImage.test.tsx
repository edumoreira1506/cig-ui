import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SquareImage from './SquareImage';

const DEFAULT_PROPS = {
  src: '',
};

describe('SquareImage', () => {
  it('renders correctly', () => {
    const alt = 'alt text';

    render(<SquareImage {...DEFAULT_PROPS} alt={alt} />);

    expect(screen.getByAltText(alt)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const alt = 'alt text';

    render(<SquareImage {...DEFAULT_PROPS} onClick={onClick} alt={alt} />);

    userEvent.click(screen.getByAltText(alt));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
