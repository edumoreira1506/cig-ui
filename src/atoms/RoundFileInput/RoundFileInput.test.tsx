import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RoundFileInput from './RoundFileInput';

const DEFAULT_PROPS = {
  onUpload: jest.fn(),
  baseUrl: '',
  imagePlaceholderPath: '',
};

describe('RoundFileInput', () => {
  it('renders correctly', () => {
    render(<RoundFileInput {...DEFAULT_PROPS} />);

    expect(screen.getByAltText(DEFAULT_PROPS.imagePlaceholderPath)).toBeInTheDocument();
  });

  it('calls onUpload', () => {
    const onUpload = jest.fn();
    const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });

    render(<RoundFileInput {...DEFAULT_PROPS} onUpload={onUpload} />);

    userEvent.upload(screen.getByTestId('file-input'), file);

    expect(onUpload).toHaveBeenCalledWith(file);
  });

  it('renders the overlay', () => {
    render(<RoundFileInput {...DEFAULT_PROPS} />);

    userEvent.hover(screen.getByTestId('file-input'));

    expect(screen.getByTestId('round-file-input-overlay')).toBeInTheDocument();
  });

  it('renders the upload message', () => {
    const uploadMessage = 'upload message!';

    render(<RoundFileInput {...DEFAULT_PROPS} uploadMessage={uploadMessage} />);

    userEvent.hover(screen.getByTestId('file-input'));

    expect(screen.getByText(uploadMessage)).toBeInTheDocument();
  });
});
