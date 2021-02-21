import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Profile from "./Profile";

const ModalPop = ({ item, modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className="bg-primary">
      <ModalBody className="w-100">
        <Profile user={item} doctor={true} />
      </ModalBody>
    </Modal>
  );
};

export default ModalPop;
