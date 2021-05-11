import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import api from "../utils/api";
import Web3 from "web3";
import { connect } from "react-redux";
import { loadMedichain } from "../Redux/Actions/medichain";
import Medichain from "../../Ethereum/abis/Medichain.json";
import { toast } from "react-toastify";











function Welcome({ loadMedichain }) {
  const [loading, setloading] = useState(false);

  const [account, setAccount] = useState(null);
  const [medichainContract, setMedichainContract] = useState(null);

  // load web3

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

  const loadBlockchainData = async () => {
    setloading(true);

    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    console.log(accounts)

    console.log("Accont", account);

    // Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = Medichain.networks[networkId];
    if (networkData) {
      toast.info("Network deployed!");
      const medichainabis = new web3.eth.Contract(
        Medichain.abi,
        networkData.address
      );
      //adds abis to local state
      setMedichainContract(medichainabis);
      //adds abis to global state
      loadMedichain({ medichainabis, account });
    }
    else{
      toast.error("Medichain Not deployed")
    }
  };

  useEffect(async() => {
    await loadWeb3();
    await loadBlockchainData();
  }, []);

  return (
    <div className="w-100 min-vh-100 bg-home d-relative d-flex justify-content-center flex-column text-center">
      <header className="d-flex justify-content-between align-items-center z-100">
        <h3 className="ml-5">MEDICHAIN</h3>
        <div className="d-flex align-items-center">
          <Link to="/user/login" className="active ">
            Login as Patient
          </Link>
          <Link to="/doctor/login" className="active mx-5">
            Login as Doctor
          </Link>
        </div>
      </header>
      <Particles
        className="particle-bg "
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1500,
              },
            },

            line_linked: {
              enable: true,
              opacity: 0.5,
              color: "#fff",
            },
            move: {
              direction: "right",
              speed: 0.3,
            },
            size: {
              value: 2,
            },
            color: {
              value: "#fff",
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="container text-white z-100 ">
        <h1 className="display-1  spaced font-weight-bolder">MEDICHAIN</h1>
        <p className="display-6">
          Meet Medichain! The Decentralized Blockchain based Database for
          storing and managing Medical records!
        </p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  medichain: state.medichain.medichain,
});
export default connect(mapStateToProps, {  loadMedichain })(
  Welcome
);
