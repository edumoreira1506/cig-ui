import { ReactNode } from 'react';
import ReactModal from 'react-modal';

import { Colors } from '../../constants/styles';

export interface ModalProps extends ReactModal.Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function Modal({ children, isOpen, onClose, className, ...props }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{ overlay: { background: Colors.BlackTransparent, zIndex: 1000 } }}
      className={className}
      ariaHideApp={false}
      {...props}
    >
      {children}
    </ReactModal>
  );
}