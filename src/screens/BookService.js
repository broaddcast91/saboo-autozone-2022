import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
function BookService() {
  return (
    <div>
      <Helmet>
        <title>
          Ashok Leyland Commercial Trucks Service Booking | Saboo AutoZone
        </title>
        <meta
          name="title"
          content="Ashok Leyland Commercial Trucks Service Booking | Saboo AutoZone"
        />
        <meta
          name="description"
          content="Ashok Leyland Commercial Trucks online service booking helps you book a commercial vehicle service from your mobile. Book your commercial trucks service from our website https://sabooautozone.com/az/ or call us 91002 55555."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Commercial Trucks Service Booking"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Commercial Trucks Service Booking | Saboo AutoZone"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Commercial Trucks online service booking helps you book a commercial vehicle service from your mobile. Book your commercial trucks service from our website https://sabooautozone.com/az/ or call us 91002 55555."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-book-a-service.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Commercial Trucks Service Booking | Saboo AutoZone"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Commercial Trucks online service booking helps you book a commercial vehicle service from your mobile. Book your commercial trucks service from our website https://sabooautozone.com/az/ or call us 91002 55555."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-book-a-service.jpg"
        />
      </Helmet>
      <ServiceBanner />
      <BookServiceFrom />
    </div>
  );
}

const ServiceBanner = () => {
  return (
    <>
      <img
        className="mw-100"
        src={require("../img/book-service-banner.webp")}
        alt="service-banner"
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
              Book A Service
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const BookServiceFrom = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    vehicle: "",
    outlet: "",
    pick_up: "",
  });
  const { name, email, mobile, vehicle, outlet, pick_up } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [buttonloader, setButtonloader] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user.name === "") {
      toast.error("Enter Name");
    }

    if (user.mobile === "") {
      toast.error("Enter Mobile");
    }
    if (user.vehicle === "") {
      toast.error("Enter Vehicle");
    }
    if (user.outlet === "") {
      toast.error("Enter Outlet");
    }

    if (user.pick_up === "") {
      toast.error("Enter Pick Up");
    }

    if (
      user.name !== "" &&
      user.mobile !== "" &&
      user.outlet !== "" &&
      user.vehicle !== "" &&
      user.pick_up !== ""
    ) {
      const pattern = /^[6-9][0-9]{6,9}$/;
      if (!pattern.test(mobile)) {
        toast.error("Please enter a valid phone number");
      } else {
        setButtonloader(true);
        await axios
          .post("https://broaddcast.com/autozone/api/book-a-service", user)
          .then(function (response) {
            navigate("/thank-you");
          })
          .catch(function (error) {
            toast.error("Something went wrong");
            console.log(error);
          });
      }
    }
  };

  return (
    <div className="container shadow rounded border my-5">
      <div className="row p-3 align-items-center">
        <div className="col-lg-6 col-md-12 col-12 mt-3 border-end">
          <h3>Book A Service</h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                  maxLength={10}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Model</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="vehicle"
                  value={vehicle}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value="Bada Dost i4">Bada Dost i4</option>
                  <option value="Bada Dost i3">Bada Dost i3</option>
                  <option value="Dost+">Dost+</option>
                  <option value="Dost Strong">Dost Strong</option>
                  <option value="Dost CNG">Dost CNG</option>
                  <option value="Partner">Partner</option>
                  <option value="MiTR School Bus">MiTR School Bus</option>
                  <option value="MiTR Staff Bus">MiTR Staff Bus</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Outlet</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="outlet"
                  value={outlet}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value="Attapur">Attapur</option>
                  <option value="Gadwal">Gadwal</option>
                  <option value="Jodimetla">Jodimetla</option>
                  <option value="Kukatpally">Kukatpally</option>
                  <option value="LB Nagar">LB Nagar</option>
                  <option value="Mahbubnagar">Mahbubnagar</option>
                  <option value="Nagaram">Nagaram</option>
                  <option value="Kalwakurthy">Kalwakurthy</option>
                  <option value="Siddipet">Siddipet</option>
                  <option value="Sangareddy">Sangareddy</option>
                  <option value="Uppal">Uppal</option>
                  <option value="Vikarabad">Vikarabad</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Pickup Required</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="pick_up"
                  value={pick_up}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col>
                <Form.Check label="I agree to Terms and Conditions" required />
              </Col>
            </Form.Group>

            <Button
              className="btn btn-success mt-4 text-uppercase px-5"
              type="submit"
              disabled={buttonloader}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className="col-lg-6 col-md-12 col-12 pe-0 mt-3">
          <img
            className="mw-100 mh-100 py-auto"
            src={require("../img/book-service-tyre.webp")}
            alt="finance-images"
          />
        </div>
      </div>
    </div>
  );
};

export default BookService;
