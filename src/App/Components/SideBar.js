import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={() => props.closenav()}>
        &times;
      </a>
      {props.doctor ? (
        <Link to="/doctor/dash">Profile</Link>
      ) : (
        <Link to="/doctor/dash">Profile</Link>
      )}
      {props.doctor ? (
        <Link to="/doctor/availablepatients">Patients</Link>
      ) : (
        <Link to="/user/availabledoctors">Doctors</Link>
      )}

      <a className="link" href="#" onClick={() => props.logoutUser()}>
        Logout
      </a>
    </div>
  );
}
