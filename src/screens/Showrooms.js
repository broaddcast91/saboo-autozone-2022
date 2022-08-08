import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { showroomLocation } from "../json/ShowroomLocation";
import { MdPhoneInTalk } from "react-icons/md";
import { Helmet } from "react-helmet";

function Showrooms() {
  return (
    <>
      <Helmet>
        <title>Ashok Leyland Showrooms in Hyderabad | Saboo AutoZone</title>
        <meta
          name="title"
          content="Ashok Leyland Showrooms in Hyderabad | Saboo AutoZone"
        />
        <meta
          name="description"
          content="Saboo AutoZone is the leading Ashok Leyland dealers in Hyderabad, Telangana. Visit our web site https://sabooautozone.com/az/ or call 9100255555 to know the locations of Ashok Leyland Service Centers, Ashok Leyland Showrooms."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Showrooms in Hyderabad, Telangana"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Showrooms in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="og:description"
          content="Saboo AutoZone is the leading Ashok Leyland dealers in Hyderabad, Telangana. Visit our web site https://sabooautozone.com/az/ or call 9100255555 to know the locations of Ashok Leyland Service Centers, Ashok Leyland Showrooms."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-outlets.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Showrooms in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="twitter:description"
          content="Saboo AutoZone is the leading Ashok Leyland dealers in Hyderabad, Telangana. Visit our web site https://sabooautozone.com/az/ or call 9100255555 to know the locations of Ashok Leyland Service Centers, Ashok Leyland Showrooms."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-outlets.jpg"
        />
      </Helmet>
      <img
        className="mw-100 w-100"
        src={require("../img/outlets-banner.webp")}
        alt="outlets-banner"
      />
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
      <ShowroomOutlets />
    </>
  );
}

const ShowroomOutlets = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-5">Showroom Outlets</h3>
      <div className="row">
        {showroomLocation.map((location, index) => (
          <div className="col-lg-4 col-md-6 my-4" key={index}>
            <div className="card shadow h-100">
              <div className="card-body" style={{ marginTop: "-50px" }}>
                <div className="map shadow mb-2">
                  <iframe src={location.link} className="w-100 h-100" title="map"></iframe>
                </div>
                <div className="box shadow p-3">
                  <h6>Saboo Autozone - {location.location}</h6>
                  <p>
                    <small>{location.address}</small>
                  </p>
                  <small>
                    <MdPhoneInTalk />
                    &nbsp;+91 91002 55555
                  </small>
                  <br />
                  <small>
                    <FaRegEnvelope />
                    &nbsp;sales@sabooautozone.com
                  </small>
                  <br />
                  <small>
                    <IoPricetagsOutline />
                    &nbsp;Showroom
                  </small>
                  <br />
                  <small>
                    <a href={location.direction} className="text-black">
                      <FaTelegramPlane />
                      &nbsp;Direction
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

export default Showrooms;
