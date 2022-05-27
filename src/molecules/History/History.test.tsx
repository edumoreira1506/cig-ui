import { DealEventValueEnum } from '@cig-platform/enums';
import { render, screen } from '@testing-library/react';

import { History } from './History';

const DEFAULT_PROPS = {
  events: []
};

describe('<History />', () => {
  it('renders correctly', () => {
    render(<History {...DEFAULT_PROPS} />);

    expect(screen.getAllByText('Aguardando...')).toHaveLength(3);
  });

  it('renders correctly when is cancelled', () => {
    const events = [
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.cancelled,
        createdAt: new Date(),
        metadata: { reason: 'Ave morreu' }
      }
    ];

    render(<History {...DEFAULT_PROPS} events={events} />);

    expect(screen.getAllByText('Cancelado')).toHaveLength(3);
    expect(screen.getByText(events[0].metadata.reason)).toBeInTheDocument();
  });

  it('renders correctly when is placed', () => {
    const events = [
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.placed,
        createdAt: new Date(),
        metadata: { description: 'Bora negociar', value: 15000 }
      }
    ];

    render(<History {...DEFAULT_PROPS} events={events} />);

    expect(screen.getAllByText('Aguardando...')).toHaveLength(2);
  });

  it('renders correctly when is confirmed', () => {
    const events = [
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.placed,
        createdAt: new Date(),
        metadata: { description: 'Bora negociar', value: 15000 }
      },
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.confirmed,
        createdAt: new Date(),
        metadata: {}
      },
    ];

    render(<History {...DEFAULT_PROPS} events={events} />);

    expect(screen.getAllByText('Aguardando...')).toHaveLength(1);
  });

  it('renders correctly when is confirmed', () => {
    const events = [
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.placed,
        createdAt: new Date(),
        metadata: { description: 'Bora negociar', value: 15000 }
      },
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.confirmed,
        createdAt: new Date(),
        metadata: {}
      },
      {
        id: '',
        dealId: '',
        value: DealEventValueEnum.received,
        createdAt: new Date(),
        metadata: {}
      },
    ];

    render(<History {...DEFAULT_PROPS} events={events} />);

    expect(screen.queryByText('Aguardando...')).not.toBeInTheDocument();
  });
});
