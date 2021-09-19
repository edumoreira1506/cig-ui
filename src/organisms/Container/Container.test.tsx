import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Container from './Container';

const DEFAULT_PROPS = {
  children: 'I am the children!',
  title: 'Title',
  user: {
    name: 'Rodolfo',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  items: [],
  onMenuClick: jest.fn()
};

describe('Container', () => {
  it('renders the title', () => {
    const title = 'I am the title';

    render(<Container {...DEFAULT_PROPS} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the children', () => {
    const children = 'I am the children';

    render(<Container {...DEFAULT_PROPS}>{children}</Container>);

    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('renders user info', () => {
    render(<Container {...DEFAULT_PROPS} />);

    expect(screen.getByAltText(DEFAULT_PROPS.user.name)).toBeInTheDocument();
  });

  it('render all items', () => {
    const items = [
      {
        title: 'Example',
        icon: 'Icon'
      }
    ];

    render(<Container {...DEFAULT_PROPS} items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('calls onMenuClick', () => {
    const onMenuClick = jest.fn();
    const items = [
      {
        title: 'Example',
        icon: 'Icon'
      }
    ];

    render(<Container {...DEFAULT_PROPS} items={items} onMenuClick={onMenuClick} />);

    userEvent.click(screen.getByText(items[0].title));

    expect(onMenuClick).toHaveBeenCalled();
  });
});