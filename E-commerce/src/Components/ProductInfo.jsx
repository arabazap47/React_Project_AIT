import React, { useEffect, useState } from "react";
import background from "../assets/Images/peakpx.jpg";
// import product from "../assets/Images/phone-01.jpg";
import { Rate } from "antd";
import "./Css/Productinfo.css";
import { useParams } from "react-router-dom";
import { products } from "./products";
import { add } from './Redux/Cart/CartSlice';
import {Bounce, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";

const ProductInfo = () => {
  const [product, setProduct] = useState();
  const [similarProducts, setSimilarProducts] = useState([])
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch()
  console.log(id);

  useEffect(() => {
    const productData = products.find((product) => product.id === id);
    // setProduct(productData);
    setProduct(productData);

    if(productData){
      const similar = products.filter(
        (p) => p.category === productData.category && p.id !== productData.id
      );
      setSimilarProducts(similar)
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleDescriptionShow = () => {
    setShowDescription(true);
    setShowReviews(false);
  };
  const handleReviewsShow = () => {
    setShowDescription(false);
    setShowReviews(true);
  };


  const notify = () => toast.success(' Added To Cart!', {
    position: "top-right",
    transition: Bounce
  })

  const handleAdd = (product) =>{
    dispatch(add(product));
    notify();
  }
  return (
    <>
      <section className="productInfo">
        <div className="product_name">
          <img src={background} alt="" />
          <div className="text">{product.productName}</div>
        </div>
      </section>
      {product && Object.keys(product) ? (
        <section className="product_info">
          <div className="container d-flex justify-content-around info">
            <div className="left-img">
              <img src={product.imgUrl} alt="" />
            </div>
            <div className="right-content d-flex flex-column">
              <h2 className="title">{product.productName}</h2>
              <p className="rate mt-4">
                <Rate allowHalf disabled defaultValue={product.avgRating} />
                <span className="rate_num">{product.avgRating}</span>
              </p>
              <p className="price mt-2">
                ${product.price}{" "}
                <span className="category">Category : {product.category}</span>
              </p>
              <p className="description mt-3">{product.shortDesc}</p>
              <input
                type="number"
                className="quantity mt-3"
                min="1"
                defaultValue={1}
              />
              <button className="add-cart mt-4" onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          </div>

          <div className="container toggle_btns ">
            <div className="descrip-section ">
              <button
                className={`description-btn ml-3 ${
                  showDescription ? "active" : ""
                }`}
                onClick={handleDescriptionShow}
              >
                Description
              </button>
              <button
                className={`reviews-btn ${showReviews ? "active" : ""}`}
                onClick={handleReviewsShow}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>
            {showDescription && (
              <p className="description mt-3">{product.description}</p>
            )}
            {showReviews && (
              <div className="reviews mt-3">
                {product.reviews.map((review, index) => (
                  <div className="reviews_customer" key={index}>
                    <p><Rate allowHalf disabled defaultValue={review.rating} /></p>
                    <p >{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <p>Loading</p>
      )}

      <section className="similar_products">
        <h2 className="youmightalsolike">You Might Also Like</h2>
        <div className="container-fluid">
            <div className="row">
              {
                similarProducts.map((similarProduct) =>(
                  <ProductCard key={similarProduct.id} productName ={similarProduct.productName} price={similarProduct.price} productImage={similarProduct.imgUrl} rating={similarProduct.avgRating} id={similarProduct.id} discount={similarProduct.discount ?? null}/>
                ))
              }

            </div>
          </div>

      </section>
    </>
  );
};

export default ProductInfo;
