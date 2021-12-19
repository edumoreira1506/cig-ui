import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Table from './Table';

describe('<Table />', () => {
  it('renders the columns', () => {
    const columns = ['Column 1', 'Column 2', 'Column 3'];

    render(<Table columns={columns} />);

    columns.forEach(column => {
      expect(screen.getByText(column)).toBeInTheDocument();
    });
  });

  it('renders the rows', () => {
    const rows = [{ items: ['Row 1', 'Row 2', 'Row 3' ]}];

    render(<Table rows={rows} />);

    rows.forEach(row => {
      row.items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  it('renders the expanded content', () => {
    const columns = ['Column 1', 'Column 2', 'Column 3'];
    const row = { items: ['Row 1', 'Row 2', 'Row 3' ], expandedContent: 'Expanded content!'};
    const rows = [row];

    render(<Table columns={columns} rows={rows} hasExpandColumn />);
    
    expect(screen.queryByText(row.expandedContent)).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('expand-row'));

    expect(screen.getByText(row.expandedContent)).toBeInTheDocument();
  });
});
