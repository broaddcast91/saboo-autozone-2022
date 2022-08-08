import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Button, Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";

function Insurance() {
  return (
    <>
      <Helmet>
        <title>
          Ashok Leyland Commercial trucks Insurance | Cashless and Easy Claim
          Settlement
        </title>
        <meta
          name="title"
          content="Ashok Leyland Commercial trucks Insurance | Cashless and Easy Claim Settlement"
        />
        <meta
          name="description"
          content="Saboo AutoZone offers the best features on its insurance policies likes cashless and easy settlements. Renew an old policy or buy a new one. For more info call us 91002 55555."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Commercial trucks Insurance"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Commercial trucks Insurance | Cashless and Easy Claim Settlement"
        />
        <meta
          property="og:description"
          content="Saboo AutoZone offers the best features on its insurance policies likes cashless and easy settlements. Renew an old policy or buy a new one. For more info call us 91002 55555."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-insurance.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Commercial trucks Insurance | Cashless and Easy Claim Settlement"
        />
        <meta
          property="twitter:description"
          content="Saboo AutoZone offers the best features on its insurance policies likes cashless and easy settlements. Renew an old policy or buy a new one. For more info call us 91002 55555."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-insurance.jpg"
        />
      </Helmet>
      <InsuranceBanner />
      <InsuranceForm />
    </>
  );
}

const InsuranceBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/insurance-banner.webp")}
        alt="insurance-banner"
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
              Insurance
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const InsuranceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [model, setModel] = useState("");
  const [registerationnumber, setRegisterationnumber] = useState("");
  const [registerationyear, setRegisterationyear] = useState("");
  // const [vehiclerc, setVehiclerc] = useState(null);
  // const [vehicleinsurance, setVehicleinsurance] = useState(null);
  const [claim, setClaim] = useState("");
  const [policynumber, setPolicynumber] = useState("");
  const [insurancecompany, setInsurancecompany] = useState("");
  const [insuranceexpiry, setInsuranceexpiry] = useState("");
  const [buttonloader, setButtonloader] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Enter Name");
    }
    if (mobile === "") {
      toast.error("Enter Mobile");
    }
    if (model === "") {
      toast.error("Enter Model");
    }
    if (registerationnumber === "") {
      toast.error("Enter Registeration Number");
    }

    if (registerationyear === "") {
      toast.error("Enter Registeration Year");
    }

    if (claim === "") {
      toast.error("Select Claim");
    }

    if (policynumber === "") {
      toast.error("Enter Policy Number");
    }

    if (insurancecompany === "") {
      toast.error("Enter Insurance Company");
    }
    if (insuranceexpiry === "") {
      toast.error("Select Insurance expiry date");
    }

    if (
      name !== "" &&
      mobile !== "" &&
      model !== "" &&
      registerationnumber !== "" &&
      registerationyear !== "" &&
      claim !== "" &&
      policynumber !== "" &&
      insurancecompany !== "" &&
      insuranceexpiry !== ""
    ) {
      const pattern = /^[6-9][0-9]{6,9}$/;
      if (!pattern.test(mobile)) {
        toast.error("Please enter a valid phone number");
      } else {
        setButtonloader(true);
        await axios
          .post("https://broaddcast.com/autozone/api/insurance", {
            name,
            email,
            mobile,
            model,
            registerationnumber,
            registerationyear,
            claim,
            policynumber,
            insurancecompany,
            insuranceexpiry,
          })
          .then(function (response) {
            navigate("/thank-you");
          })
          .catch(function (error) {
            toast.error("Oops! something went wrong");
            console.log(error);
          });
      }
    }
  };

  return (
    <div className="container shadow rounded border my-5">
      <div className="row p-3">
        <div className="col-lg-12 col-md-12 col-12 mt-3">
          <h3>Insurance Form</h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            {/* My Car Details */}
            <h6 className="my-4">My Car Details</h6>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Model <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
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

              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Registration Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  value={registerationnumber}
                  onChange={(e) => setRegisterationnumber(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Registration Year <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={registerationyear}
                  onChange={(e) => setRegisterationyear(e.target.value)}
                />
              </div>

              {/* <div className="col-md-6 mb-3">
                <Form.Group controlId="rc">
                  <Form.Label>Vehicle RC</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setVehiclerc(e.target.files[0])}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6 mb-3">
                <Form.Group controlId="insurance">
                  <Form.Label>Vehicle Insurance</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setVehicleinsurance(e.target.files[0])}
                  />
                </Form.Group>
              </div> */}
            </div>

            {/* Existing Policy */}
            <h6 className="my-4">Existing Policy</h6>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Policy Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={policynumber}
                  onChange={(e) => setPolicynumber(e.target.value)}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Insurance Company <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={insurancecompany}
                  onChange={(e) => setInsurancecompany(e.target.value)}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Insurance Expiry Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={insuranceexpiry}
                  onChange={(e) => setInsuranceexpiry(e.target.value)}
                />
              </div>
            </div>

            {/* My Contact Details */}
            <h6 className="my-4">My Contact Details</h6>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength={10}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">
                  Select Claim <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={claim}
                  onChange={(e) => setClaim(e.target.value)}
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
      </div>
    </div>
  );
};

export default Insurance;
