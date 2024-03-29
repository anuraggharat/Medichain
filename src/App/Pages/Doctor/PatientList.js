import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileEarmarkPlus, BsFileText } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Link, Redirect } from "react-router-dom";
import { getPatients } from "../../utils/getRequests";
import ListGroup from "../../Components/ListGroup";

function PatientList({ user, logoutUser, isLoggedIn }) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const fetchData = async () => {
    if (isLoggedIn) {
      getPatients()
        .then((res) => {
          console.log(res);
          if (res.success) {
            setData(res.data);
            setCount(res.count);
            toast.success("List of all available users!");
          } else {
            toast.warning("Unable to show data");
          }
        })
        .catch((err) => toast.error("Refresh the page!"));
      setLoading(false);
    } else {
      toast.warning("Login to continue");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <Redirect to="/doctor/login" />;
  }

  return (
    <div className="min-vh-100 w-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={true} />
      <Navbar sidebarToggler={openNav} name={user.name} />
      <div className="container d-flex justify-content-between mt-5 p-0">
        <Link to="/doctor/dash" className="link">
          Go back Home
        </Link>
        <p>Displaying {count} records</p>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="list-group w-100">
            <div className="bg-primary text-white list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="lead my-auto font-weight-normal">Name</p>
                </div>
                <div className="col-lg-3">
                  <p className="lead my-auto font-weight-normal">Email</p>
                </div>
                <div className="col-lg-2">
                  <p className="lead my-auto font-weight-normal">Phone</p>
                </div>
                <div className="col-lg-2">
                  <p className="lead my-auto font-weight-normal">City</p>
                </div>

                <div className="col-lg-1">
                  <p className="lead my-auto font-weight-normal">Age</p>
                </div>
              </div>
            </div>
            {loading && <Loader />}
            {!loading &&
              data &&
              data.map((item) => <ListGroup user={user} key={item._id} item={item} doctor={false} />)}
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
export default connect(mapStateToProps, { logoutUser })(PatientList);
