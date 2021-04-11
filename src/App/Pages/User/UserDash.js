import React, { useState, useEffect } from "react";
import Web3 from "web3";

import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileEarmarkPlus, BsFileText } from "react-icons/bs";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Link, Redirect } from "react-router-dom";
import ModalImage from "react-modal-image";
import r2 from "../../Assets/r1.jpg";
import Medichain from "../../../Ethereum/abis/Medichain.json";
import { loadMedichain } from "../../Redux/Actions/medichain";

//Declare IPFS
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

var i = [];

function UserDash({ user, logoutUser, isLoggedIn, medichain, loadMedichain }) {
  const [loading, setloading] = useState(false);

  const [state, setState] = useState(null);
  const [images, setImages] = useState([]);
  const [account, setAccount] = useState(null);
  const [medichainContract, setMedichainContract] = useState(null);
  const [count, setCount] = useState(0);
  const [buffer, setBuffer] = useState({
    buffer: null,
  });
  const [description, setDescription] = useState("");
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  console.log(i);
  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    console.log("File", file);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };

  const uploadImage = async (description) => {
    setloading(true);

    console.log("Submitting file to ipfs...");
    console.log("Buffer", buffer);
    //adding file to the IPFS
    ipfs.add(buffer, (error, result) => {
      console.log("Ipfs result", result);
      if (error) {
        console.error(error);
        return;
      }

      medichainContract.methods
        .uploadImage(result[0].hash, description)
        .send({ from: account })
        .on("transactionHash", (hash) => {
          console.log(hash);
          setloading(false);
        });
    });
  };

  //load web3 data
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  console.log(state);
  const loadBlockchainData = async () => {
    setloading(true);

    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    console.log("Accont", account);
    // Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = Medichain.networks[networkId];
    if (networkData) {
      console.log("got network");
      const medichainabis = new web3.eth.Contract(
        Medichain.abi,
        networkData.address
      );
      //adds abis to local state
      setMedichainContract(medichainabis);
      //adds abis to global state
      loadMedichain({ medichainabis, account });
      const imagesCount = await medichainabis.methods.imageCount().call();
      console.log(imagesCount, "Images count");
      // console.log(typeof imagesCount);
      setCount(imagesCount);
      // Load images
      console.log("Before", images);
      for (var i = 1; i <= imagesCount; i++) {
        const image = await medichainabis.methods.images(i).call();
        // setImages([...images, image]);
        images[i - 1] = image;
        console.log(i, image);
        console.log("after", images);
      }
      setloading(false);
    } else {
      window.alert("Decentragram contract not deployed to detected network.");
    }
    console.log(images);
  };

  useEffect(async () => {
    await loadWeb3();
    await loadBlockchainData();
  }, []);

  console.log(medichainContract);
  function getBlockchaindata() {}

  // if (!isLoggedIn) {
  //   return <Redirect to="/user/login" />;
  // }
  return (
    <div className="w-100 min-vh-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} doctor={false} />
      <Navbar sidebarToggler={openNav} name={user.name} />

      <div id="main">
        <div className="container bg-light">
          <div className="container ">
            <div className="w-100 d-flex justify-content-between align-items-center p-3 bg-white mb-3 ">
              <h3>User Dashboard</h3>
              <Link to="/user/profile">Visit Profile</Link>
            </div>
            <div className="w-100 my-3">
              <div className="card border-0 mt-3">
                <div className="card-body d-flex justify-content-between align-items-center ">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      uploadImage(description);
                    }}
                  >
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .bmp, .gif"
                      onChange={captureFile}
                    />
                    <div className="form-group mr-sm-2">
                      <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        placeholder="Description of your report"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block btn-lg"
                    >
                      Upload your image
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="card border-0 rounded shadow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <BsFileText className="mr-3" />
                      Your Uploaded Records
                    </h3>
                    {loading && "Loading"}
                    <div className="border-top mb-3"></div>

                    <div className="row">
                      {!loading &&
                        images.map((item, index) => (
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
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
  medichain: state.medichain.medichain,
});
export default connect(mapStateToProps, { logoutUser, loadMedichain })(
  UserDash
);
