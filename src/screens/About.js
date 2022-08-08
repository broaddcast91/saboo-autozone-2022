import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Helmet } from 'react-helmet'
function About() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Ashok Leyland Authorized Dealers in Hyderabad | Saboo AutoZone"
        />
        <meta
          name="description"
          content="Saboo AutoZone is leading Ashok Leyland authorized dealers in Hyderabad, Telangana. Ashok Leyland light commercial vehicles, trucks & buses are the leading brand in light commercial vehicle segment in India."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Authorized Dealers in Hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Authorized Dealers in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="og:description"
          content="Saboo AutoZone is leading Ashok Leyland authorized dealers in Hyderabad, Telangana. Ashok Leyland light commercial vehicles, trucks & buses are the leading brand in light commercial vehicle segment in India."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-about-us.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Authorized Dealers in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="twitter:description"
          content="Saboo AutoZone is leading Ashok Leyland authorized dealers in Hyderabad, Telangana. Ashok Leyland light commercial vehicles, trucks & buses are the leading brand in light commercial vehicle segment in India."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-about-us.jpg"
        />
      </Helmet>
      <AboutBanner />
      <div className="container my-5">
        <p>
          Saboo Autozone Pvt. Ltd. headquartered in Hyderabad, Telangana, is an
          automotive services company that operates Ashok Leyland light
          commercial vehicle dealerships. First established It’s dealerships in
          Hyderabad during 2013 they have gone on to sell 15,000+ Vehicles,
          establishing itself as a mainstay of the LCV sector of Hyderabad.
        </p>
        <p>
          With an excellent track record for the impeccable quality of our
          service and customer satisfaction, we look forward to growing in a
          dynamic business environment and keep up with the need to anticipate
          and embrace change, and continuously reinvent ourselves. The Saboo
          Autozone family has grown to 250+ employees that operate 13
          Dealerships and 6 Service outlets in and around Hyderabad.
        </p>
        <p>
          Saboo Autozone leadership comprises of seasoned automobile
          entrepreneurs with more than 4 decades of experience dealing in the
          domain of automobiles in Hyderabad. Directors of Saboo Autozone Pvt.
          Ltd. are Deepal Saboo Adeppa and Meetal Boob.
        </p>
      </div>
    </>
  );
}

const AboutBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/vehicles-banner.webp")}
        alt="vehicles-banner"
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
              About us
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
