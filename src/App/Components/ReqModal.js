import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ReqModal({modal,toggle,item}) {
    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader
          toggle={toggle}
        >{` Request from Dr. ${item.from} `}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-lg-6">
              <p>Email</p>
            </div>
            <div className="col-lg-6">
              <p>{item.email}</p>
            </div>
            <div className="col-lg-6">
              <p>Gender</p>
            </div>
            <div className="col-lg-6">
              <p>{item.gender}</p>
            </div>
            <div className="col-lg-6">
              <p>Phone</p>
            </div>
            <div className="col-lg-6">
              <p>{item.phoneno}</p>
            </div>
            <div className="col-lg-6">
              <p>Age</p>
            </div>
            <div className="col-lg-6">
              <p>{item.age}</p>
            </div>
            <div className="col-lg-6">
              <p>City</p>
            </div>
            <div className="col-lg-6">
              <p>{item.city}</p>
            </div>
            <div className="col-lg-6">
              <p>Specialization</p>
            </div>
            <div className="col-lg-6">
              <p>{item.specialization}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
  
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
}
