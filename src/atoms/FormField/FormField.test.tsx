import { render, screen } from '@testing-library/react';

import FormField from './FormField';

describe('<FormField />', () => {
  it('renders the children' , () => {
    const children = 'I am the children';

    render(<FormField>{children}</FormField>);

    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
