import React, { VFC } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Modal, { ModalProps } from '../../atoms/Modal/Modal';

import {
  StyledBody,
  StyledContainer,
  StyledTitle,
  ConfigGlobalStyle,
  StyledBackButton,
} from './ConfigModal.styles';

export type ConfigModalProps = {
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
  children: ModalProps['children'];
  title: string;
}

export const ConfigModal: VFC<ConfigModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
}: ConfigModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ConfigGlobalStyle />

    <StyledContainer>
      <StyledBackButton onClick={onClose}>
        <FiArrowLeft />
      </StyledBackButton>
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>
        {children}
      </StyledBody>
    </StyledContainer>
  </Modal>
);
