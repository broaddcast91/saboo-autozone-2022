import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

function Outlets() {
  return (
    <>
      <OutletsBanner />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <Link to="/showrooms" className="text-white text-center">
              <img
                src={require("../img/outlets-sales.webp")}
                alt="outlets-sales"
                style={{ width: "100%" }}
              />
              <h4 className="bg-secondary py-3">Showrooms</h4>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/service-outlets" className="text-white text-center">
              <img
                src={require("../img/outlets-services.webp")}
                alt="outlets-services"
                style={{ width: "100%" }}
              />
              <h4 className="bg-secondary py-3 ">Service Centers</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const OutletsBanner = () => {
  return (
    <>
      <img className="mw-100" src={require("../img/outlets-banner.webp")} alt="outlets-banner"/>
      <div className="container-fluid bg-white py-3 shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none text-black" to="/">
                <IoIosHome /> Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Outlets
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Outlets;
