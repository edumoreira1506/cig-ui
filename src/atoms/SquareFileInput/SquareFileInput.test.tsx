import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SquareFileInput from './SquareFileInput';

const DEFAULT_PROPS = {
  onUpload: jest.fn(),
};

describe('SquareFileInput', () => {
  it('calls onUpload', () => {
    const onUpload = jest.fn();
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    render(<SquareFileInput {...DEFAULT_PROPS} onUpload={onUpload} />);

    userEvent.upload(screen.getByTestId('square-file-input'), file);

    expect(onUpload).toHaveBeenCalledWith(file);
  });

  it('renders the upload message', () => {
    const uploadMessage = 'Upload message!';

    render(<SquareFileInput {...DEFAULT_PROPS} uploadMessage={uploadMessage} />);

    expect(screen.getByText(uploadMessage)).toBeInTheDocument();
  });
});
