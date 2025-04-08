import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../App.css"; // Your custom styles

const services = [
  {
    heading: "Bank Services",
    text: "Cash Deposits, Cash Withdrawals, School Fees Deposits / Payments, Tertiary institution fees payments, Prepaid Electricity tokens sales, Bill & DSTV Subscriptions, Transfer to a Third-party CBZ a/c",
  },
  {
    heading: "EcoCash Services",
    text: "*153*3*1*032477*AMNT# (Cash Out), Cash In, New Lines, Sim Replacement, Airtime Wholesale, Econet Services",
  },
  {
    heading: "Additional services:",
    text: "Nyaradzo, Doves, DSTV, ZOL, Starlink",
  },
  {
    heading: "Additional services:",
    text: "Nyaradzo, Doves, DSTV, ZOL, Starlink",
  },
  {
    heading: "Additional services:",
    text: "Nyaradzo, Doves, DSTV, ZOL, Starlink",
  },
];

const ServiceCarousel = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        slidesPerView={1}
        spaceBetween={45}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              {/* <p className="card-num">{service.num}</p> */}
              {/* <p className="card-heading">{service.heading}</p> */}
              {/* <p className="card-text">{service.text}</p> */}
              {/* <a href="#">Read More</a> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;