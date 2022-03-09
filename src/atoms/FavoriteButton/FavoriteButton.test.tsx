import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoriteButton } from './FavoriteButton';

const DEFAULT_PROPS = {
  onToggleFavorite: jest.fn()
};

describe('<FavoriteButton />', () => {
  it('calls onToggleFavorite', () => {
    const onToggleFavorite = jest.fn();
    
    render(<FavoriteButton {...DEFAULT_PROPS} onToggleFavorite={onToggleFavorite} />);

    userEvent.click(screen.getByTestId('favorite-button'));

    expect(onToggleFavorite).toHaveBeenCalledTimes(1);
  });
});
