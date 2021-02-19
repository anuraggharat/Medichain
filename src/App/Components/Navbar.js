import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar(props) {
  return (
    <nav className="navbar d-flex justify-content-between navbar-expand-lg navbar-light bg-white">
      <button
        className="btn"
        onClick={() => props.sidebarToggler()}
        type="button"
      >
        <HiMenuAlt1 className="text-dark" />
      </button>
      <h3 className="font-weight-bold">MEDICHAIN</h3>
      <div className="navbar-nav ">
        <h5 className="nav-link active">{props.name}</h5>
      </div>
    </nav>
  );
}
