import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Form, Modal } from "react-bootstrap";
import FormKey from "./img/login-key.svg";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

//screens
import Home from "./screens/Home";
import About from "./screens/About";
import Vehicles from "./screens/Vehicles";
import Services from "./screens/Services";
import Outlets from "./screens/Outlets";
import Showrooms from "./screens/Showrooms";
import Finance from "./screens/Finance";
import Insurance from "./screens/Insurance";
import Awards from "./screens/Awards";
import ServiceOutlets from "./screens/ServiceOutlets";
import BadaDost from "./screens/BadaDost";
import Partner from "./screens/Partner";
import BookService from "./screens/BookService";
import Contact from "./screens/Contact";

//vehicles screens
import Dosti4 from "./vehicles/Dosti4";
import Dosti3 from "./vehicles/Dosti3";
import Dosti3plus from "./vehicles/Dosti3plus";
import DostPlus from "./vehicles/DostPlus";
import PageNotFound from "./screens/PageNotFound";
import DostStrong from "./vehicles/DostStrong";
import DostLite from "./vehicles/DostLite";
import DostCNG from "./vehicles/DostCNG";
import Partner4Tyre from "./vehicles/Partner4Tyre";
import Partner6Tyre from "./vehicles/Partner6Tyre";
import MiTRSchoolBus from "./vehicles/MiTRSchoolBus";
import MiTRStaffBus from "./vehicles/MiTRStaffBus";
import ThankYou from "./screens/ThankYou";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

axios.defaults.baseURL = "https://saboogroups.com/autozone/api/";

function App() {
  const [show, setShow] = useState(false);
  const [buttonloader, setButtonloader] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (sessionStorage.getItem("popup") !== "true") {
      setShow(true);
      sessionStorage.setItem("popup", "true");
    }
  }, []);

  const ModalHome = () => {
    const [number, setNumber] = useState("");
    const onSubmit = async (e) => {
      e.preventDefault();
      const pattern = /^[6-9][0-9]{6,9}$/;
      if (!pattern.test(number)) {
        toast.error("Please enter a valid phone number");
        sessionStorage.setItem("popup", "false");
      } else {
        setButtonloader(true);
        await axios
          .post("/popup", { number })
          .then(function (response) {
            window.location.reload();
          })
          .catch(function (error) {
            toast.error("Oops! something went wrong");
            console.log(error);
          });
      }
    };

    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img src={FormKey} alt="login-key" />
          </div>
          <p className="text-center fw-bold" style={{ color: "#9e2a2b" }}>
            Get a Quote/Offer
          </p>
          <Form className="mt-3" onSubmit={(e) => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                value={number}
                maxLength="10"
                minLength="10"
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Mobile Number"
              />
            </Form.Group>

            <div className="d-flex justify-content-center my-3">
              <div className="d-flex align-items-center me-5">
                <FaWhatsapp style={{ color: "green" }} />
                <a
                  href="https://api.whatsapp.com/send?phone=9100255555&text=%20"
                  target="_blank"
                  className="mb-0 ms-1 text-dark"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div className="d-flex align-items-center">
                <MdPhoneInTalk style={{ color: "grey" }} />
                <a href="tel:9100255555" className="mb-0 ms-1 text-dark">
                  Call Us
                </a>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                className="fs-6"
                required
                label="I agree to the Privacy Policy and Terms of Service."
              />
            </Form.Group>
            <Button
              className="bg-danger w-100"
              type="submit"
              disabled={buttonloader}
            >
              SUBMIT
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <Router>
        <ScrollTop />
        <ModalHome />
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="services" element={<Services />} />
          <Route path="outlets" element={<Outlets />} />
          <Route path="awards" element={<Awards />} />
          <Route path="showrooms" element={<Showrooms />} />
          <Route path="finance" element={<Finance />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="book-a-service" element={<BookService />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service-outlets" element={<ServiceOutlets />} />
          <Route
            path="bada-dost-on-road-price-in-hyderabad"
            element={<BadaDost />}
          />
          <Route
            path="partner-commercial-truck-on-road-price-in-hyderabad"
            element={<Partner />}
          />
          <Route
            path="bada-dost-i4-on-road-price-in-hyderabad"
            element={<Dosti4 />}
          />
          <Route
            path="bada-dost-i3-on-road-price-in-hyderabad"
            element={<Dosti3 />}
          />
          <Route
            path="bada-dost-i3-plus-on-road-price-in-hyderabad"
            element={<Dosti3plus />}
          />
          <Route
            path="dost-plus-on-road-price-in-hyderabad"
            element={<DostPlus />}
          />
          <Route
            path="dost-strong-on-road-price-in-hyderabad"
            element={<DostStrong />}
          />
          <Route
            path="dost-lite-on-road-price-in-hyderabad"
            element={<DostLite />}
          />
          <Route
            path="dost-cng-on-road-price-in-hyderabad"
            element={<DostCNG />}
          />
          <Route
            path="partner-4-tyre-commercial-truck-on-road-price-in-hyderabad"
            element={<Partner4Tyre />}
          />
          <Route
            path="partner-6-tyre-commercial-truck-on-road-price-in-hyderabad"
            element={<Partner6Tyre />}
          />
          <Route
            path="mitr-school-bus-on-road-price-in-hyderabad"
            element={<MiTRSchoolBus />}
          />
          <Route
            path="mitr-staff-bus-on-road-price-in-hyderabad"
            element={<MiTRStaffBus />}
          />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
