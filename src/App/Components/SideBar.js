import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  console.log(props);
  return (
    <div id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={() => props.closenav()}>
        &times;
      </a>
      {props.doctor ? (
        <Link to="/doctor/dash">Home</Link>
      ) : (
        <Link to="/user/dash">Home</Link>
      )}
      {props.doctor ? (
        <Link to="/doctor/profile">Profile</Link>
      ) : (
        <Link to="/user/profile">Profile</Link>
      )}
      {props.doctor ? (
        <Link to="/doctor/availablepatients">Patients</Link>
      ) : (
        <Link to="/user/availabledoctors">Doctors</Link>
      )}
      {props.doctor ? null : <Link to="/user/requests">Requests</Link>}
      {props.doctor ? null : <Link to="/user/accesslist">Accesslist</Link>}

      <a className="link" href="#" onClick={() => props.logoutUser()}>
        Logout
      </a>
    </div>
  );
}
