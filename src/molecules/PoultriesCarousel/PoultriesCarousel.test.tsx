import { render, screen } from '@testing-library/react';
import { poultryFactory } from '@cig-platform/factories';

import PoultriesCarousel from './PoultriesCarousel';
import userEvent from '@testing-library/user-event';

const DEFAULT_PROPS = {
  onClickImage: jest.fn(),
  poultries: [],
  fallbackImage: 'fallback-image.png'
};

describe('<PoultriesCarousel />', () => {
  it('renders correctly', () => {
    const firstPoultry = poultryFactory();
    const secondPoultry = poultryFactory();
    const poultries = [firstPoultry, secondPoultry];

    render(<PoultriesCarousel {...DEFAULT_PROPS} poultries={poultries} />);

    expect(screen.getByText(firstPoultry.name)).toBeInTheDocument();
    expect(screen.getByText(secondPoultry.name)).toBeInTheDocument();
    expect(screen.getByAltText(firstPoultry.name)).toBeInTheDocument();
    expect(screen.getByAltText(secondPoultry.name)).toBeInTheDocument();
  });

  it('calls onEditPoultry', () => {
    const onEditPoultry = jest.fn();
    const poultry = poultryFactory();

    render(<PoultriesCarousel {...DEFAULT_PROPS} poultries={[poultry]} onEditPoultry={onEditPoultry} />);

    userEvent.click(screen.getByTestId('edit-poultry'));

    expect(onEditPoultry).toHaveBeenCalledWith(poultry.id);
  });

  it('calls onViewPoultry', () => {
    const onViewPoultry = jest.fn();
    const poultry = poultryFactory();

    render(<PoultriesCarousel {...DEFAULT_PROPS} poultries={[poultry]} onViewPoultry={onViewPoultry} />);

    userEvent.click(screen.getByTestId('view-poultry'));

    expect(onViewPoultry).toHaveBeenCalledWith(poultry.id);
  });


  it('calls onViewPoultry', () => {
    const onClickImage = jest.fn();
    const poultry = poultryFactory();

    render(<PoultriesCarousel {...DEFAULT_PROPS} poultries={[poultry]} onClickImage={onClickImage} />);

    userEvent.click(screen.getByAltText(poultry.name));

    expect(onClickImage).toHaveBeenCalledWith(poultry.id);
  });
});
