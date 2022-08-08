import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

function Finance() {
  return (
    <div>
      <Helmet>
        <title>
          Ashok Leyland Light Commercial Trucks Finance | Lowest EMI Options
        </title>
        <meta
          name="title"
          content="Ashok Leyland Light Commercial Trucks Finance | Lowest EMI Options"
        />
        <meta
          name="description"
          content="Ashok Leyland Light Commercial Trucks Finance service. Saboo AutoZone offer commercial truck loans with features like low down payment, low interest rates. For more info call us 91002 55555."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Light Commercial Trucks Finance"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Light Commercial Trucks Finance | Lowest EMI Options"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Light Commercial Trucks Finance service. Saboo AutoZone offer commercial truck loans with features like low down payment, low interest rates. For more info call us 91002 55555."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-finance.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Light Commercial Trucks Finance | Lowest EMI Options"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Light Commercial Trucks Finance service. Saboo AutoZone offer commercial truck loans with features like low down payment, low interest rates. For more info call us 91002 55555."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-finance.jpg"
        />
      </Helmet>
      <FinanceBanner />
      <FinanceForm />
    </div>
  );
}

const FinanceBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/finance-banner.webp")}
        alt="finance-banner"
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
              Finance
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const FinanceForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    vehicle: "",
    outlet: "",
    message: "",
    purchase_time: "",
    loan_amount: "",
    loan_duration: "",
  });
  const {
    name,
    email,
    mobile,
    vehicle,
    outlet,
    message,
    purchase_time,
    loan_amount,
    loan_duration,
  } = user;
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
    if (user.message === "") {
      toast.error("Enter Message");
    }
    if (user.purchase_time === "") {
      toast.error("Enter Purchase Time");
    }

    if (user.loan_amount === "") {
      toast.error("Enter Loan Amount");
    }
    if (user.loan_duration === "") {
      toast.error("Enter Loan Duration");
    }

    if (
      user.name !== "" &&
      user.mobile !== "" &&
      user.outlet !== "" &&
      user.vehicle !== "" &&
      user.outlet !== "" &&
      user.message !== "" &&
      user.purchase_time !== "" &&
      user.loan_amount !== "" &&
      user.loan_duration !== ""
    ) {
      const pattern = /^[6-9][0-9]{6,9}$/;
      if (!pattern.test(mobile)) {
        toast.error("Please enter a valid phone number");
      } else {
        setButtonloader(true);
        await axios
          .post("https://saboogroups.com/autozone/api/finance", user)
          .then(function (response) {
            navigate("/thank-you");
          })
          .catch(function (error) {
            setButtonloader(false);
            toast.error("Oops! Something went wrong");
            console.log(error);
          });
      }
    }
  };
  return (
    <div className="container shadow rounded border my-5">
      <div className="row p-3 align-items-center">
        <div className="col-lg-6 col-md-12 col-12 mt-3 border-end">
          <h3>Ashok Leyland Commercial Trucks Financial Services</h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            {/* My Contact Details */}
            <h6 className="my-4">My Contact Details</h6>
            <div className="row">
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
                  name="mobile"
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                  className="form-control"
                  minLength="10"
                  maxLength="10"
                />
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

              <div className="col-md-12 mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={message}
                  onChange={(e) => onInputChange(e)}
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Share Loan Requirements */}
            <h6 className="my-4">Share Loan Requirements</h6>
            <div className="row">
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
                  <option value="Dost i4">Dost i4</option>
                  <option value="Dost i3">Dost i3</option>
                  <option value="Dost+">Dost+</option>
                  <option value="Dost LiTE">Dost LiTE</option>
                  <option value="Dost Strong">Dost Strong</option>
                  <option value="Dost CNG">Dost CNG</option>
                  <option value="Partner">Partner</option>
                  <option value="MiTR School Bus">MiTR School Bus</option>
                  <option value="MiTR Staff Bus">MiTR Staff Bus</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Purchase Time</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="purchase_time"
                  value={purchase_time}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value="Immediately">Immediately</option>
                  <option value="1 Week">1 Week</option>
                  <option value="2 Week">2 Week</option>
                  <option value="3 Week">3 Week</option>
                  <option value="1 Month">1 Month</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Loan Amount</label>
                <input
                  type="text"
                  className="form-control"
                  name="loan_amount"
                  value={loan_amount}
                  onChange={(e) => onInputChange(e)}
                  maxLength={10}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Loan Duration In Years</label>
                <select
                  className="form-select"
                  name="loan_duration"
                  value={loan_duration}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value="Immediately">Immediately</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="4 Years">4 Years</option>
                  <option value="Other">Other</option>
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
            src={require("../img/finance-images.webp")}
            alt="finance-images"
          />
        </div>
      </div>
    </div>
  );
};

export default Finance;
