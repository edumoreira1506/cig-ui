import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CommentItem from './CommentItem';

const DEFAULT_PROPS = {
  name: 'Claudio',
  content: 'Nice comment',
  image: 'image.png',
  date: new Date()
};

describe('<CommentItem />', () => {
  it('renders correctly', () => {
    render(<CommentItem {...DEFAULT_PROPS} />);

    expect(screen.getByText(DEFAULT_PROPS.name)).toBeInTheDocument();
    expect(screen.getByAltText(DEFAULT_PROPS.name)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_PROPS.content)).toBeInTheDocument();
  });

  it('renders answer button', () => {
    const onAnswer = jest.fn();
    const answerNameButton = 'Responder';
    const content = 'My nice comment';

    render(<CommentItem {...DEFAULT_PROPS} onAnswer={onAnswer} answerNameButton={answerNameButton} />);

    userEvent.click(screen.getByText('Responder'));
    userEvent.type(screen.getByDisplayValue(''), content);
    userEvent.click(screen.getByText(answerNameButton));

    expect(onAnswer).toHaveBeenCalledWith(content);
  });
});
