import { screen, render } from '@testing-library/react';

import Header from './Header';

const DEFAULT_PROPS = {
  user: {
    name: 'Rodolfo',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  title: 'CIG'
};

describe('Header', () => {
  it('renders the user info', () => {
    const user = { name: 'Claudio', image: DEFAULT_PROPS.user.image };

    render(<Header {...DEFAULT_PROPS} user={user} />);

    const image = screen.getByAltText(user.name);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', user.image);
  });

  it('renders the title', () => {
    const title = 'title';

    render(<Header {...DEFAULT_PROPS} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
