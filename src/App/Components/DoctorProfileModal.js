import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import Web3 from "web3";

export default function DoctorProfileModal({
  user,
  doctor,
  toggle,
  medichain,
}) {
  const [acco, setAcco] = useState(null);

  console.log(user);
  const d = new Date();
  const day = String(d.getDate());
  const month = String(d.getMonth() + 1);
  const year = String(d.getFullYear());

  // async function getAccount() {
  //   const acc = await web3.eth.getAccounts();
  //   setAcco(acc[0]);
  // }

  //this function add doctors to access list
  const grantAccess = async () => {
    const date = day + "/" + month + "/" + year;
    medichain.methods
      .addDoctor(0x53203e10d1f0ad007e239d3ea88523d0931d8847, user.name, date)
      .send({ from: 0x53203e10d1f0ad007e239d3ea88523d0931d8847 })
      .on("transactionHash", (hash) => {
        console.log(hash);
      });
    console.log(date);
    // toggle();
    // toast.warning("Access granted");
  };

  // useEffect(() => {
  //   getAccount();
  // }, []);

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
