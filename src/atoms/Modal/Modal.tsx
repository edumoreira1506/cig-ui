import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import { Colors } from '../../constants/styles';
import { ModalGlobalStyle } from './Modal.styles';

export interface ModalProps extends ReactModal.Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  animation?: 'bottom' | 'left';
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
      {children}
    </ReactModal>
  );
}
