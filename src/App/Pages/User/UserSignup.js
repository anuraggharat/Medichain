import React from "react";
import SideComponent from "../../Components/SideComponent";
import UserAvatar from "../../Assets/man.svg";
import { Link } from "react-router-dom";

export default function UserSignup() {
  return (
    <div className="container-fluid min-vh-100 ">
      <div className="row">
        <div className="col-lg-8 min-vh-100 bg-white justify-content-center align-items-center d-flex">
          <div className="container my-auto ">
            <div className="w-75 mx-auto ">
              <h1 className="display-4 mb-3">Signup.</h1>
              <p className="lead">
                Already a user ?{"  "}
                <Link to="user/login" className="">
                  Login.
                </Link>
              </p>
              <form className="border-top pt-4">
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="name"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="phoneno"
                    placeholder="Your Phone number"
                  />
                </div>
                <div className="mb-4 ">
                  <input
                    type="email"
                    className="form-control border-0 bg-light rounded "
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="border-0 bg-light form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-25 rounded button-primary mx-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <SideComponent
          img={UserAvatar}
          title="Welcome User,"
          text="Medichain is a Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled"
        />
      </div>
    </div>
  );
}