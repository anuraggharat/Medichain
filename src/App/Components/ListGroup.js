import React, { useState } from "react";
import ModalPop from "./ModalPop";

export default function ListGroup({ item, medichain }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div
      className=" list-group-item list-group-item-action "
      onClick={() => toggle()}
    >
      <ModalPop
        toggle={toggle}
        modal={modal}
        item={item}
        medichain={medichain}
      />
      <div className="row ">
        <div className="col-lg-4">
          <p className="my-auto text-dark font-weight-regular">{item.name}</p>
          {item.specialization && (
            <p className="text-muted my-auto ">{item.specialization}</p>
          )}
        </div>
        <div className="col-lg-3">
          <p className="my-auto text-dark">{item.email}</p>
        </div>
        <div className="col-lg-2">
          <p className="text-dark my-auto">{item.phoneno}</p>
        </div>
        <div className="col-lg-2 text-wrap">
          <p className="text-dark my-auto">{item.city}</p>
        </div>
        <div className="col-lg-1 text-wrap">
          <p className="text-dark my-auto">{item.age}</p>
        </div>
      </div>
    </div>
  );
}
