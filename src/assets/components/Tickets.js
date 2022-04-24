import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

const Tickets = () => {
  return (
    <div className="tickets">
      <h2 className="tickets__title">Tickets</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper2 tickets__carousel"
      >
        <SwiperSlide>
          <div className="tickets__card">
            <h3>Basic</h3>

            <h4>
              <em>$</em> 50
            </h4>
            <div>
              <p>1 Event</p>
              <p>Basic Access</p>
              <p>Club Events Only</p>
              <p>Free Snacks</p>
            </div>
            <button className="button button--little">buy now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tickets__card">
            <h3>Standard</h3>
            <h4>
              <em>$</em> 80
            </h4>
            <div>
              <p>3 Events</p>
              <p>Extended Access</p>
              <p>Club & Beach Events</p>
              <p>Free Snacks & Merch</p>
            </div>
            <button className="button button--little">buy now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tickets__card">
            <h3>Gold</h3>
            <h4>
              <em>$</em> 120
            </h4>
            <div>
              <p>5+ Events</p>
              <p>Unlimited Access</p>
              <p>All Events</p>
              <p>Free Accommodation</p>
            </div>
            <button className="button button--little">buy now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Tickets;
