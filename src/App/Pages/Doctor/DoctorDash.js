import React, { useState ,useEffect} from "react";
import Web3 from "web3";

import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileText } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Redirect } from "react-router-dom";
import ModalImage from "react-modal-image";
import r2 from "../../Assets/r1.jpg";


function DoctorDash({ user, logoutUser, isLoggedIn,medichain }) {
  
  const[account,setAccount]= useState(null)
  const [flag,setFlag]=useState(false)
  const [images, setImages] = useState([]);
  const [loading,setLoading] = useState(false)

  const[count,setCount]=useState(0)
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const checkAccess=async()=>{
    console.log(user)
    
      const point = await medichain.methods.checkGranted(user.account).call();
      if (point) {
        toast.success("Access Granted")
        setFlag(true)
            console.log(medichain);
            const imagesCount = await medichain.methods.imageCount().call();
            console.log(imagesCount, "Images count");

            setCount(imagesCount);
            // Load images

            for (var i = 1; i <= imagesCount; i++) {
              const image = await medichain.methods.images(i).call();
              // setImages([...images, image]);
              // images[i - 1] = image;
              setImages([...images, image]);
            }
            setLoading(false);
      } else {
        toast.warning("No access")
        setFlag(false)
      }
    
  }



  console.log(images)
  const loadWeb3 = async () => {
      console.log(window.ethereum);
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = await window.web3;
        const accounts = await web3.eth.getAccounts();
        toast.success("Ethereum Account detected!");
        console.log(accounts[0]);
        setAccount(accounts[0])
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        toast.error("Non-Ethereum browser detected.");
      }
    };




    // useEffect(async() => {
    //   await loadWeb3();
    //   await checkAccess()
    // }, []);


  if (!isLoggedIn) {
    return <Redirect to="/doctor/login" />;
  }

  console.log(medichain)
  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} doctor={true} logoutUser={logoutUser} />
      <Navbar sidebarToggler={openNav} name={user.name}  />

      <div id="main">
        <div className="container bg-light">
          <div className="container ">
            <div className="w-100 p-3 bg-white mb-3 d-flex justify-content-between align-items-center">
              <h3>Doctor Dashboard</h3>
              <button className="btn btn-danger" onClick={() => checkAccess()}>
                Check Records
              </button>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="card border-0 rounded shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BsFileText className="mr-3" />
                      Available Records
                    </h3>
                    <div className="border-top mb-3"></div>

                    <div className="row"></div>

                    <div className="row">
                      {images.map((item, index) => (
                        <div key={index} className="col-lg-4 p-4 ">
                          <div className=" card ">
                            <ModalImage
                              small={`https://ipfs.infura.io/ipfs/${item.hash}`}
                              medium={`https://ipfs.infura.io/ipfs/${item.hash}`}
                              large={`https://ipfs.infura.io/ipfs/${item.hash}`}
                              alt={item.description}
                              showRotate={true}
                              hideZoom={true}
                              className="w-100 h-100"
                            />
                            <div className="card-footer">
                              <h5>{item.description}</h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
  isLoggedIn: state.doctor.isLoggedIn,
  user: state.doctor.user,
  medichain: state.medichain.medichain,
});
export default connect(mapStateToProps, { logoutUser })(DoctorDash);
