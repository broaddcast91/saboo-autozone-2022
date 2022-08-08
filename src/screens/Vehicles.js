import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { carslist } from "../json/CarsList";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Vehicles() {
  return (
    <>
      <Helmet>
        <title>Ashok Leyland Light Commercial Vehicles | Saboo AutoZone</title>
        <meta
          name="title"
          content="Ashok Leyland Light Commercial Vehicles | Saboo AutoZone"
        />
        <meta
          name="description"
          content="Ashok Leyland Light Commercial Vehicles include Bada Dost, DOST, Dost +, Dost Strong, Dost CNG, Partner, Mitr School and Staff bus. Get best offers on Ashok Leyland commercial vehicles. Call now 91002 55555."
        />
        <meta
          name="keywords"
          content="Ashok Leyland Light Commercial Vehicles"
        />
        <meta name="author" content="Broaddcast" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Ashok Leyland Light Commercial Vehicles | Saboo AutoZone"
        />
        <meta
          property="og:description"
          content="Ashok Leyland Light Commercial Vehicles include Bada Dost, DOST, Dost +, Dost Strong, Dost CNG, Partner, Mitr School and Staff bus. Get best offers on Ashok Leyland commercial vehicles. Call now 91002 55555."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-light-vehicles.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Ashok Leyland Light Commercial Vehicles | Saboo AutoZone"
        />
        <meta
          property="twitter:description"
          content="Ashok Leyland Light Commercial Vehicles include Bada Dost, DOST, Dost +, Dost Strong, Dost CNG, Partner, Mitr School and Staff bus. Get best offers on Ashok Leyland commercial vehicles. Call now 91002 55555."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-light-vehicles.jpg"
        />
      </Helmet>
      <VehicleBanner />
      <div className="text-center my-5">
        <h2>Light Commercial Vehicles (LCV)</h2>
      </div>

      <div className="container">
        <div className="row mb-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              210: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            className="mySwiper"
          >
            {carslist.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className="mb-3 shadow-sm" key={vehicle.title}>
                  <div
                    className="card bg-light"
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
                      <h5
                        className="text-center"
                        style={{ color: "rgb(158 42 43)" }}
                      >
                        {vehicle.title}
                      </h5>
                      <div className="c09ew342 mb-3"></div>

                      <div className="d-flex justify-content-between px-3">
                        <div className="d-flex flex-column ">
                          <small className="text-muted mb-1">PAYLOAD</small>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require("../img/payload.webp")}
                              height={24}
                              alt="payload"
                            />
                            <span className="text-muted">
                              {" "}
                              {vehicle.payload}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <small className="text-muted mb-1">GVW</small>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require("../img/gvw.webp")}
                              height={24}
                              alt="gvw"
                            />
                            <span className="text-muted">
                              {" "}
                              {vehicle.gvw} kg
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-4 pb-3 px-3">
                        <div className="d-flex flex-column">
                          <small className="text-muted mb-1">POWER</small>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require("../img/power.webp")}
                              height={24}
                              alt="power"
                            />
                            <span className="text-muted">
                              {" "}
                              {vehicle.power} HP
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <small className="text-muted mb-1">ENGINE</small>
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src={require("../img/engine.webp")}
                              height={24}
                              alt="engine"
                            />
                            <span className="text-muted">
                              {" "}
                              {vehicle.engine} cc
                            </span>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

const VehicleBanner = () => {
  return (
    <>
      <img
        className="mw-100 w-100"
        src={require("../img/vehicles-banner.webp")}
        alt="vehciles-banner"
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
              Light Commercial Vehicles (LCV)
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
