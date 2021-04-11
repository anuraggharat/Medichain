import React from "react";
import Profile from "../../Components/Profile";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function DoctorProfile({ user, isLoggedIn, logoutUser }) {
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
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={true} />
      <Navbar sidebarToggler={openNav} name={user.name} />
      <div className="container mt-5">
        <Profile user={user} doctor={true} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.doctor.user,
  isLoggedIn: state.doctor.isLoggedIn,
});

export default connect(mapStateToProps, { logoutUser })(DoctorProfile);
