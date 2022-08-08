import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Helmet } from "react-helmet";

function Partner() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Ashok Leyland Partner Price in Hyderabad | Mileage & Specifications"
        />
        <meta
          name="description"
          content="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Partner Price, Specifications, Features & Mileage"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Partner Price in Hyderabad | Mileage & Specifications"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Partner Price in Hyderabad | Mileage & Specifications"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg"
        />
        <title>
          Ashok Leyland Partner Price in Hyderabad | Mileage & Specifications
        </title>
      </Helmet>
      <PartnerBanner />
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <Link to="/partner-4-tyre-commercial-truck-on-road-price-in-hyderabad">
              <img
                src={require("../img/vehicles/partner-4.webp")}
                className="w-100"
                alt="partner-4"
              />
              <h4 className="bg-secondary py-3 text-center text-white">
                Partner 4 Tyre
              </h4>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/partner-6-tyre-commercial-truck-on-road-price-in-hyderabad">
              <img
                src={require("../img/vehicles/partner-6.webp")}
                className="w-100"
                alt="partner-6"
              />
              <h4 className="bg-secondary py-3 text-center text-white">
                Partner 6 Tyre
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const PartnerBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/partner-banner.webp")}
        alt="partner-banner"
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
              Light Commercial Vehicles (LCV) / Partner Commercial Truck on road
              price in hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Partner;
