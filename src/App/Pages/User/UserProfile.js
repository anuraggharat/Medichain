import React from "react";
import Profile from "../../Components/Profile";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function UserProfile({ isLoggedIn, logoutUser, user }) {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  if (!user) {
    return <Redirect to="/user/login" />;
  }
  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={false} />
      <Navbar sidebarToggler={openNav} name={user.name} />
      <div className="container mt-5">
        <Profile item={user} doctor={false} fromDoctor={false} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps, { logoutUser })(UserProfile);
