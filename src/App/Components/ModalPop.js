import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DoctorProfileModal from "./DoctorProfileModal";
import Profile from "./Profile";

const ModalPop = ({ item, modal,user, toggle ,doctor=true}) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody className="w-100" className="w-100 ">
        {doctor ? (
          <DoctorProfileModal item={item} doctor={true} toggle={toggle} />
        ) : (
          <Profile item={item} doctor={false} toggle={toggle} user={user} />
        )}
      </ModalBody>
    </Modal>
  );
};

export default ModalPop;
