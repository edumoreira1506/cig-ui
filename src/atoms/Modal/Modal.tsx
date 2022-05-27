import { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { AiFillCloseCircle } from 'react-icons/ai';

import { Colors } from '../../constants/styles';
import { ModalGlobalStyle, StyledCloseButton } from './Modal.styles';

export interface ModalProps extends ReactModal.Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  animation?: 'bottom' | 'left';
  displayActions?: boolean;
}

const modalStyle = {
  overlay: {
    background: Colors.BlackTransparent,
    zIndex: 1000,
  }
};

export default function Modal({
  children,
  isOpen,
  onClose,
  className,
  animation = 'left',
  displayActions = false,
  ...props
}: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyle}
      className={className}
      ariaHideApp={false}
      closeTimeoutMS={200}
      {...props}
    >
      <ModalGlobalStyle animation={animation} />

      {displayActions && (
        <StyledCloseButton onClick={onClose} aria-label='Fechar'>
          <AiFillCloseCircle />
        </StyledCloseButton>
      )}

      {children}
    </ReactModal>
  );
}
