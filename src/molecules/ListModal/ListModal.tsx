import { VFC } from 'react';

import Modal, { ModalProps } from '../../atoms/Modal/Modal';

import { StyledContainer, StyledListItem } from './ListModal.styles';

interface ListModalItem {
  onClick?: () => void;
  label: string;
}

interface ListModalProps {
  isOpen?: boolean;
  items?: ListModalItem[];
  onClose: ModalProps['onClose'];
}

const ListModal: VFC<ListModalProps> = ({
  isOpen = false,
  items = [],
  onClose
}: ListModalProps) => (
  <Modal animation='bottom' isOpen={isOpen} onClose={onClose}>
    <StyledContainer>
      {items.map(item => (
        <StyledListItem key={item.label} onClick={item.onClick}>
          {item.label}
        </StyledListItem>
      ))}
    </StyledContainer>
  </Modal>
);

export default ListModal;
