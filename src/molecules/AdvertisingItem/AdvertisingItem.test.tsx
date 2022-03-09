import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AdvertisingItem } from './AdvertisingItem';

const DEFAULT_PROPS = {
  onViewAdvertising: jest.fn(),
  placeholderImage: 'placeholder-image.png',
  title: 'Nice title',
  price: 1500,
  description: 'Nice description',
  onViewBreeder: jest.fn()
};

describe('<AdvertisingItem />', () => {
  it('renders correctly', () => {
    render(<AdvertisingItem {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.description)).toBeInTheDocument();
  });

  it('calls onToggleFavorite', () => {
    const onToggleFavorite = jest.fn();

    render(<AdvertisingItem {...DEFAULT_PROPS} onToggleFavorite={onToggleFavorite} />);

    userEvent.click(screen.getByTestId('favorite-button'));

    expect(onToggleFavorite).toHaveBeenCalledTimes(1);
  });
});
