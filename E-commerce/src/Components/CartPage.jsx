import React from "react";
import Image from "../assets/Images/phone-01.jpg";
import "./Css/Cartpage.css";
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { remove, incrementQuantity, decrementQuantity } from "./Redux/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  const calculateTotalPrice = () => {
    return cartData.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(1);
  };



//   console.log(cartData);
const handleRemove = (productId) => {
    // dispatch({type:"REMOVE_PRODUCT", payload: productID});
    dispatch(remove(productId));
  };
  return (
    <>
    <section className="cart_wrapper">
        <div className="main_container">
        <div className="left_side">
            {
                cartData && cartData.length > 0 ? (
                    cartData.map((product, index) => (
                        <div className="item" key={index} >
                <img className="image" src={product.imgUrl} alt=""/>
                <div className="content-info d-flex flex-column justify-content-around">
                    <h2>{product.productName}</h2>
                    <p className="p-price">${product.price}.00 * {product.quantity}<span className="ms-3 sub-total"> ${product.price * product.quantity}</span></p>
                </div>
                <div className="btns">
                    <button className="remove" onClick={() => {handleRemove(product.id)}}><IoClose /></button>
                    <div className="qunatity-btn">
                        <button className="add" onClick={() => handleIncrement(product.id)}><IoMdAdd /></button>
                        <button className="less" onClick={() => handleDecrement(product.id)}><FiMinus /></button>
                    </div>
                </div>
            </div>
                    )
                )) : (<div className="empty_cart_section d-flex flex-column align-items-center justify-content-center">
                <p className="empty_cart">Your Cart Is Empty</p>
                <Link to="/shoppage" className="btn btn-primary">Browse Products</Link>
              </div>) 
            }
        </div>
                
        <div className="right_side">
          <h2>Cart Summary</h2>
          <div className="price">
            <p>Total Price:</p>
            <h3>${calculateTotalPrice()}.00</h3>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
