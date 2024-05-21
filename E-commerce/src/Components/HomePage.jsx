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


      {/* Footer */}
      <section className="Layout">
      <div className="container-fluid">
  <div className="row">
    <div className="col-12 col-sm-6 col-md-3 footer-column">
      <div className="block-center">
        <h3>MART</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa velit laboriosam labore obcaecati fugit distinctio officia eos laborum quas vero? Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  
    <div className="col-12 col-sm-6 col-md-3 footer-column">
      <div className="block-center">
      <h3>About Us</h3>
        <div className="list">
          <a href="/">Careers</a>
          <a href="/">Out Stores</a>
          <a href="/">Our Cares</a>
          <a href="/">Terms & Condition</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
    
    <div className="col-12 col-sm-6 col-md-3 footer-column">
      <div className="block-center">
      <h3>Customer Care</h3>
        <div className="list">
          <a href="/">Help Center</a>
          <a href="/">How To Buy</a>
          <a href="/">Track Your Order</a>
          <a href="/">Corporate & Bulk Purchasing</a>
          <a href="/">Returns & Refunds</a>
        </div>
      </div>
      
    </div>
    

    
    <div className="col-12 col-sm-6 col-md-3 footer-column">
      <div className="block-center">
        <h3>Contact Us</h3>
        <p>70 Washington Square South, New York, NY 10012, United States</p>
        <p>Email: example@gmail.com</p>
        <p>Phone: +1 1123456 780</p>
        </div>
    </div>
  </div>
</div>



      </section>
    </div>
  );
};

export default HomePage;
