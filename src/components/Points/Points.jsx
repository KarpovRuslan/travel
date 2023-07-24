import point1 from "../../assets/img/point1.jpeg";
import point2 from "../../assets/img/point2.jpeg";
import point3 from "../../assets/img/point3.jpeg";
import point4 from "../../assets/img/point4.jpeg";
import point5 from "../../assets/img/point5.jpeg";
import point6 from "../../assets/img/point6.webp";
import point7 from "../../assets/img/point7.png";
import point8 from "../../assets/img/points_bucket.jpg";
import point9 from "../../assets/img/point9.jpeg";

import { nanoid } from "nanoid";
import React from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Container,
  Title,
  ItemsRow,
  Box,
  BoxInnerTextHeader,
  BoxImg,
} from "./Points.styled";

const Points = () => {
  const places = [
    {
      image: point1,
      opportunity: "to meet different cultures",
    },
    { image: point2, opportunity: "to learn" },
    {
      image: point3,
      opportunity: "to escape reality",
    },
    { image: point4, opportunity: "to relax" },
    { image: point5, opportunity: "to explore" },
    { image: point6, opportunity: "for humility" },
    { image: point7, opportunity: "to eat" },
    {
      image: point8,
      opportunity: "to live out your bucket list dreams",
    },
    { image: point9, opportunity: "to be transformed" },
  ];
  return (
    <Container>
      <Title>Start your vacation with us</Title>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        //spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{ delay: 2000 }}
        style={{ marginTop: "25px" }}
      >
        <ItemsRow>
          {places.map((i) => (
            <Box>
              <SwiperSlide key={nanoid()}>
                <div
                  className="container-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BoxImg src={i.image} alt={i.opportunity} />
                </div>
                <BoxInnerTextHeader>{i.opportunity}</BoxInnerTextHeader>
              </SwiperSlide>
            </Box>
          ))}
        </ItemsRow>
      </Swiper>
    </Container>
  );
};
export default Points;
