import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

const DEFAULT_PROPS = {
  user: {
    name: 'Rodolfo',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  title: 'CIG',
  onToggleMenu: jest.fn(),
  sandwichButtonIsToggled: false,
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

  it('calls onToggleMenu', () => {
    const onToggleMenu = jest.fn();

    render(<Header {...DEFAULT_PROPS} onToggleMenu={onToggleMenu} />);

    userEvent.click(screen.getByTestId('sandwich-button'));

    expect(onToggleMenu).toHaveBeenCalled();
  });

  it('renders the shortcuts', () => {
    const onClickShortcut = jest.fn();
    const shortcuts = ['Teste', 'Teste dois'];

    render(<Header {...DEFAULT_PROPS} onClickShortcut={onClickShortcut} shortcuts={shortcuts} />);

    userEvent.click(screen.getByAltText(DEFAULT_PROPS.user.name));

    shortcuts.forEach((s) => {
      expect(screen.getByText(s)).toBeInTheDocument();
    });
  });

  it('closes the shortcuts', () => {
    const onClickShortcut = jest.fn();
    const shortcuts = ['Teste', 'Teste dois'];

    render(<Header {...DEFAULT_PROPS} onClickShortcut={onClickShortcut} shortcuts={shortcuts} />);

    userEvent.click(screen.getByAltText(DEFAULT_PROPS.user.name));
    userEvent.click(screen.getByAltText(DEFAULT_PROPS.user.name));

    shortcuts.forEach((s) => {
      expect(screen.queryByText(s)).not.toBeInTheDocument();
    });
  });

  it('calls onClickShortcut', () => {
    const onClickShortcut = jest.fn();
    const firstShortcut = 'Teste 1';
    const secondShortcut = 'Teste 2';

    render(<Header {...DEFAULT_PROPS} onClickShortcut={onClickShortcut} shortcuts={[firstShortcut, secondShortcut]} />);

    userEvent.click(screen.getByAltText(DEFAULT_PROPS.user.name));
    userEvent.click(screen.getByText(firstShortcut));

    expect(onClickShortcut).toHaveBeenCalledWith(firstShortcut);

    userEvent.click(screen.getByText(secondShortcut));

    expect(onClickShortcut).toHaveBeenCalledWith(secondShortcut);
    expect(onClickShortcut).toHaveBeenCalledTimes(2);
  });
});
