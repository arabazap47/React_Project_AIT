import React, { useEffect, useState } from "react";
import "./Css/Shoppage.css";
import background from "../assets/Images/peakpx.jpg";
import { products } from "./products";
import ProductCard from "./ProductCard";
import {GoSearch} from "react-icons/go"

const ShopPage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];
  console.log(categories);

  // const filteredProducts = products.filter((product) => {
  //   const matchSearch = product.productName.toLowerCase().includes(searchItem.toLowerCase())
  //   const matchCategory =product.category.toLowerCase() === selectedCategory.toLowerCase();
  //   return matchSearch || matchCategory
  //  })
  const filteredProducts = searchItem
    ? products.filter((product) => {
        const matchSearch = product.productName
          .toLowerCase()
          .includes(searchItem.toLowerCase());
        return matchSearch;
      })
    : selectedCategory === ""
    ? products.filter((product) => product.category === "sofa")
    : products.filter((product) => product.category === selectedCategory)

  const searchInput = (event) => {
    setSearchItem(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <section>
        <div className="headline">
          <img src={background} alt="" />
          <div className="text">Product</div>
        </div>
      </section>
      <section className="products_section">
        <div className="container-fluid d-flex justify-content-between">
        
        {/* CAtegory Dropdown */}
        <select
        className="category_select"
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchItem}
            onChange={searchInput}
          />
          <div className="icon"><GoSearch /></div>

        </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {filteredProducts.map((product) => (
              // return (product.category === 'sofa' || product.category === 'chair') &&
              <ProductCard
                key={product.id}
                productName={product.productName}
                price={product.price}
                productImage={product.imgUrl}
                rating={product.avgRating}
                id= {product.id}
                discount={product.discount ?? null}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
