import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  console.log(props);
  return (
    <div id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={() => props.closenav()}>
        &times;
      </a>
      <Link>Profile</Link>
      <a className="link" href="#" onClick={() => props.logoutUser()}>
        Logout
      </a>
    </div>
  );
}
