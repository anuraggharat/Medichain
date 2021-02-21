import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileEarmarkPlus, BsFileText } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Redirect } from "react-router-dom";
import ModalImage from "react-modal-image";
import r2 from "../../Assets/r1.jpg";

const images = [
  {
    address: r2,
    title: "Health Report",
  },
  {
    address: r2,
    title: "Blood Report",
  },
  {
    address: r2,
    title: "Medical Report",
  },
  {
    address: r2,
    title: "Covid Report",
  },
];

function UserDash({ user, logoutUser, isLoggedIn }) {
  const [toggled, setToggled] = useState(true);
  console.log(isLoggedIn);
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  // if (!isLoggedIn) {
  //   return <Redirect to="/user/login" />;
  // }

  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={false} />
      <Navbar sidebarToggler={openNav} name={"Anurag"} />

      <div id="main">
        <div className="container bg-light">
          <div className="container ">
            <div className="row p-3 bg-white mb-3">
              <h3>User Dashboard</h3>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="card border-0 rounded shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BsFileText className="mr-3" />
                      Your Uploaded Records
                    </h3>
                    <div className="border-top mb-3"></div>

                    <div className="row">
                      {images.map((item, index) => (
                        <div key={index} className="col-lg-6">
                          <ModalImage
                            small={item.address}
                            medium={item.address}
                            large={item.address}
                            alt={item.title}
                            showRotate={true}
                            hideZoom={true}
                            className="w-100 img-fluid"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card border-0 mt-3">
                  <div className="card-body d-flex justify-content-between align-content-center ">
                    <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                      <BsFileEarmarkPlus className="mr-2" />
                      Add a new Document
                    </button>
                    <p className="my-auto">Total 5 Documents uploaded</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BiUserCircle className="mr-3" />
                      User Profile
                    </h3>
                    <div className="border-top mb-3"></div>
                    <ul className="list-group p-0 list-group-flush">
                      <li className="list-group-item pl-0">
                        <div className="row">
                          <div className="col-lg-4">
                            <p className="font-weight-bold m-0  ">
                              Profile Name
                            </p>
                          </div>
                          <div className="col-lg-8 text-muted">
                            <p>Anurag Gharat</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item pl-0">
                        <div className="row">
                          <div className="col-lg-4">
                            <p className="font-weight-bold">Email Address</p>
                          </div>
                          <div className="col-lg-8 text-muted">
                            <p>anuraggharat55@gmail.com</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item pl-0">
                        <div className="row">
                          <div className="col-lg-4 ">
                            <p className="font-weight-bold">Date of Birth</p>
                          </div>
                          <div className="col-lg-8 text-muted">
                            <p>27 Jul 1999</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item pl-0">
                        <div className="row">
                          <div className="col-lg-4">
                            <p className="font-weight-bold">Phone Number</p>
                          </div>
                          <div className="col-lg-8 text-muted">
                            <p>7745050822</p>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item pl-0">
                        <div className="row">
                          <div className="col-lg-4">
                            <p className="font-weight-bold">Address</p>
                          </div>
                          <div className="col-lg-8 text-muted">
                            <p>0x47a64e6AB5d944308ce419D4E7664FC7433670BA</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
});
export default connect(mapStateToProps, { logoutUser })(UserDash);
