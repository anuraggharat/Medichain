import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserAvatar from "../../Assets/man.svg";
import SideComponent from "../../Components/SideComponent";
import Web3 from "web3";
import { loginUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { loadMedichain } from "../../Redux/Actions/medichain";

function UserLogin({ loginUser, user, isLoggedIn, medichain, loadMedichain }) {
  const [account, setAccount] = useState();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { email, password } = values;

  console.log("medichain is here", medichain);

  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //value submission function
  const submitValues = async (e) => {
    await setLoading(true);
    e.preventDefault();
    if (!email && !password) {
      toast.error("Values can't be empty");
      return;
    }
    await loginUser(values)
      .then(async (res) => {
        if (res.success) {
          await toast.success(res.message);
        } else {
          toast.error(res.error);
        }
      })
      .catch((err) => toast.warning(err));
    setLoading(false);
  };

  //loading web3 token
  const loadWeb3 = async () => {
    console.log(window.ethereum);
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = await window.web3;
      const accounts = await web3.eth.getAccounts();
      toast.success("Ethereum Account detected!");
      console.log(accounts);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      toast.error("Non-Ethereum browser detected.");
    }
  };

  function medichaindata() {
    loadMedichain("data changed");
  }

  //useeffect hook to trigger web3
  useEffect(() => {
    medichaindata();
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/user/dash" />;
  }

  return (
    <div className="container-fluid min-vh-100 ">
      <div className="row">
        <SideComponent
          img={UserAvatar}
          title="Welcome User,"
          text="Medichain is a Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled"
        />
        <div className="col-lg-8 min-vh-100 bg-white justify-content-center align-items-center d-flex">
          <div className="container my-auto ">
            <div className="w-75 mx-auto ">
              <h3 className="display-4 mb-3">Login</h3>
              <p className="lead">
                Already a user ?{"  "}
                <Link to="/user/signup" className="">
                  Signup.
                </Link>
              </p>
              <form
                className="border-top pt-4"
                onSubmit={(e) => submitValues(e)}
              >
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
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <button
                      type="submit"
                      className="btn w-25 rounded button-primary"
                      disabled={loading}
                    >
                      Submit
                    </button>
                    <div className="mb-2">
                      <Link to="/">Home</Link>
                    </div>
                  </div>
                )}
                {loading && <Loader />}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
  medichain: state.medichain.medichain,
});
export default connect(mapStateToProps, { loginUser, loadMedichain })(
  UserLogin
);
