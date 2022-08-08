import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-6">
          <h6
            className="text-uppercase"
            style={{
              color: "#faa730",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            our products
          </h6>
          <h4>
            <Link to="/vehicles" className="text-dark">
              Light Commercial Vehicles (LCV)
            </Link>{" "}
          </h4>
          <p>
            Ashok Leyland's footprint in the Commercial Vehicle sector is
            enhanced by the Light Commercial Vehicle (LCV) vertical, which
            provides client solutions ranging from 1.25 T to 5 T and 13 seats to
            40 seats. The Future Ready i-GEN 6 Technology powers the LCV series
            in the BS6 Era. Our vehicles are designed with excellent ergonomics,
            driver comfort, and safety in mind, so they aren't just for
            transporting things, but also for providing a great customer
            experience.
          </p>
        </div>
        <div
          className="col-xl-6 mb-5 rounded shadow-sm"
          style={{ border: "1px solid #eee" }}
        >
          <div className="row box-hover">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Link to="/bada-dost-i4-on-road-price-in-hyderabad">
                <img
                  src={require("../../../img/Ashok-Leyland-Bada-Dost-i4.webp")}
                  alt="Dost i4"
                  style={{ width: "100%" }}
                />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-2 bg-light">
              <h5 className="text-center">BADA DOST i4</h5>
              <div className="c09ew342 mb-3"></div>
              <div className="d-flex justify-content-between pb-3 px-3">
                <div className="d-flex flex-column">
                  {/* <small className="text-muted mb-1">PAYLOAD</small> */}
                  <div className="d-flex flex-row">
                    <img
                      src={require("../../../img/payload.webp")}
                      height={24}
                      alt="payload"
                    />
                    <span className="text-muted"> 1400 kg</span>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  {/* <small className="text-muted mb-1">GVW</small> */}
                  <div className="d-flex flex-row">
                    <img
                      src={require("../../../img/gvw.webp")}
                      height={24}
                      alt="gvw"
                    />
                    <span className="text-muted"> 3490 kg</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-1 pb-3 px-3">
                <div className="d-flex flex-column">
                  {/* <small className="text-muted mb-1">POWER</small> */}
                  <div className="d-flex flex-row">
                    <img
                      src={require("../../../img/power.webp")}
                      height={24}
                      alt="power"
                    />
                    <span className="text-muted"> 80 HP</span>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  {/* <small className="text-muted mb-1">ENGINE</small> */}
                  <div className="d-flex flex-row">
                    <img
                      src={require("../../../img/engine.webp")}
                      height={24}
                      alt="engine"
                    />
                    <span className="text-muted"> 1478 cc</span>
                  </div>
                </div>
              </div>
              <Link to="/bada-dost-i4-on-road-price-in-hyderabad">
                <Button className="btn-danger d-flex mx-auto px-4 py-2">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
