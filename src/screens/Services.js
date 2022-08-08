import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

function Services() {
  return (
    <>
      <ServiceBanner />
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <Link to="/finance">
              <img
                src={require("../img/services-finance.webp")}
                style={{ width: "100%" }}
                alt="services-finance"
              />
            </Link>
          </div>
          <div className="col-6">
            <Link to="/insurance">
              <img
                src={require("../img/services-insurance.webp")}
                style={{ width: "100%" }}
                alt="services-insurance"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const ServiceBanner = () => {
  return (
    <>
      <img className="mw-100 w-100" src={require("../img/services-banner.webp")} alt="services-banner"/>
      <div className="container-fluid bg-white py-3 shadow-sm">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none text-black" to="/">
                <IoIosHome /> Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Services
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Services;
