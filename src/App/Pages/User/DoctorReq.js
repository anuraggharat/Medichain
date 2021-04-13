import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import {  FaCheck,  FaEye,  FaTrashAlt } from "react-icons/fa";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Link, Redirect } from "react-router-dom";
import { getrequests } from "../../utils/postRequests";
import ReqModal from "../../Components/ReqModal";
import { removeRequest } from "../../utils/deleteRequest";


function DoctorReq({ user, isLoggedIn, logoutUser }) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const deletereq=(id)=>{
    setLoading(true)
    console.log(id)
    removeRequest(id).then(res=>{
      if(res.data.success){
        toast.success("Request Removed")
      }
      else{
        toast.error("Unable to remove request")
      }
    }).finally(()=>setLoading(false))
    fetchData()
  }

  const fetchData = async () => {
         setLoading(true);
         getrequests(user.email)
           .then((res) => {
             if (res.success) {
               setData(res.data);
             } else {
               setData(null);
             }
           })
           .catch((err) => toast.error("some Error"))
           .finally(() => setLoading(false));
  };


  const giveAccess=()=>{}



  useEffect(() => {
    fetchData();
  }, []);

  console.log(data)

  // if (user) {
  //   return <Redirect to="/user/login" />;
  // }

  return (
    <div className="min-vh-100 w-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} />
      <Navbar sidebarToggler={openNav} name={user.name} />
      <div className="container mt-5 p-0">
        <Link to="/user/dash" className="link">
          Go back Home
        </Link>
      </div>

      <div className="container mt-3">
        <div className="row list-group">
          <div className="list-group-item active z-index-down">
            <div className="row ">
              <div className="col-lg-9">Messages</div>
              <div className="col-lg-3">Actions</div>
            </div>
          </div>
          {data &&
            data.map((item, index) => (
              <div className="list-group-item" key={index}>
                <ReqModal modal={modal} toggle={toggle} item={item} />
                <div className="row">
                  <div className="col-lg-9 border-right">
                    {`Dr ${item.from} who is a ${item.specialization} from ${item.city}  wants to access your records`}
                  </div>
                  <div className="col-lg-3">
                    <button className="btn btn-success">
                      <FaCheck />
                    </button>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => deletereq(item._id)}
                    >
                      <FaTrashAlt />
                    </button>
                    <button className="btn btn-primary ml-2" onClick={toggle}>
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {!data && (
            <div className="alert alert-warning">
              No requests for you today.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
});
export default connect(mapStateToProps)(DoctorReq);