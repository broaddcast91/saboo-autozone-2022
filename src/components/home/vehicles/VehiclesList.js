import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Vehicles.css";
const vehicles = [
  {
    title: "BADA DOST i3+",
    img: require("../../../img/dost-i3-plus-thumbnail.png"),
    to: "bada-dost-i3-plus-on-road-price-in-hyderabad",
    payload: "1370 kg",
    gvw: "2990",
    power: "80",
    engine: "1478",
  },
  {
    title: "BADA DOST i3",
    img: require("../../../img/Ashok-Leyland-Bada-Dost-i3-Specifications.webp"),
    to: "bada-dost-i3-on-road-price-in-hyderabad",
    payload: "1400 kg",
    gvw: "2990",
    power: "80",
    engine: "1478",
  },
  {
    title: "DOST+",
    img: require("../../../img/Ashok-Leyland-Dost-Plus-Price-in-Hyderabad.webp"),
    to: "dost-plus-on-road-price-in-hyderabad",
    payload: "1500 kg",
    gvw: "2805",
    power: "80",
    engine: "1478",
  },
  {
    title: "DOST STRONG",
    img: require("../../../img/Ashok-Leyland-Dost-Strong-Features.webp"),
    to: "dost-strong-on-road-price-in-hyderabad",
    payload: "1250 kg",
    gvw: "2590",
    power: "70",
    engine: "1478",
  },
  {
    title: "DOST LiTE",
    img: require("../../../img/ashok-leyland-dost-lite.webp"),
    to: "dost-lite-on-road-price-in-hyderabad",
    payload: "1250 kg",
    gvw: "2545",
    power: "50",
    engine: "1478",
  },
  {
    title: "DOST CNG",
    img: require("../../../img/Ashok-Leyland-Dost-CNG-Price-in-Hyderabad.webp"),
    to: "dost-cng-on-road-price-in-hyderabad",
    payload: "1215 kg",
    gvw: "2545",
    power: "45",
    engine: "1478",
  },
  {
    title: "PARTNER",
    img: require("../../../img/Ashok-Leyland-Partner-Features-Specifications-and-Safety.webp"),
    to: "partner-commercial-truck-on-road-price-in-hyderabad",
    payload: "4579 kg",
    gvw: "7490",
    power: "140",
    engine: "2953",
  },
  {
    title: "MiTR School",
    img: require("../../../img/Ashok-Leyland-MiTR-School-Bus-Features-Specifications.webp"),
    to: "mitr-school-bus-on-road-price-in-hyderabad",
    payload: "3700 mm",
    gvw: "6650",
    power: "140",
    engine: "2953",
  },
  {
    title: "MiTR Staff",
    img: require("../../../img/Ashok-Leyland-MiTR-Staff-Bus-Specifications-Features-and-Safety.webp"),
    to: "mitr-staff-bus-on-road-price-in-hyderabad",
    payload: "3700 mm",
    gvw: "6650",
    power: "140",
    engine: "2953",
  },
];

function VehiclesList() {
  return (
    <div className="container">
      <div className="row">
        {vehicles.map((vehicle, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3" key={index}>
            <div
              className="card bg-light box-hover"
              style={{ border: "1px solid #eee" }}
            >
              <Link to={vehicle.to}>
                <img
                  src={vehicle.img}
                  className="card-img-top"
                  alt={vehicle.title}
                />
              </Link>
              <div className="card-body">
                <h5 className="text-center" style={{ color: "rgb(158 42 43)" }}>
                  {vehicle.title}
                </h5>
                <div className="c09ew342 mb-3"></div>

                <div className="d-flex justify-content-between px-3">
                  <div className="d-flex flex-column ">
                    {/* <small className="text-muted mb-1">PAYLOAD</small> */}
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src={require("../../../img/payload.webp")}
                        height={24}
                        alt="payload"
                      />
                      <span className="text-muted"> {vehicle.payload}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    {/* <small className="text-muted mb-1">GVW</small> */}
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src={require("../../../img/gvw.webp")}
                        height={24}
                        alt="gvw"
                      />
                      <span className="text-muted"> {vehicle.gvw} kg</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-4 pb-3 px-3">
                  <div className="d-flex flex-column">
                    {/* <small className="text-muted mb-1">POWER</small> */}
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src={require("../../../img/power.webp")}
                        height={24}
                        alt="power"
                      />
                      <span className="text-muted"> {vehicle.power} HP</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    {/* <small className="text-muted mb-1">ENGINE</small> */}
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src={require("../../../img/engine.webp")}
                        height={24}
                        alt="engine"
                      />
                      <span className="text-muted"> {vehicle.engine} cc</span>
                    </div>
                  </div>
                </div>
                <Link to={vehicle.to}>
                  <Button className="btn-danger d-flex mx-auto px-4 py-2">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehiclesList;
