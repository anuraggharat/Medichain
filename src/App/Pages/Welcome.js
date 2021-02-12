import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>WELCOME</h1>
      <Link className="btn btn-primary" to="/user/login">
        User Login
      </Link>
    </div>
  );
}
