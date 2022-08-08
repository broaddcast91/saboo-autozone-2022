import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaAngleDoubleRight,
  FaPinterest,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-light border border-top-5 py-5">
        <div className="container">
          <div className="row">
            {/* Starts */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              <div className="simple-text dark padding-sm">
                <div className="footer">
                  <address>
                    <p className="py-2">
                      <MdPhoneInTalk />
                      &nbsp;
                      <a href="tel:9100255555">+91 91002 55555</a>
                    </p>
                    <p className="py-2">
                      <FaEnvelope />
                      &nbsp;
                      <a href="mailto:sales@sabooautozone.com">
                        sales@sabooautozone.com
                      </a>
                    </p>
                    <p className="py-2">
                      <FaEnvelope />
                      &nbsp;
                      <a href="mailto:service@sabooautozone.com">
                        service@sabooautozone.com
                      </a>
                    </p>
                  </address>
                </div>
              </div>
            </div>

            {/* Starts */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              <h4 className="webintern_footer_title h5 text-uppercase">
                <small>Vehicles</small>
                <div className="c09ew341 mt-1 mb-3"></div>
              </h4>
              <ul className="webintern-footer-list">
                <li>
                  <Link to="/bada-dost-i4-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland BADA DOST i4
                  </Link>
                </li>
                <li>
                  <Link to="/bada-dost-i3-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland BADA DOST i3
                  </Link>
                </li>
                <li>
                  <Link to="/bada-dost-i3-plus-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland BADA DOST i3+
                  </Link>
                </li>
                <li>
                  <Link to="/dost-plus-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland DOST+
                  </Link>
                </li>
                <li>
                  <Link to="/dost-strong-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland DOST STRONG
                  </Link>
                </li>
                <li>
                  <Link to="/dost-lite-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland DOST LiTE
                  </Link>
                </li>
              </ul>
            </div>

            {/* Starts */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              <h4 className="webintern_footer_title h5 text-uppercase">
                <small>Vehicles</small>
                <div className="c09ew341 mt-1 mb-3"></div>
              </h4>
              <ul className="webintern-footer-list">
                <li>
                  <Link to="/dost-cng-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland DOST CNG
                  </Link>
                </li>
                <li>
                  <Link to="/partner-4-tyre-commercial-truck-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland PARTNER 4 Tyre
                  </Link>
                </li>
                <li>
                  <Link to="/partner-6-tyre-commercial-truck-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland PARTNER 6 Tyre
                  </Link>
                </li>
                <li>
                  <Link to="/mitr-school-bus-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland MiTR School Bus
                  </Link>
                </li>
                <li>
                  <Link to="/mitr-staff-bus-on-road-price-in-hyderabad">
                    <FaAngleDoubleRight /> Ashok Leyland MiTR Staff Bus
                  </Link>
                </li>
              </ul>
            </div>

            {/* Starts */}
            <div className="col-xl-3 col-lg-8 col-md-6 mb-2">
              <div className="marg-sm-b30"></div>
              <h4 className="webintern_footer_title h5 text-uppercase">
                <small>Subscribe Newsletter</small>
                <div className="c09ew341 mt-1 mb-3"></div>
              </h4>
              <form>
                <div className="tt-subscribe d-flex">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <Button className="btn-danger" type="submit">
                    <FaEnvelope />
                  </Button>
                </div>
              </form>

              <ul className="tt-socail d-flex mt-4 p-0">
                <li className="me-2">
                  <a
                    href="https://www.facebook.com/SabooAutozoneVehicles"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="me-2">
                  <a href="https://twitter.com/sabooautozone1" target="_blank">
                    <FaTwitter />
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="https://www.instagram.com/sabooautozone/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="https://www.youtube.com/channel/UCyLomTBP-yrMhEuy57iV4xA"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="https://www.linkedin.com/company/sabooautozone"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="me-2">
                  <a
                    href="https://in.pinterest.com/sabooautozone/_created/"
                    target="_blank"
                  >
                    <FaPinterest />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
}

const CopyRight = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#0d2034" }}>
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <p className="text-white footer-text">
              <Link to="/" className="text-white text-decoration-none">
                Terms &amp; Conditions
              </Link>{" "}
              | &nbsp;
              <Link
                to="/"
                href="privacy-policy.php"
                className="text-white text-decoration-none"
              >
                Privacy Policy
              </Link>{" "}
              <br />©{" "}
              <script type="text/javascript">
                var year = new Date();document.write(year.getFullYear());
              </script>
              {new Date().getFullYear()} All Rights Reserved by{" "}
              <a
                href="https://www.sabooautozone.com/"
                className="text-white text-decoration-none"
              >
                Saboo Autozone
              </a>
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <p className="text-white text-end footer-text">
              Designed &amp; Developed by{" "}
              <a
                target="_blank"
                href="https://www.broaddcast.com/"
                className="text-white text-decoration-none"
              >
                Broaddcast Business solutions LLP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
