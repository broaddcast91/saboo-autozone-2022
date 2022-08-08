import React, { useState } from "react";
import "./Header.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaCaretDown,
  FaCaretRight,
} from "react-icons/fa";

import { MdPhoneInTalk } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const TopHeader = () => {
  return (
    <div
      className="container-fluid py-3"
      style={{ backgroundColor: "#0d2034", color: "white" }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="top-header-left">
          <a
            href="https://www.facebook.com/SabooAutozoneHyderabad"
            target="_blank"
            className="text-white me-2"
          >
            <FaFacebook size={17} className="header-links" />
          </a>
          <a
            href="https://twitter.com/sabooautozone1"
            target="_blank"
            className="text-white me-2"
          >
            <FaTwitter size={17} className="header-links" />
          </a>
          <a
            href="https://www.instagram.com/sabooautozone/"
            target="_blank"
            className="text-white me-2"
          >
            <FaInstagram size={17} className="header-links" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyLomTBP-yrMhEuy57iV4xA"
            target="_blank"
            className="text-white me-2"
          >
            <FaYoutube size={17} className="header-links" />
          </a>
          <a
            href="https://www.linkedin.com/company/sabooautozone"
            target="_blank"
            className="text-white"
          >
            <FaLinkedin size={17} className="header-links" />
          </a>
        </div>
        <div className="top-header-right">
          <a
            href="tel:9100255555"
            className="me-3"
            style={{ color: "white", textDecoration: "none" }}
          >
            <MdPhoneInTalk /> +91 9100255555
          </a>
          <Link
            to="/book-a-service"
            className="btn btn-danger me-3"
            style={{ fontSize: "14px", backgroundColor: "#f9a730" }}
          >
            Book a Service
          </Link>
          <Link
            to="/contact"
            className="btn btn-danger"
            style={{ fontSize: "14px", backgroundColor: "#f9a730" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
const MainHeader = () => {
  let navigate = useNavigate();
  
  function homeClick() {
    navigate("/");
    console.log(window.location.href);
    window.location.reload();
  }
  function vehiclesClick() {
    navigate("/vehicles");
    window.location.reload();
  }
  function servicesClick() {
    navigate("/services");
    window.location.reload();
  }

  function outletsClick() {
    navigate("/outlets");
    window.location.reload();
  }

  function aboutClick() {
    navigate("/about");
    window.location.reload();
  }

  function awardsClick() {
    navigate("/awards");
    window.location.reload();
  }

  function financeClick() {
    navigate("/finance");
    window.location.reload();
  }

  function insuranceClick() {
    navigate("/insurance");
    window.location.reload();
  }

  function showroomsClick() {
    navigate("/showrooms");
    window.location.reload();
  }

  function servicesOutletsClick() {
    navigate("/service-outlets");
    window.location.reload();
  }

  function badaDostClick() {
    navigate("/bada-dost-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function dostI4Click() {
    navigate("/bada-dost-i4-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function dostI3Click() {
    navigate("/bada-dost-i3-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function dostPlus() {
    navigate("/dost-plus-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function dostStrong() {
    navigate("/dost-strong-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function dostLite() {
    navigate("/dost-lite-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function dostCng() {
    navigate("/dost-cng-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function partnerCommercial() {
    navigate("/partner-commercial-truck-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function schoolBus() {
    navigate("/mitr-school-bus-on-road-price-in-hyderabad");
    window.location.reload();
  }

  function staffBus() {
    navigate("/mitr-staff-bus-on-road-price-in-hyderabad");
    window.location.reload();
  }

  const [navbar, setNavbar] = useState(false);

  const fixedNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);
  return (
    <div
      className={
        navbar ? "container-fluid main-header-active" : "container-fluid"
      }
    >
      <div className="container">
        <header className="py-2">
          <div className="nav-container">
            <input type="checkbox" id="check" />

            <div className="logo-container">
              <Link to="/">
                <img
                  src={require("../../img/logo.webp")}
                  height={42}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="header-nav-btn">
              <div className="header-nav-links">
                <ul>
                  <li className="header-nav-link">
                    <Link to="/" >
                      Home
                    </Link>
                  </li>

                  <li className="header-nav-link">
                    <Link to="/vehicles" onClick={vehiclesClick}>
                      Vehicles <FaCaretDown />
                    </Link>
                    <div className="header-dropdown">
                      <ul className="p-0">
                        <li className="header-dropdown-link">
                          <Link to="/bada-dost-on-road-price-in-hyderabad" onClick={badaDostClick}>
                            Ashok Leyland Bada Dost
                            <FaCaretRight />
                          </Link>
                          <div className="header-dropdown second">
                            <ul className="p-0">
                              <li className="header-dropdown-link">
                                <Link to="/bada-dost-i4-on-road-price-in-hyderabad" onClick={dostI4Click}>
                                  Ashok Leyland Bada Dost i4
                                </Link>
                              </li>
                              <li className="header-dropdown-link">
                                <Link to="/bada-dost-i3-on-road-price-in-hyderabad" onClick={dostI3Click}>
                                  Ashok Leyland Bada Dost i3
                                </Link>
                              </li>
                              <div className="arrow"></div>
                            </ul>
                          </div>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/dost-plus-on-road-price-in-hyderabad" onClick={dostPlus}>
                            Ashok Leyland Dost+
                          </Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/dost-strong-on-road-price-in-hyderabad" onClick={dostStrong}>
                            Ashok Leyland Dost Strong
                          </Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/dost-lite-on-road-price-in-hyderabad" onClick={dostLite}>
                            Ashok Leyland Dost LiTE
                          </Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/dost-cng-on-road-price-in-hyderabad" onClick={dostCng}>
                            Ashok Leyland Dost CNG
                          </Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/partner-commercial-truck-on-road-price-in-hyderabad" onClick={partnerCommercial}>
                            Ashok Leyland Partner
                            <FaCaretRight />
                          </Link>
                          <div className="header-dropdown second">
                            <ul className="p-0">
                              <li className="header-dropdown-link">
                                <Link to="/partner-4-tyre-commercial-truck-on-road-price-in-hyderabad">
                                  Ashok Leyland Partner 4-Tyre
                                </Link>
                              </li>
                              <li className="header-dropdown-link">
                                <Link to="/partner-6-tyre-commercial-truck-on-road-price-in-hyderabad">
                                  Ashok Leyland Partner 6-Tyre
                                </Link>
                              </li>
                              <div className="arrow"></div>
                            </ul>
                          </div>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/mitr-school-bus-on-road-price-in-hyderabad" onClick={schoolBus}>
                            Ashok Leyland MiTR School Bus
                          </Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/mitr-staff-bus-on-road-price-in-hyderabad" onClick={staffBus}>
                            Ashok Leyland MiTR Staff Bus
                          </Link>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>

                  <li className="header-nav-link">
                    <Link to="/services" onClick={servicesClick}>
                      Services <FaCaretDown />
                    </Link>
                    <div className="header-dropdown" style={{ width: "10rem" }}>
                      <ul className="p-0">
                        <li className="header-dropdown-link">
                          <Link to="/finance" onClick={financeClick}>Finance</Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/insurance" onClick={insuranceClick}>Insurance</Link>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>

                  <li className="header-nav-link">
                    <Link to="/outlets" onClick={outletsClick}>
                      Outlets <FaCaretDown />
                    </Link>
                    <div className="header-dropdown" style={{ width: "10rem" }}>
                      <ul className="p-0">
                        <li className="header-dropdown-link">
                          <Link to="/showrooms" onClick={showroomsClick}>Showrooms</Link>
                        </li>
                        <li className="header-dropdown-link">
                          <Link to="/service-outlets" onClick={servicesOutletsClick}>Service Centers</Link>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>

                  <li className="header-nav-link">
                    <Link to="/about" onClick={aboutClick}>About</Link>
                  </li>

                  <li className="header-nav-link">
                    <Link to="/awards" onClick={awardsClick}>Awards</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div></div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

function Header() {
  return (
    <>
      <TopHeader />
      <MainHeader />
    </>
  );
}

export default Header;
