import React from "react";
import { BiUserCircle } from "react-icons/bi";
import {putRequests} from '../utils/postRequests'
import { connect } from "react-redux";
import { toast } from "react-toastify";


function Profile({ item, doctor,user,fromDoctor=true }) {
  console.log(item,"Item");
    const generateReq = () => {
      const mess = {
        from: user.name,
        to: item.email,
        email: user.email,
        account: user.account,
        gender: user.gender,
        phoneno: user.phoneno,
        age: user.age,
        city: user.city,
        specialization:user.specialization,
      };
    putRequests(mess).then(res=>{
      if (res.success) {
        toast.success("Request Submitted")
      }
      else{
        toast.warning("Cannot put Request")
      }
    })
    };
  return (
    <div className="container">
      <div className="card border-0 shadow">
        <div className="card-body">
          <h3 className="card-title text-primary">
            <BiUserCircle className="mr-3 text-primary" />
            {"User Profile"}
          </h3>
          <div className="border-top mb-3"></div>
          <ul className="list-group p-0 list-group-flush">
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold m-0  ">Profile Name</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.name}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Email Address</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.email}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4 ">
                  <p className="font-weight-bold">Age</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.age}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Phone Number</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.phoneno}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Gender</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.gender}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">City</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.city}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Address</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.account}</p>
                </div>
              </div>
            </li>
            {fromDoctor && (
              <div className="container mt-5">
                <button
                  className="btn btn-primary mx-auto"
                  onClick={() => generateReq()}
                >
                  Put Request
                </button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;