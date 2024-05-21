import React from 'react'
import { Link } from "react-router-dom";
import { Rate } from 'antd';
import './Css/Productcard.css'

const ProductCard = ({productName,price,productImage,discount,key,rating}) => {
  return (
    <>
        <div className="col-lg-4 col-md-4 col-sm-12 mb-4" key={key}>
              <div className="product-card d-flex flex-column align-items-center">
                <Link>
                {
                    discount != null && 
                    <p className="discount">{discount}% Off</p>
                }
                <img src={productImage} alt="Product Image" className="product-img img-fluid mx-auto d-block"/>
                <div className="product-details flex-grow-1 d-flex flex-column justify-content-between">
                  <h2 className="product-title">{productName}</h2>
                  <p className="rating"><Rate allowHalf disabled defaultValue={rating}/></p>
                  <p className="product-price">${price}</p>
                  <a href="#" className="add-to-cart">
                    +
                  </a>
                </div>
                </Link>
              </div>
              </div>
    </>
  )
}

export default ProductCard