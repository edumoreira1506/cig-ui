import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AdvertisingCarousel } from './AdvertisingCarousel';

const DEFAULT_PROPS = {
  title: 'Title master',
  onViewAll: jest.fn(),
  advertisings: [],
  placeholderImage: 'placeholder-image.png',
  onViewAdvertising: jest.fn(),
  onViewBreeder: jest.fn(),
};

describe('<AdvertisingCarousel />', () => {
  it('renders correctly', () => {
    render(<AdvertisingCarousel {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.title)).toBeInTheDocument();
    expect(screen.getByText('Ver tudo')).toBeInTheDocument();
  });

  it('callls onViewAll', () => {
    const onViewAll = jest.fn();

    render(<AdvertisingCarousel {...DEFAULT_PROPS} onViewAll={onViewAll} />);

    userEvent.click(screen.getByText('Ver tudo'));

    expect(onViewAll).toHaveBeenCalledTimes(1);
  });

  it('renders advertisings', () => {
    const firstAdvertising = {
      price: 15000,
      description: 'Description nice',
      breederImage: 'breeder-image.png',
      image: 'poultry-image.png',
      identifier: 'identifier-1'
    };
    const secondAdvertising = {
      price: 15000,
      description: 'Description niceee',
      breederImage: 'breeder-image-2.png',
      image: 'poultry-image-2.png',
      identifier: 'identifier-2'
    };

    render(<AdvertisingCarousel {...DEFAULT_PROPS} advertisings={[firstAdvertising, secondAdvertising]} />);

    expect(screen.getByText(firstAdvertising.description)).toBeInTheDocument();
    expect(screen.getByText(secondAdvertising.description)).toBeInTheDocument();
  });

  it('calls onViewAdvertising', () => {
    const advertising = {
      price: 15000,
      description: 'Description nice',
      breederImage: 'breeder-image.png',
      image: 'poultry-image.png',
      identifier: 'identifier-1'
    };
    const onViewAdvertising = jest.fn();

    render(<AdvertisingCarousel {...DEFAULT_PROPS} advertisings={[advertising]} onViewAdvertising={onViewAdvertising} />);

    userEvent.click(screen.getByText(advertising.description));

    expect(onViewAdvertising).toHaveBeenCalledWith(advertising.identifier);
  });

  it('calls onFavorite', () => {
    const advertising = {
      price: 15000,
      description: 'Description nice',
      breederImage: 'breeder-image.png',
      image: 'poultry-image.png',
      identifier: 'identifier-1'
    };
    const onFavorite = jest.fn();

    render(<AdvertisingCarousel {...DEFAULT_PROPS} advertisings={[advertising]} onFavorite={onFavorite} />);

    userEvent.click(screen.getByTestId('favorite-button'));

    expect(onFavorite).toHaveBeenCalledWith(advertising.identifier);
  });
  
  it('does not render favorite button', () => {
    const advertising = {
      price: 15000,
      description: 'Description nice',
      breederImage: 'breeder-image.png',
      image: 'poultry-image.png',
      identifier: 'identifier-1'
    };

    render(<AdvertisingCarousel {...DEFAULT_PROPS} advertisings={[advertising]} />);

    expect(screen.queryByTestId('favorite-button')).not.toBeInTheDocument();
  });
});
