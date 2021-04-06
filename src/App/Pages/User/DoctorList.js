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
import { getDoctors } from "../../utils/getRequests";
import ListGroup from "../../Components/ListGroup";

function DoctorList({ isLoggedIn, logoutUser }) {
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
      getDoctors()
        .then((res) => {
          console.log(res);
          if (res.success) {
            setData(res.data);
            setCount(res.count);
            toast.success("List of all available doctors!");
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

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/user/login" />;
  }

  return (
    <div className="min-vh-100 w-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} />
      <Navbar sidebarToggler={openNav} name={"Anurag"} />
      <div className="container mt-5 p-0">
        <Link to="/user/dash" className="link">
          Go back Home
        </Link>
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
              data.map((item) => <ListGroup key={item._id} item={item} />)}
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
export default connect(mapStateToProps)(DoctorList);
