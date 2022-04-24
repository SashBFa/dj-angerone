import React from "react";
import { Background, Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Partners = () => {
  return (
    <div className="partners">
      <Parallax strength={300}>
        <h2 className="partners__title">Partners & Sponsors</h2>
        <Background>
          <div className="partners__parallax" />
        </Background>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="parters__carousel"
        >
          <SwiperSlide>
            <i className="fa-brands fa-gitkraken"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i className="fa-brands fa-accusoft"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i className="fa-brands fa-angrycreative"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i className="fa-brands fa-atlassian"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i className="fa-brands fa-contao"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i className="fa-solid fa-dragon"></i>
          </SwiperSlide>
          <SwiperSlide>
            <i className="fa-solid fa-fish-fins"></i>
          </SwiperSlide>
        </Swiper>
      </Parallax>
    </div>
  );
};

export default Partners;
