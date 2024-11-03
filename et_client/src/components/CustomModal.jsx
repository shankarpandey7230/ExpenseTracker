import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useUser } from '../context/UserContext';

export const CustomModal = ({ children }) => {
  const { toggleModal, show } = useUser();
  return (
    <Modal
      show={show}
      onHide={() => toggleModal(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: 'grey' }}>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'grey' }}>{children}</Modal.Body>
    </Modal>
  );
};
