import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { Helmet } from "react-helmet";

function Awards() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = [
    {
      award_img: require("../img/awards/Ashok-Leyland-Best-Consumer-Satisfaction-Index-Catogory-A-Saboo-AutoZone (2).webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Best-Consumer-Satisfaction-Index-Catogory-A-Saboo-AutoZone.webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Best-Consumer-Satisfaction-Index-Saboo-AutoZone.webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Dealer-of-the-Year-Saboo-AutoZone.webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Highest-Market-Share-Dost (2).webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Highest-Market-Share-Dost.webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Light-Commercial-Trucks-Award.webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Service-Market-Share-Award.webp"),
    },
    {
      award_img: require("../img/awards/Ashok-Leyland-Spare-Parts-Sales-Award.webp"),
    },
    {
      award_img: require("../img/awards/Best-CSI-Award-Saboo-Auto-Zone.webp"),
    },
    {
      award_img: require("../img/awards/Certificate-Of-Achievement-Cost-Estimate- Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Certificate-Of-Achievement-Cost-Estimate- Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Achievement-Highest-Market-Share-Dost-Award-from-Ashok-Leyland.jpg"),
    },
    {
      award_img: require("../img/awards/Certification-of-Achievement-Highest-Vehicle-Sales-Partner-and-Mitr-Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Appreciation-Best-Consumer-Satisfaction-Index-Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Appreciation-Best-Service-Performance.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Appreciation-Best-Service-Performance-Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Appreciation-Dealer-of-the-Year.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Appreciation-Highest-Market-Share-Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Certification-of-Appreciation-Highest-Vehicle-Sales.webp"),
    },
    {
      award_img: require("../img/awards/Digit-Insurance-Award-Saboo-AutoZone.webp"),
    },
    {
      award_img: require("../img/awards/Highest-Market-Sale-Award-from-Ashok-Leyland-Dost.webp"),
    },
    {
      award_img: require("../img/awards/Highest-Vehicle-Sales-Saboo-AutoZone.webp"),
    },
    {
      award_img: require("../img/awards/No-Show-Recovery-Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Parts-Offtake- Award-from-Ashok-Leyland.webp"),
    },
    {
      award_img: require("../img/awards/Saboo-AutoZone-Ashok-Leyland-Excellence-Awards.webp"),
    },
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>
          Awards & Achievements | Ashok Leyland Dealers in Hyderabad, Telangana
        </title>
        <meta
          name="title"
          content="Awards & Achievements | Ashok Leyland Dealers in Hyderabad, Telangana"
        />
        <meta
          name="description"
          content="Saboo AutoZone has won the several awards from Ashok Leyland. Won best light commercial Dealership award from Ashok Leyland."
        />
        <meta name="keywords" content="Awards & Achievements" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sabooautozone.com/" />
        <meta
          property="og:title"
          content="Awards & Achievements | Ashok Leyland Dealers in Hyderabad, Telangana"
        />
        <meta
          property="og:description"
          content="Saboo AutoZone has won the several awards from Ashok Leyland. Won best light commercial Dealership award from Ashok Leyland."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-awards.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sabooautozone.com/" />
        <meta
          property="twitter:title"
          content="Awards & Achievements | Ashok Leyland Dealers in Hyderabad, Telangana"
        />
        <meta
          property="twitter:description"
          content="Saboo AutoZone has won the several awards from Ashok Leyland. Won best light commercial Dealership award from Ashok Leyland."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-awards.jpg"
        />
      </Helmet>
      <AwardsBanner />
      <div className="container my-5">
        <div className="row">
          {images.map((src, index) => (
            <div className="col-lg-3 col-sm-4 mb-3">
              <img
                src={src.award_img}
                // onClick={() => openImageViewer(index)}
                className="mw-100"
                key={index}
                style={{ margin: "2px" }}
                alt={src.award_img}
              />
            </div>
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </>
  );
}

const AwardsBanner = () => {
  return (
    <>
      <img
        className="mw-100"
        src={require("../img/awards-banner.webp")}
        alt="awards-banner"
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
              Awards
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Awards;
