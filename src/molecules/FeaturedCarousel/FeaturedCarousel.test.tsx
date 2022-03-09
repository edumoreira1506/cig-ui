import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FeaturedCarousel } from './FeaturedCarousel';

const DEFAULT_PROPS = {
  placeholderImage: '',
  items: [],
  onSeeMore: jest.fn()
};

describe('<FeaturedCarousel />', () => {
  it('renders correctly', () => {
    render(<FeaturedCarousel {...DEFAULT_PROPS} />);

    expect(screen.getByText('Em destaque')).toBeInTheDocument();
  });

  it('renders items', () => {
    const firstItem = {
      title: 'First title',
      price: 1500,
      identifier: 'identifier-1',
    };
    const secondItem = {
      title: 'Second title',
      price: 1500,
      identifier: 'identifier-1',
    };

    render(<FeaturedCarousel {...DEFAULT_PROPS} items={[firstItem, secondItem]} />);

    expect(screen.getByText(firstItem.title)).toBeInTheDocument();
    expect(screen.getByText(secondItem.title)).toBeInTheDocument();
  });

  it('calls onFavorite', () => {
    const item = {
      title: 'First title',
      price: 1500,
      identifier: 'identifier-1',
    };
    const onFavorite = jest.fn();

    render(<FeaturedCarousel {...DEFAULT_PROPS} items={[item]} onFavorite={onFavorite} />);

    userEvent.click(screen.getByTestId('favorite-button'));

    expect(onFavorite).toHaveBeenCalledWith(item.identifier);
  });

  it('calls onSeeMore', () => {
    const item = {
      title: 'First title',
      price: 1500,
      identifier: 'identifier-1',
    };
    const onSeeMore = jest.fn();

    render(<FeaturedCarousel {...DEFAULT_PROPS} items={[item]} onSeeMore={onSeeMore} />);

    userEvent.click(screen.getByText('Saiba Mais'));

    expect(onSeeMore).toHaveBeenCalledWith(item.identifier);
  });
});
