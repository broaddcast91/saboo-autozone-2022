import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Helmet } from "react-helmet";

function BadaDost() {
  return (
    <>
      <Helmet>
        <title>Ashok Leyland Bada Dost on Road Price in Hyderabad</title>
        <meta
          name="title"
          content="Ashok Leyland Bada Dost on Road Price in Hyderabad | Saboo AutoZone"
        />
        <meta
          name="description"
          content="Ashok Leyland Bada Dost Light Commercial Vehicle will be available in two variants -i3 and i4.  Bada Dost 'i3 LS' is priced at INR 8.75 lakhs &  Bada Dost i4 priced at 8.52 lakh.  For more info about Bada Dost features & specifications call us 91002 55555."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Bada Dost on Road Price in Hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Bada Dost on Road Price in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Bada Dost Light Commercial Vehicle will be available in two variants -i3 and i4.  Bada Dost 'i3 LS' is priced at INR 8.75 lakhs &  Bada Dost i4 priced at 8.52 lakh.  For more info about Bada Dost features & specifications call us 91002 55555."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i3.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Bada Dost on Road Price in Hyderabad | Saboo AutoZone"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Bada Dost Light Commercial Vehicle will be available in two variants -i3 and i4.  Bada Dost 'i3 LS' is priced at INR 8.75 lakhs &  Bada Dost i4 priced at 8.52 lakh.  For more info about Bada Dost features & specifications call us 91002 55555."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i3.jpg"
        />
      </Helmet>
      <BadaDostBanner />
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <Link to="/bada-dost-i4-on-road-price-in-hyderabad">
              <img
                src={require("../img/vehicles/Ashok-Leyland-Bada-Dost-i4-Price-in-Hyderabad.webp")}
                className="w-100"
                alt="Bada-Dost-i4"
              />
              <h4 className="bg-secondary py-3 text-center text-white">
                Bada Dost i4
              </h4>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/bada-dost-i3-on-road-price-in-hyderabad">
              <img
                src={require("../img/vehicles/Ashok-Leyland-Bada-Dost-i3-Price.webp")}
                className="w-100"
                alt="Bada-Dost-i3"
              />
              <h4 className="bg-secondary py-3 text-center text-white">
                Bada Dost i3
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const BadaDostBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/Bada-Dost-banner.webp")}
        alt="Bada-Dost-banner"
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
              Light Commercial Vehicles (LCV) / Bada dost on road price in
              hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default BadaDost;
