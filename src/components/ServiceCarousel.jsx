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
    heading: "Crisis Management & Strategic Communications",
    text: "Anticipate. Respond. Rebuild.",
  },
  {
    heading: "Media Intelligence & Narrative Analysis",
    text: "Control the Story. Shape the Conversation",
  },
  {
    heading: "Threatcasting & Strategic Foresight",
    text: "See Beyond the Horizon. Prepare for the Future.",
  },
  {
    heading: "Intelligence & Policy Advisory",
    text: "Turn Data into Actionable Policy.",
  },
  {
    heading: "Digital Investigations & Cyber Threat Intelligence",
    text: "Uncover Hidden Threats. Secure Your Digital Operations.",
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
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <p className="card-num">{service.num}</p>
              <p className="card-heading">{service.heading}</p>
              <p className="card-text">{service.text}</p>
              <a href="/services" className="readmore-link">Read More <i class="ri-arrow-right-circle-line"></i></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;