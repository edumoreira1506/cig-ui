import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LinkButton from './LinkButton';

const DEFAULT_PROPS = {
  title: 'fake title',
  onClick: jest.fn(),
  icon: 'fake icon'
};

describe('LinkButton', () => {
  it('renders the title', () => {
    const title = 'title';

    render(<LinkButton {...DEFAULT_PROPS} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('render the icon', () => {
    const icon = 'icon';

    render(<LinkButton {...DEFAULT_PROPS} icon={icon} />);

    expect(screen.getByText(icon)).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const title = 'title';
    const onClick = jest.fn();

    render(<LinkButton {...DEFAULT_PROPS} title={title} onClick={onClick} />);

    userEvent.click(screen.getByText(title));

    expect(onClick).toHaveBeenCalledWith(title);
  });
});
