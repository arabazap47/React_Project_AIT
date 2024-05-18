import React from "react";
import "./Css/Homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SliderData } from "./products";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Services from "./Services"

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {SliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="container d-flex justify-content-between align-items-center">
                <div className="hero_content ">
                  <h2 className="content_title">{item.title}</h2>
                  <p className="content_description">{item.desc}</p>
                  <a href="">Visit Collections</a>
                </div>
                <div className="hero_img">
                  <img src={item.cover} className="img-fluid" alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="services">
        <Services />

      </section>
    </>
  );
};

export default HomePage;
