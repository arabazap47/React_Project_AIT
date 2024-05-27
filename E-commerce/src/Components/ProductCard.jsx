import React from 'react'
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Rate } from 'antd';
import './Css/Productcard.css'
import { add } from './Redux/Cart/CartSlice';
import {Bounce, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({productName,price,productImage,discount,key,rating,id}) => {
  const dispatch = useDispatch()

  const notify = () => toast.success(' Added To Cart!', {
    position: "top-right",
    transition: Bounce
  })

  const product = {
    id,
    productName,
    price,
    imgUrl: productImage,
    discount,
    rating,
  };

  const handleAdd = (product) =>{
    dispatch(add(product));
    notify();
  }

  return (
    <>
        <div className="col-lg-4 col-md-4 col-sm-12 mb-4" key={key}>
              <div className="product-card d-flex flex-column align-items-center">
                {
                  discount != null && 
                    <p className="discount">{discount}% Off</p>
                }
                <p className='wish'><CiHeart /></p>
                <Link to={`/product/${id}`}>
                <img src={productImage} alt="Product Image" className="product-img img-fluid mx-auto d-block"/>
                <div className="product-details flex-grow-1 d-flex flex-column justify-content-between">
                  <h2 className="product-title">{productName}</h2>
                  <p className="rating"><Rate allowHalf disabled defaultValue={rating}/></p>
                  <p className="product-price">${price}</p>
                  
                </div>
                </Link>
                <button className="add-to-cart" onClick={() => handleAdd(product)}>
                    +
                  </button>
              </div>
              </div>
    </>
  )
}

export default ProductCard