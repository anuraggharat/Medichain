import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileText } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Redirect } from "react-router-dom";

function DoctorDash({ user, logoutUser, isLoggedIn }) {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  if (!isLoggedIn) {
    return <Redirect to="/doctor/login" />;
  }

  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} />
      <Navbar sidebarToggler={openNav} name={user.name} />

      <div id="main">
        <div className="container bg-light">
          <div className="container ">
            <div className="row p-3 bg-white mb-3">
              <h3>Doctor Dashboard</h3>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BsFileText className="mr-3" />
                      Available Records
                    </h3>
                    <div className="border-top mb-3"></div>

                    <ul className="list-group p-0 list-group-flush text-muted">
                      <li className="list-group-item pl-0">
                        John Doe Blood Test
                      </li>
                      <li className="list-group-item pl-0">John Doe Report</li>
                      <li className="list-group-item pl-0">
                        Tony Stark Report
                      </li>
                      <li className="list-group-item pl-0">
                        Jane Foster Checkup
                      </li>
                      <li className="list-group-item pl-0">
                        Jane Foster Report
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BiUserCircle className="mr-3" />
                      Doctor Profile
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
  isLoggedIn: state.doctor.isLoggedIn,
  user: state.doctor.user,
});
export default connect(mapStateToProps, { logoutUser })(DoctorDash);
