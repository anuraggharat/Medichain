import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";

export default function DoctorProfileModal({ user, doctor, toggle }) {
  console.log(user);

  const grantAccess = () => {
    toast.warning("Access granted");
    toggle();
  };

  return (
    <div className="container w-100">
      <div className="card border-0 ">
        <div className="card-body">
          <h3 className="card-title text-primary">
            <BiUserCircle className="mr-3 text-primary" />
            {doctor ? "Doctor Profile" : "User Profile"}
          </h3>
          <div className="border-top mb-3"></div>
          <ul className="list-group p-0 list-group-flush">
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold m-0  ">Profile Name</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.name}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Email Address</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.email}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4 ">
                  <p className="font-weight-bold">Age</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.age}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Phone Number</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.phoneno}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Gender</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.gender}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">City</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.city}</p>
                </div>
              </div>
            </li>
            {doctor && (
              <li className="list-group-item pl-0">
                <div className="row">
                  <div className="col-lg-4">
                    <p className="font-weight-bold">Specialization</p>
                  </div>
                  <div className="col-lg-8 text-muted">
                    <p>{user.specialization}</p>
                  </div>
                </div>
              </li>
            )}

            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Address</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{user.account ? user.account : ""}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="container text-center ">
                <button
                  className="btn mx-auto btn-primary"
                  onClick={() => grantAccess()}
                >
                  Provide Access
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
