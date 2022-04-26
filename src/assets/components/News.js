import React from "react";
import { newsData } from "./../data/news";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

const News = () => {
  return (
    <div className="news">
      <h2>Recent News</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper3 news__carousel"
      >
        {newsData &&
          newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <div
                className="news__card"
                style={
                  news.id % 2
                    ? {
                        backgroundImage:
                          "-webkit-linear-gradient(top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url(./assets/images/homepage-news-background.jpg)",
                        color: "white",
                      }
                    : null
                }
              >
                <button className="news__date">{news.date}</button>
                <h4>{news.title}</h4>
                <p
                  style={
                    news.id % 2
                      ? {
                          color: "white",
                          opacity: "0.9",
                        }
                      : null
                  }
                >
                  {news.desc}
                </p>
                <button
                  className="news__read"
                  style={
                    news.id % 2
                      ? {
                          color: "white",
                          opacity: "0.9",
                        }
                      : null
                  }
                >
                  Read more <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default News;
