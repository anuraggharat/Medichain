import React, { useState, useEffect } from "react";
import Web3 from "web3";
import SideComponent from "../../Components/SideComponent";
import DoctorAvatar from "../../Assets/doctor.svg";
import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../../Redux/Actions/doctor";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";

function DoctorSignup({ isLoggedIn, registerUser }) {
  const [values, setValues] = useState({
    name: "",
    phoneno: "",
    account: "",
    gender: "",
    specialization: "",
    age: "",
    city: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const {
    email,
    password,
    account,
    name,
    phoneno,
    gender,
    age,
    city,
    specialization,
  } = values;

  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //loading web3 token and getting account address
  const loadWeb3 = async () => {
    console.log(window.ethereum);
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = await window.web3;
      const accounts = await web3.eth.getAccounts();
      toast.success("Ethereum Account detected!");
      console.log(accounts);
      setValues({ ...values, account: accounts[0] });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      toast.error("Non-Ethereum browser detected.");
    }
  };

  console.log(values);

  //value submission function
  const submitValues = async (e) => {
    setLoading(true);
    e.preventDefault();

    registerUser(values)
      .then(async (res) => {
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          toast.info("Login with credentials");
          setRedirect(true);
        } else {
          toast.error(res.error);
        }
      })
      .catch((err) => toast.warning("Please try again!"));
    setLoading(false);
  };

  useEffect(() => {
    loadWeb3();
  }, []);

  if (redirect) {
    return <Redirect to="/doctor/login" />;
  }
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
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Dr
                    </span>
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
                </div>
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="phoneno"
                    placeholder="Phone number"
                    name="phoneno"
                    value={phoneno}
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
                  {/* <input
                    type="text"
                    className="form-control border-0 bg-light rounded "
                    id="specialization"
                    placeholder="Area of Specialization"
                    name="specialization"
                    value={specialization}
                    onChange={(e) => handleChange(e)}
                  /> */}
                  <select
                    className="form-control border-0 bg-light"
                    onChange={(e) => handleChange(e)}
                    name="specialization"
                    id="specialization"
                  >
                    <option defaultValue={specialization}>
                      Select Specialization
                    </option>
                    <option value="Surgeon">Surgeon</option>
                    <option value="Physician">Physician</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Gynaecologist">Gynaecologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="row mb-4">
                  <div className="col-lg-4">
                    <select
                      className="form-control border-0 bg-light"
                      onChange={(e) => handleChange(e)}
                      name="gender"
                    >
                      <option defaultValue={gender}>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
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
                  <div className="col-lg-4">
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
const mapStateToProps = (state) => ({
  isLoggedIn: state.doctor.isLoggedIn,
});
export default connect(mapStateToProps, { registerUser })(DoctorSignup);
