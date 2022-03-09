import { poultryFactory, advertisingFactory, breederFactory } from '@cig-platform/factories';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DealInfo } from './DealInfo';

const DEFAULT_PROPS = {
  date: new Date(),
  status: 'IN_PROGRESS' as const,
  poultry: poultryFactory(),
  advertising: advertisingFactory(),
  breeder: breederFactory()
};

describe('<DealInfo />', () => {
  it('renders correctly', () => {
    render(<DealInfo {...DEFAULT_PROPS} />);

    expect(screen.getByAltText(DEFAULT_PROPS.poultry.name)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.poultry.name)).toBeInTheDocument();
    expect(screen.getByText(`Negociação com ${DEFAULT_PROPS.breeder.name}`)).toBeInTheDocument();
  });

  it('calls onViewDeal', () => {
    const onViewDeal = jest.fn();

    render(<DealInfo {...DEFAULT_PROPS} onViewDeal={onViewDeal} />);

    userEvent.click(screen.getByText('Visualizar'));

    expect(onViewDeal).toHaveBeenCalledWith(DEFAULT_PROPS.advertising.id);
  });
});
