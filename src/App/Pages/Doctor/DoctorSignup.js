import React, { useEffect, useState } from "react";

import SideComponent from "../../Components/SideComponent";
import DoctorAvatar from "../../Assets/doctor.svg";
import { Link } from "react-router-dom";

export default function DoctorSignup() {
  const [values, setValues] = useState({
    name: "",
    number: "",
    gender: "",
    specialization: "",
    age: "",
    city: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    email,
    password,
    name,
    number,
    gender,
    age,
    city,
    specialization,
  } = values;

  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //value submission function
  const submitValues = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Submittted values", values);
  };
  return (
    <div className="container-fluid min-vh-100 ">
      <div className="row  ">
        <div className="col-lg-8 min-vh-100 bg-white justify-content-center align-items-center d-flex">
          <div className="container my-auto ">
            <div className="w-75 mx-auto ">
              <h1 className="display-4 mb-3">Signup.</h1>
              <p className="lead">
                Already a user ?{"  "}
                <Link to="/doctor/login" className="">
                  Login.
                </Link>
              </p>
              <form
                className="border-top pt-4"
                onSubmit={(e) => submitValues(e)}
              >
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="name"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="phoneno"
                    placeholder="Phone number"
                    name="number"
                    value={number}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-4 ">
                  <input
                    type="email"
                    className="form-control border-0 bg-light rounded "
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="specialization"
                    placeholder="Area of Specialization"
                    name="specialization"
                    value={specialization}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="row mb-4">
                  <div className="col-lg-4">
                    <input
                      type="text"
                      className="form-control border-0 bg-light rounded "
                      id="gender"
                      placeholder="gender"
                      name="gender"
                      value={gender}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-lg-4 mt-sm-3">
                    <input
                      type="number"
                      className="form-control border-0 bg-light rounded "
                      id="age"
                      placeholder="Age"
                      name="age"
                      value={age}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-lg-4 mt-sm-3">
                    <input
                      type="text"
                      className="form-control border-0 bg-light rounded "
                      id="city"
                      placeholder="City name"
                      name="city"
                      value={city}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="border-0 bg-light form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => handleChange(e)}
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
          img={DoctorAvatar}
          title="Welcome Doctor,"
          text="Medichain is a Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled"
        />
      </div>
    </div>
  );
}
