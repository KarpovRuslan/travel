import { nanoid } from "nanoid";
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import air1 from "../../assets/img/pack1.webp";
import air2 from "../../assets/img/pack2.jpg";
import air3 from "../../assets/img/pack3.webp";
import air4 from "../../assets/img/pack4.webp";
import air5 from "../../assets/img/pack5.webp";
import air6 from "../../assets/img/pack6.webp";
import air7 from "../../assets/img/pack7.webp";
import air8 from "../../assets/img/pack8.jpeg";
import { Content, Duration, Img, Info, Place, Wrapper } from "./Package.styled";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Package = () => {
  const packageData = [
    {
      image: air1,
      place: "Patagonian Explorer",
      duration: "14 days",
    },
    { image: air2, place: "Authentic Havana", duration: "5 days" },
    { image: air3, place: "A Taste of India", duration: "8 days" },
    { image: air4, place: "Tokyo Express", duration: "7 days" },
    { image: air5, place: "Kenya Safari Express", duration: "7 days" },
    { image: air6, place: "Best of South Africa", duration: "12 days" },
    { image: air7, place: "Best of Morocco", duration: "12 days" },
    { image: air8, place: "Japan", duration: "13 days" },
  ];

  return (
    <section className="packages" id="packages">
      <div className="title">
        <h2>Our tour packages</h2>
        <Content>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={true}
            autoplay={{ delay: 1500 }}
            className="mySwiper"
          >
            {packageData.map((item) => (
              <SwiperSlide key={nanoid()} className="box">
                <Wrapper>
                  <Img src={item.image} alt={item.place} />
                </Wrapper>
                <Info>
                  <div className="location">
                    <Place>{item.place}</Place>
                    <Duration>{item.duration}</Duration>
                  </div>
                </Info>
              </SwiperSlide>
            ))}
          </Swiper>
        </Content>
      </div>
    </section>
  );
};

export default Package;
