import React from "react";

export default function UserLogin() {
  return (
    <div className="container-fluid min-vh-100 ">
      <div className="row">
        <div className="col-lg-4 min-vh-100 bg-primary justify-content-center align-items-center d-flex flex-column text-white ">
          <h1>Welcome User,</h1>
          <p>
            Medichain is a Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled
          </p>
        </div>
        <div className="col-lg-8 min-vh-100 bg-white justify-content-center align-items-center d-flex">
          <div className="container my-auto text-center">
            <h1 className="mb-5">Login to Medichain</h1>
            <div className="">
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-0 bg-light rounded"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="border-0 bg-light form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-25 rounded button-primary mx-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
