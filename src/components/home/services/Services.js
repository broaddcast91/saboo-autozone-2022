import React, { useEffect, useState } from "react";
import "./Service.css";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Services() {
  const [language, setLanguage] = useState();

  useEffect(() => {
    const getBasha = localStorage.getItem("language");
    setLanguage(getBasha);
    const interval = setInterval(() => {
      const getBasha = localStorage.getItem("language");
      setLanguage(getBasha);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container-fluid bg-light py-5 mt-5">
        <div className="container">
          <h6
            className="text-uppercase text-center"
            style={{ color: "#faa730", letterSpacing: "1px" }}
          >
            services
          </h6>
          <h3 className="mb-3 text-center">
            Our professional and well-trained staff is ready to assist
          </h3>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-3">
              {/* <a href="book-a-service.php"> */}
              <div className="serv-section-2 bg-white shadow">
                <div className="serv-section-2-icon">
                  <figure>
                    <img
                      src={require("../../../img/services.webp")}
                      alt="services"
                    />
                  </figure>
                </div>
                <div className="serv-section-desc">
                  <h4>Services</h4>
                  <p className="text">
                    Saboo Autozone is happy to be one of the most well-known
                    service centers in the area, offering comprehensive car
                    inspections.
                  </p>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
              {/* </a> */}
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              {/* <a href="#"> */}
              <div className="serv-section-2 serv-section-2-act bg-white shadow">
                <div className="serv-section-2-icon serv-section-2-icon-act">
                  <figure>
                    <img
                      src={require("../../../img/spare-parts.webp")}
                      alt="spare parts"
                    />
                  </figure>
                </div>
                <div className="serv-section-desc">
                  <h4>Spare Parts</h4>
                  <p className="text">
                    Genuine Saboo Autozone accessories provide the highest level
                    of safety, appearance, stability, and performance.
                  </p>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
              {/* </a> */}
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              {/* <a href="finance.php"> */}
              <div className="serv-section-2 bg-white shadow">
                <div className="serv-section-2-icon">
                  <figure>
                    <img
                      src={require("../../../img/finance.webp")}
                      alt="finance"
                    />
                  </figure>
                </div>
                <div className="serv-section-desc">
                  <h4>Finance</h4>
                  <p className="text">
                    When you're looking for a new vehicle, Saboo Autozone can
                    help you find the greatest Light Commercial Vehicle
                    financing choices, offers, and discounts.
                  </p>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
}

const reviews = [
  {
    message:
      "I am very satisfied with service of this showroom and I got early vehicle delivery with best price.",
    name: "Jagan Yadav",
  },
  {
    message:
      "We are taken BADA DOST BS6 from Kukatpally I got nice experience good dealer please go on.",
    name: "Rakesh Guptha",
  },
  {
    message:
      "I have purchased one Dost Plus. I got best price for my old vehicle and my new vehicle. good service by Ramesh",
    name: "Suman",
  },
  {
    message:
      "Good place to get your Ashok Leylnd Dost, they try to give wide options with good suggestions.",
    name: "Jagadish Kumar",
  },
  {
    message:
      "Good quality & Very fast service given here at Attapur branch when I visited for my Dost+ Vehicle service.",
    name: "khusro chishty",
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h6
        className="text-uppercase text-center"
        style={{ color: "#faa730", letterSpacing: "1px" }}
      >
        Testimonials
      </h6>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide className="slider-testimonial" key={review.name}>
            <div className="testimonial-box shadow">
              <div className="user-img"></div>
              <div className="text">
                <span className="quote">
                  <FaQuoteLeft />
                </span>
                <p>{review.message}</p>
                <h6>{review.name}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
