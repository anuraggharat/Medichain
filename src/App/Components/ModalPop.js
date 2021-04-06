import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DoctorProfileModal from "./DoctorProfileModal";
import Profile from "./Profile";

const ModalPop = ({ item, modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody className="w-100" className="w-100 ">
        <DoctorProfileModal user={item} doctor={true} toggle={toggle} />
      </ModalBody>
    </Modal>
  );
};

export default ModalPop;
