import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import {  FaTrashAlt } from "react-icons/fa";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import { getaccessList, revokeAccessFrom } from "../../utils/accessRequests";
import Web3 from "web3";


let list =[]
function AccessList({ user, isLoggedIn, logoutUser,medichain }) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [acc, setAcc] = useState(null);

  console.log(user)
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const fetchData=async()=>{

    setLoading(true)

    getaccessList(user._id).then(res=>{
      console.log(res)
      if (res.success) {
      setData(res.data[0].accesslist);
      toast.success("Data shown")
    } else {
      setData([])
      toast.warning("No Access given yet")
    }})
  }

  const revokeAccess = (from, account) => {
    revokeAccessFrom(from,user._id).then(res=>{
      if(res.success){
        toast.info("Access Removing")
        medichain.methods
          .revokeAccess(account)
          .send({ from: acc })
          .on("transactionHash", (hash) => {
            console.log(hash);
            toast.success("Success")
            fetchData()
          });
      }
      else{
        toast.error("Cannot remove access")
      }
    })
    


  };


  async function getAccount() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = await window.web3;
      const accounts = await web3.eth.getAccounts();
      toast.success("Account found");
      console.log(accounts);
      setAcc(accounts[0]);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      toast.error("Non-Ethereum browser detected.");
    }
  }
  
  
  
  
  useEffect(() => {
    fetchData();
    getAccount()
  }, []);





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
          {data &&
            data.map((item, index) => (
              <div key={index} className="list-group-item">
                <div className="row">
                  <div className="col-lg-6 border-right">
                    <p>{item.name}</p>
                  </div>
                  <div className="col-lg-3 border-right text-center">
                    <p>{item.date}</p>
                  </div>
                  <div className="col-lg-3 text-center">
                    <button onClick={()=>revokeAccess(item._id,item.account)} className="btn btn-danger">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
