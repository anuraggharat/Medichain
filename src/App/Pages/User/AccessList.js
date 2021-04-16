import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileEarmarkPlus, BsFileText } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";

let list =[]
function AccessList({ user, isLoggedIn, logoutUser,medichain }) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const fetchData=async()=>{
    const noofDoc = await medichain.methods.doctorCount().call();
    setCount(noofDoc)
    const mylist = await await medichain.methods
      .accessList("0xaf50f3a65b5a98600d42ccd6959bc63b8e2dc974")
      .call();
    console.log(mylist)
    // for(var i =0;i<=count ; i ++){
    //   const doc = await medichain.methods.accessList(i).call();
    //   console.log(doc)
    //   // list[i-1]= doc
    // }
    setData([...list])
  }

  console.log(data)
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
      <Navbar sidebarToggler={openNav} name={user.name} />
      <div className="container mt-5 p-0">
        <Link to="/user/dash" className="link">
          Go back Home
        </Link>
      </div>
      <div className="container mt-3">
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-lg-6 border-right">
                <h3>Doctor Name</h3>
              </div>
              <div className="col-lg-3 border-right text-center">
                <h3>Date</h3>
              </div>
              <div className="col-lg-3 text-center">
                <h3>Actions</h3>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="row">
              <div className="col-lg-6 border-right">
                <p>Doctor Name</p>
              </div>
              <div className="col-lg-3 border-right text-center">
                <p>Date</p>
              </div>
              <div className="col-lg-3 text-center">
                <p>Actions</p>
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
  medichain:state.medichain.medichain
});
export default connect(mapStateToProps, { logoutUser })(AccessList);
