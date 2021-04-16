import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import Web3 from "web3";
import { connect } from "react-redux";
import { putaccesslist } from "../utils/accessRequests";

function DoctorProfileModal({ item, user,doctor, toggle, medichain }) {
  const [acc, setAcc] = useState(null);

  console.log(user,"this is user");
  console.log('====================================');
  console.log(item,"this is doctor");
  console.log('====================================');
  const d = new Date();
  const day = String(d.getDate());
  const month = String(d.getMonth() + 1);
  const year = String(d.getFullYear());

  async function getAccount() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = await window.web3;
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setAcc(accounts[0]);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      toast.error("Non-Ethereum browser detected.");
    }
  }

  const logAccess=async(mydata)=>{
    putaccesslist(mydata).then(res=>{
      if(res.success){
        toast.success("Database Updated")
      }
      else{
        toast.error("Try Again")
      }
    });
  }

  const grantAccess = async () => {
    const date = day + "/" + month + "/" + year;
    medichain.methods
      .addDoctor(item.account, item.name, date)
      .send({ from: acc })
      .on("transactionHash", (hash) => {
        console.log(hash);
        toggle();
        toast.warning("Access granted");
        logAccess({ id: user._id,doctor:item.name,account:item.account,date });
      });

  };

  const seelist=async()=>{
    const accesscount = await medichain.methods.doctorCount().call();
    console.log(accesscount)
  }


  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div className="container w-100">
      <div className="card border-0 ">
        <div className="card-body">
          <h3 className="card-title text-primary">
            <BiUserCircle className="mr-3 text-primary" />
            {doctor ? "Doctor Profile" : "User Profile"}
          </h3>
          <div className="border-top mb-3"></div>
          <ul className="list-group p-0 list-group-flush">
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold m-0  ">Profile Name</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.name}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Email Address</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.email}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4 ">
                  <p className="font-weight-bold">Age</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.age}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Phone Number</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.phoneno}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Gender</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.gender}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">City</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.city}</p>
                </div>
              </div>
            </li>
            {doctor && (
              <li className="list-group-item pl-0">
                <div className="row">
                  <div className="col-lg-4">
                    <p className="font-weight-bold">Specialization</p>
                  </div>
                  <div className="col-lg-8 text-muted">
                    <p>{item.specialization}</p>
                  </div>
                </div>
              </li>
            )}

            <li className="list-group-item pl-0">
              <div className="row">
                <div className="col-lg-4">
                  <p className="font-weight-bold">Address</p>
                </div>
                <div className="col-lg-8 text-muted">
                  <p>{item.account ? item.account : ""}</p>
                </div>
              </div>
            </li>
            <li className="list-group-item pl-0">
              <div className="container text-center ">
                <button
                  className="btn mx-auto btn-primary"
                  onClick={() => grantAccess()}
                >
                  Provide Access
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  medichain: state.medichain.medichain,
  user:state.user.user
});
export default connect(mapStateToProps)(DoctorProfileModal);
