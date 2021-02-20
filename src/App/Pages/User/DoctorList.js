import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";
import { BsFileEarmarkPlus, BsFileText } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
import { Redirect } from "react-router-dom";

export default function DoctorList() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div className="min-vh-100 w-100 bg-light">
      <SideBar closenav={closeNav} logoutUser={logoutUser} />
      <Navbar sidebarToggler={openNav} name={"Anurag"} />
      <div className="container mt-5">
        <div className="row">
          <div class="list-group w-100">
            <div class="bg-primary text-white list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="lead my-auto font-weight-normal">NAME</p>
                </div>
                <div className="col-lg-3">
                  <p className="lead my-auto font-weight-normal">Email</p>
                </div>
                <div className="col-lg-2">
                  <p className="lead my-auto font-weight-normal">Phone</p>
                </div>
                <div className="col-lg-3">
                  <p className="lead my-auto font-weight-normal">City</p>
                </div>
              </div>
            </div>
            <div class=" list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="my-auto text-dark font-weight-regular">
                    Dr. Anurag Gharat
                  </p>
                  <p className="text-muted my-auto ">Sexologist</p>
                </div>
                <div className="col-lg-3">
                  <p className="my-auto text-dark">anuraggharat55@gmail.com</p>
                </div>
                <div className="col-lg-2">
                  <p className="text-dark my-auto">7745050822</p>
                </div>
                <div className="col-lg-2 text-wrap">
                  <p className="text-dark my-auto">Alibag</p>
                </div>
              </div>
            </div>
            <div class=" list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="my-auto text-dark font-weight-regular">
                    Dr. Anurag Gharat
                  </p>
                  <p className="text-muted my-auto ">Sexologist</p>
                </div>
                <div className="col-lg-3">
                  <p className="my-auto text-dark">anuraggharat55@gmail.com</p>
                </div>
                <div className="col-lg-2">
                  <p className="text-dark my-auto">7745050822</p>
                </div>
                <div className="col-lg-2 text-wrap">
                  <p className="text-dark my-auto">Alibag</p>
                </div>
              </div>
            </div>
            <div class=" list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="my-auto text-dark font-weight-regular">
                    Dr. Anurag Gharat
                  </p>
                  <p className="text-muted my-auto ">Sexologist</p>
                </div>
                <div className="col-lg-3">
                  <p className="my-auto text-dark">anuraggharat55@gmail.com</p>
                </div>
                <div className="col-lg-2">
                  <p className="text-dark my-auto">7745050822</p>
                </div>
                <div className="col-lg-2 text-wrap">
                  <p className="text-dark my-auto">Alibag</p>
                </div>
              </div>
            </div>
            <div class=" list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="my-auto text-dark font-weight-regular">
                    Dr. Anurag Gharat
                  </p>
                  <p className="text-muted my-auto ">Sexologist</p>
                </div>
                <div className="col-lg-3">
                  <p className="my-auto text-dark">anuraggharat55@gmail.com</p>
                </div>
                <div className="col-lg-2">
                  <p className="text-dark my-auto">7745050822</p>
                </div>
                <div className="col-lg-2 text-wrap">
                  <p className="text-dark my-auto">Alibag</p>
                </div>
              </div>
            </div>
            <div class=" list-group-item list-group-item-action ">
              <div className="row ">
                <div className="col-lg-4">
                  <p className="my-auto text-dark font-weight-regular">
                    Dr. Anurag Gharat
                  </p>
                  <p className="text-muted my-auto ">Sexologist</p>
                </div>
                <div className="col-lg-3">
                  <p className="my-auto text-dark">anuraggharat55@gmail.com</p>
                </div>
                <div className="col-lg-2">
                  <p className="text-dark my-auto">7745050822</p>
                </div>
                <div className="col-lg-2 text-wrap">
                  <p className="text-dark my-auto">Alibag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
