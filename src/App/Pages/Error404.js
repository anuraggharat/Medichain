import React from "react";
import { Link } from "react-router-dom";
import Error from "../Assets/error.svg";

export default function Errorpage() {
  return (
    <div className="w-100 min-vh-100">
      <div className="container align-content-center text-center d-flex flex-column">
        <img src={Error} className="mx-auto img-fluid w-50" alt="Error Page " />
        <Link className="mt-5 mx-auto" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
