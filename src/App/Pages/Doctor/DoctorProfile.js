import React from "react";
import Profile from "../../Components/Profile";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";

function DoctorProfile({ logoutUser }) {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={false} />
      <Navbar sidebarToggler={openNav} name={"Anurag"} />
      <div className="container mt-5">
        <Profile />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.doctor.user,
});

export default connect(mapStateToProps, { logoutUser })(DoctorProfile);
