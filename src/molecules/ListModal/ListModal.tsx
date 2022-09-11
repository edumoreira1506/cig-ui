import { FC, Fragment, VFC } from 'react';

import Modal, { ModalProps } from '../../atoms/Modal/Modal';
import { LinkIdentifiers } from '../../constants';

import { StyledContainer, StyledListItem } from './ListModal.styles';

type LinkComponentProps = {
  identifier: typeof LinkIdentifiers.LIST_MODAL_LINK;
  params?: Record<string, string>
}

interface ListModalItem {
  onClick?: () => void;
  label: string;
}

interface ListModalProps {
  isOpen?: boolean;
  items?: ListModalItem[];
  onClose: ModalProps['onClose'];
  linkComponent?: FC<LinkComponentProps>
}

const ListModal: VFC<ListModalProps> = ({
  isOpen = false,
  items = [],
  onClose,
  linkComponent: LinkComponent = Fragment
}: ListModalProps) => (
  <Modal animation='bottom' isOpen={isOpen} onClose={onClose}>
    <StyledContainer>
      {items.map(item => (
        <LinkComponent
          identifier='list-modal-link'
          key={item.label}
          params={{ label: item.label }}
        >
          <StyledListItem onClick={item.onClick}>
            {item.label}
          </StyledListItem>
        </LinkComponent>
      ))}
    </StyledContainer>
  </Modal>
);

export default ListModal;
