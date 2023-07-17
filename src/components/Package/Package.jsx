import { nanoid } from "nanoid";
import air1 from "../../assets/img/pack1.jpeg";
import air2 from "../../assets/img/pack2.jpg";
import air3 from "../../assets/img/pack3.webp";
import air4 from "../../assets/img/pack4.webp";
import air5 from "../../assets/img/pack5.webp";
import air6 from "../../assets/img/pack6.webp";
import air7 from "../../assets/img/pack7.webp";
import { Content, Duration, Img, Info, Place, Wrapper } from "./Package.styled";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Package = () => {
  const packageData = [
    { image: air1, place: "Antalya, Turkey", duration: "4 days" },
    { image: air2, place: "Authentic Havana", duration: "5 days" },
    { image: air3, place: "A Taste of India", duration: "8 days" },
    { image: air4, place: "Tokyo Express", duration: "7 days" },
    { image: air5, place: "Kenya Safari Express", duration: "7 days" },
    { image: air6, place: "Best of South Africa", duration: "12 days" },
    { image: air7, place: "Best of Morocco", duration: "12 days" },
  ];
  return (
    <section className="packages" id="packages">
      <div className="title">
        <h2>Our tour packages</h2>
        {/* <Content></Content> */}
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {packageData.map((item) => (
            <SwiperSlide key={nanoid()}>
              <div className="box">
                <Wrapper>
                  <Img src={item.image} alt={item.place} />
                </Wrapper>
                <Info>
                  <div className="location">
                    <Place>{item.place}</Place>
                    <Duration>{item.duration}</Duration>
                  </div>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_) => (
                      <a key={nanoid()}>
                        <i className="bx bxs-star"></i>
                      </a>
                    ))}
                  </div>
                </Info>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Content>
          {packageData.map((item) => (
            <div className="box" key={nanoid()}>
              <Wrapper>
                <Img src={item.image} alt={item.place} />
              </Wrapper>
              <Info>
                <div className="location">
                  <Place>{item.place}</Place>
                  <Duration>{item.duration}</Duration>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_) => (
                    <a key={nanoid()}>
                      <i className="bx bxs-star"></i>
                    </a>
                  ))}
                </div>
              </Info>
            </div>
          ))}
        </Content> */}
      </div>
    </section>
  );
};

export default Package;
