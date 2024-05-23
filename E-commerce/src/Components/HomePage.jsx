import React from "react";
import "./Css/Homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SliderData, serviceData, discoutProducts, products } from "./products";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Services from "./Services"


import ProductCard from "./ProductCard";

const HomePage = () => {
  return (
    <div className="z-0 home_container">
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
      <div className="container-fluid">
            <div className="row row-cols-4">
        {
          serviceData.map((service, index) =>(<Services title={service.title} subtitle={service.subtitle} bg={service.bg} icon={service.icon}/>))
        } 
        </div>
        </div>

      </section>

      {/* Discounted Products */}
      <section className="discount_product ">
        <h2 className="text-center heading">Big Discount</h2>

        <div className="container-fluid">
          <div className="row">
          {
            discoutProducts.map((product, index) =>(<ProductCard key={product.id} productName ={product.productName} price={product.price} discount={product.discount} productImage={product.imgUrl} rating={product.avgRating} />))
          }
          </div>
        </div>

      </section>

      {/* new Arrivals */}
      <section className="new_arrivals">
        <h2 className="text-center heading">New Arrivals</h2>
          <div className="container-fluid">
            <div className="row">
              {
                products.map((product) =>{
                  return (product.category === 'mobile' || product.category === 'wireless') && 
                  <ProductCard key={product.id} productName ={product.productName} price={product.price} productImage={product.imgUrl} rating={product.avgRating} discount={product.discount ?? null}/>
                })
              }

            </div>
          </div>

      </section>
      <section className="best_sales">
      <h2 className="text-center heading">Best Sales</h2>
          <div className="container-fluid">
            <div className="row">
              {
                products.map((product) =>{
                  return (product.category === 'sofa' || product.category === 'chair') && 
                  <ProductCard key={product.id} productName ={product.productName} price={product.price} productImage={product.imgUrl} rating={product.avgRating} discount={product.discount ?? null}/>
                })
              }

            </div>
          </div>
      </section>


      
    </div>
  );
};

export default HomePage;
