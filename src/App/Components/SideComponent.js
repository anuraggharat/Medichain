import React from "react";

export default function SideComponent(props) {
  return (
    <div className="col-lg-4 min-vh-100 bg-primary justify-content-center align-items-center d-flex flex-column text-white ">
      <img
        src={props.img}
        alt="User Login"
        className="img-fluid mb-4"
        width="100"
      />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
