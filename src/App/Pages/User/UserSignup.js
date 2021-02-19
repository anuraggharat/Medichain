import React, { useEffect, useState } from "react";
import SideComponent from "../../Components/SideComponent";
import UserAvatar from "../../Assets/man.svg";
import { Link } from "react-router-dom";
import { registerUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";

function UserSignup({ isLoggedIn, registerUser, loading }) {
  const [values, setValues] = useState({
    name: "",
    phoneno: "",
    gender: "",
    age: "",
    city: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { email, password, name, phoneno, gender, age, city } = values;

  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //value submission function
  const submitValues = async (e) => {
    e.preventDefault();
    console.log("Submittted values", values);
    registerUser(values)
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error(res.error);
        }
      })
      .catch((err) => toast.warning("Please try again!"));
    setValues({
      name: "",
      phoneno: "",
      gender: "",
      age: "",
      city: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container-fluid min-vh-100 ">
      <div className="row">
        <div className="col-lg-8 min-vh-100 bg-white justify-content-center align-items-center d-flex">
          <div className="container my-auto ">
            <div className="w-75 mx-auto ">
              <h1 className="display-4 mb-3">Signup.</h1>
              <p className="lead">
                Already a user ?{"  "}
                <Link to="/user/login" className="">
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
                    placeholder="Your Full Name"
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
                    placeholder="Your Phone number"
                    name="phoneno"
                    value={phoneno}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="">
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
                <div className="row mb-4">
                  <div className="col-lg-4 mt-3">
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
                  <div className="col-lg-4 mt-3">
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
                  <div className="col-lg-4  mt-3">
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

                {!loading && (
                  <button
                    type="submit"
                    className="btn w-25 rounded button-primary mx-auto"
                    disabled={loading}
                  >
                    Submit
                  </button>
                )}
                {loading && <Loader />}
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  loading: state.user.loading,
});
export default connect(mapStateToProps, { registerUser })(UserSignup);
