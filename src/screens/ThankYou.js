import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga'


function ThankYou() {
  useEffect(() => {
    ReactGA.initialize("GTM-T6XRFK3");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Helmet>
        <title>Thanks for Contacting Authorized Ashok Leyland Dealers</title>
        <meta
          name="title"
          content="Thanks for Contacting Authorized Ashok Leyland Dealers"
        />
        <meta
          name="description"
          content="Thank you for sharing your concern & contact details with us. Our team member will connect with you in a short while to take this forward. Get in touch with Saboo AutoZone for best deals on Ashok Leyland Bada Dost, Dost +, Dost CNG, Dost Strong, Partner, Mitr School bus, Mitr Staff bus."
        />
        <meta name="keywords" content="Thank you for contacting us" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Thanks for Contacting Authorized Ashok Leyland Dealers"
        />
        <meta
          property="og:description"
          content="Thank you for sharing your concern & contact details with us. Our team member will connect with you in a short while to take this forward. Get in touch with Saboo AutoZone for best deals on Ashok Leyland Bada Dost, Dost +, Dost CNG, Dost Strong, Partner, Mitr School bus, Mitr Staff bus."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-home.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Thanks for Contacting Authorized Ashok Leyland Dealers"
        />
        <meta
          property="twitter:description"
          content="Thank you for sharing your concern & contact details with us. Our team member will connect with you in a short while to take this forward. Get in touch with Saboo AutoZone for best deals on Ashok Leyland Bada Dost, Dost +, Dost CNG, Dost Strong, Partner, Mitr School bus, Mitr Staff bus."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-home.jpg"
        />
      </Helmet>
      <div className="text-center" style={{ margin: "112px 0" }}>
        <h1 style={{ fontSize: "130px", color: "green" }}>
          <ImCheckmark />
        </h1>
        <h4>THANK YOU!</h4>
        <p>
          Your Enquiry has been Processed Successfully. Our Executive will get
          in touch with you shortly.
        </p>
        <Link to="/">
          <BsArrowRight /> &nbsp;Back to Home
        </Link>
      </div>
    </>
  );
}

export default ThankYou;
