import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import api from "../utils/api";

export default function Welcome() {
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
