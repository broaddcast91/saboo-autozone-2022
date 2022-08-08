import React from 'react'
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { serviceLocation } from "../json/ServiceLocation";
import { MdPhoneInTalk } from "react-icons/md";

function ServiceOutlets() {
    return (
        <>
          <img className="mw-100 w-100" src={require("../img/outlets-banner.webp")} alt="outlets-banner"/>
          <div className="container-fluid bg-white py-3 shadow-sm">
            <div className="container">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link className="text-decoration-none text-black" to="/">
                    <IoIosHome /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Showrooms
                </li>
              </ol>
            </div>
          </div>
          <ServiceOutlet />
        </>
      );
}
const ServiceOutlet = () => {
    return (
      <div className="container my-5">
        <h3 className="text-center mb-5">Service Outlets</h3>
        <div className="row">
          {serviceLocation.map((location, index) => (
              <div className="col-lg-4 col-md-6 my-4" key={index}>
              <div className="card shadow h-100">
                <div className="card-body" style={{ marginTop: '-50px' }}>
                  <div className="map shadow mb-2">
                    <iframe
                      src={location.link}
                      className='w-100 h-100'
                      title='map'
                    ></iframe>
                  </div>
                  <div className="box shadow p-3">
                    <h6>Saboo Autozone - {location.location}</h6>
                    <p>
                      <small>
                      {location.address}
                      </small>
                    </p>
                    <small>
                      <MdPhoneInTalk />&nbsp;+91 91002 55555
                    </small>
                    <br />
                    <small>
                      <FaRegEnvelope />&nbsp;sales@sabooautozone.com
                    </small>
                    <br />
                    <small>
                      <IoPricetagsOutline />&nbsp;Showroom
                    </small><br/>
                    <small > 
                      <a href={location.direction} className="text-black">
                      <FaTelegramPlane />&nbsp;Direction
                      </a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ServiceOutlets
