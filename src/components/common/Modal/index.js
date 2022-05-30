import React from 'react';
import { ModalWrapper } from './styles';

const Modal = (props) => (
  <ModalWrapper centered {...props} destroyOnClose closable maskClosable={false} />
);

Modal.propTypes = {};

export default Modal;
