import React from "react";
import "./Css/Footer.css";
import { FaShoppingBag } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <section className="Layout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 footer-column">
              <div className="block-center">
                <h3 className="lo_go"> < FaShoppingBag className="bag"/>MART</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  velit laboriosam labore obcaecati fugit distinctio officia eos
                  laborum quas vero? Lorem ipsum dolor sit amet.
                </p>
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
                <p>
                  70 Washington Square South, New York, NY 10012, United States
                </p>
                <p>Email: example@gmail.com</p>
                <p>Phone: +1 1123456 780</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
