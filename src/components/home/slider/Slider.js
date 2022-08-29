import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { GoPerson } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const banners = [
  {
    id: 1,
    banner_img: require("../../../img/autozone-bada-coming-soon.webp"),
  },
  {
    id: 2,
    banner_img: require("../../../img/banner1.webp"),
  },
  {
    id: 3,
    banner_img: require("../../../img/banner2.webp"),
  },
  {
    id: 4,
    banner_img: require("../../../img/banner3.webp"),
  },
  {
    id: 5,
    banner_img: require("../../../img/banner4.webp"),
  },
  {
    id: 6,
    banner_img: require("../../../img/banner5.webp"),
  },
];

const BannerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              className="slider-img mw-100 w-100"
              src={banner.banner_img}
              alt={banner.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const RequestCall = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, mobile } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (user.name === "") {
      toast.error("Enter Name");
    }
    if (user.mobile === "") {
      toast.error("Enter Mobile");
    }

    if (user.name !== "" && user.mobile !== "") {
      setLoading(true);
      await axios
        .post("https://saboogroups.com/autozone/api/request-call", user)
        .then(function (response) {
          navigate("thank-you");
          // console.log(response);
        })
        .catch(function (error) {
          toast.error("Oops! something went wrong");
          console.log(error);
        });
    }
  };

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
      <div
        className="section py-5"
        style={{ backgroundColor: "#0d2034", color: "white" }}
      >
        <div className="container">
          <h4 className="text-capitalize">Request a Call back</h4>
          <p>
            {language === "2"
              ? "దయచేసి మా మద్దతు బృందాన్ని సంప్రదించండి మరియు 24 పని గంటలలోపు ప్రతిస్పందనను ఆశించండి."
              : language === "3"
              ? "कृपया हमारी सहायता टीम से संपर्क करें और 24 कार्य घंटों के भीतर प्रतिक्रिया की अपेक्षा करें।"
              : "Please get in touch with our support team and expect a response within 24 working hours."}
          </p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row pt-2">
              <div className="col-lg-3 col-md-6 col-12">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Name"
                    id="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    style={{ lineHeight: "28px" }}
                  />
                  <InputGroup.Text>
                    <GoPerson />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Email"
                    type="email"
                    style={{ lineHeight: "28px" }}
                    ftype="email"
                    id="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Mobile"
                    type="text"
                    id="Phone"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => onInputChange(e)}
                    maxLength={10}
                    style={{ lineHeight: "28px" }}
                  />
                  <InputGroup.Text>
                    <FiPhoneCall />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <Button
                  className="btn btn-danger text-uppercase w-100"
                  type="submit"
                  style={{ lineHeight: "28px" }}
                  disabled={loading}
                >
                  submit now
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function Slider() {
  return (
    <>
      <BannerSlider />
      <RequestCall />
      {/* <Test/> */}
    </>
  );
}

export default Slider;
