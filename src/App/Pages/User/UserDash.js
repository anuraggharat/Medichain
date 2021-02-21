import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileEarmarkPlus, BsFileText } from "react-icons/bs";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Link, Redirect } from "react-router-dom";
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

  if (!isLoggedIn) {
    return <Redirect to="/user/login" />;
  }

  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={false} />
      <Navbar sidebarToggler={openNav} name={"Anurag"} />

      <div id="main">
        <div className="container bg-light">
          <div className="container ">
            <div className="w-100 d-flex justify-content-between align-items-center p-3 bg-white mb-3 ">
              <h3>User Dashboard</h3>
              <Link to="/user/profile">Visit Profile</Link>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="card border-0 rounded shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BsFileText className="mr-3" />
                      Your Uploaded Records
                    </h3>
                    <div className="border-top mb-3"></div>

                    <div className="row">
                      {images.map((item, index) => (
                        <div key={index} className="col-lg-4 p-4 ">
                          <div className=" card ">
                            <ModalImage
                              small={item.address}
                              medium={item.address}
                              large={item.address}
                              alt={item.title}
                              showRotate={true}
                              hideZoom={true}
                              className="card-img-top"
                            />
                            <div className="card-footer">
                              <h5>{item.title}</h5>
                            </div>
                          </div>
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
